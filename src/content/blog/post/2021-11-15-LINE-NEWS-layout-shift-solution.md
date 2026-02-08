---
title: "LINE NEWS에서 레이아웃 시프트 문제를 해결한 방법 - LINE Developer Days 2021 요약"
date: 2021-11-15 22:02:50
categories:
  - React
tags:
  - React
  - layout shift
  - skeleton
  - LINE dev days 2021
  - line developer days 2021
  - line dev days
  - line developer days
---
# LINE NEWS에서 레이아웃 시프트 문제를 해결한 방법

<aside>
💡 제가 발표를 보면서 흥미롭게 보았던 내용 위주로 정리를 한 내용입니다. 모든 발표 내용을 수록하지 않고 있을 수 있고 더 자세하게 내용을 알고 싶으시다면 함께 첨부된 발표자료 링크나 유튜브를 보시길 바랍니다 😎

</aside>

# Abstract

> LINE NEWS의 특징 중 하나는 개인 맞춤형 콘텐츠라는 것입니다. 월 154억 PV(2021년 8월 기준)를 바탕으로 데이터를 집계해서 사용자별로 콘텐츠와 레이아웃을 나누고 있습니다. 사용하는 UI 컴포넌트는 100개 이상이며, 첫 화면에 필요한 API 요청 수도 20개가 넘는데요. 이로 인해 페이지 로딩 속도가 느려지거나 레이아웃이 콘텐츠의 로딩에 따라서 움직이는 'Layout Shift'현상 심각해지는 경우가 있었습니다. LINE NEWS에서는 이러한 문제를 해결하기 위해 스켈레톤 스크린을 구현하는 방식을 채택하고 성능을 향상시키기 위해 노력했습니다.
> 
> 
> 이번 세션에서는 LINE NEWS에서 스켈레톤 스크린을 활용한 방법과 개발하면서 겪은 비하인드 스토리를 소개합니다.
> 

LINE NEWS 서비스 UI에서  발생할 수 있는 Layout Shift 문제를 해결하기 위해서 도입한 스켈레톤 스크린을 어떻개 개발하였는지 설명합니다.

# Layout Shift란?

- 페이지 로딩 이후 data fetching 등이 완료됨에 따라 컴포넌트가 렌더링되면서 레이아웃이 변경될 수 있는데, 이 과저엥서 기존에 있던 컴포넌트 영역이 밀려날 수 있는 현상을 의미
- 레이아웃 시프트가 일어나는 시점에 클릭을 하게 되면 사용자가 원하지 않았던 뉴스 기사로 이동 되는 등 불편을 초래할 수 있음.

# LINE NEWS에서 발생하는 Layout Shift

LINE NEWS 태에서는 세가지 성격의 Layout Shift를 야기하는 API가 있음:

1. 개인화된 API
    - 모든 유저에게 해당되고
    - 유저마다 다른 영상을 보여주어야하므로 CDN Cache를 사용할 수 없음
    - Response time이 느림
2. A/B 테스팅
    - 신규 UI를 릴리즈할 때마다 A/B 테스팅을 활용해서 사용자 반응에 따라 최종 PR UI를 결정한다고 함
    - 릴리즈를 할 때에는 새로운 UI에 대한 오류 영향을 최소화하기 위해 단계적으로 릴리즈하는 롤 아웃 방식을 사용하고 있다고 함.
    - 사용자 셋에 따라 다른  UI를 노출해야함
3. 광고
    - 개인화된 광고를 사용하므로 개인화된 API와 유사함

# Layout Shift에 대한 해결방안 → Skeleton Screen

## Skeleton Screen

- 레이아웃 시프트를 해결하기 위해 Skeleton Screen을 이용하고 있음.
- 스켈레톤을 이용하면, data fetching 후 영역을 미리 잡아 둘 수 있으므로 레이아웃 시프트를 예방하는 방안이 될 수 있음
- 하지만 광고 같은 경우는 광고에 따라 컴포넌트 영역이 달라질 수 도 있기 때문에 그 위치를 제대로 파악하기 어려우며, 여전히 레이아웃 시프트가 발생할 수 있음
- 그래서 스크린 전체를 뒤덮는 스켈레톤 방식을 이용했다 고 함.
    - 화면에 필요한 data fetching이 다 이루어진 상태에서 스켈레톤을 해제하는 방식임
    - 실제 레이아웃과 미묘하게 달라서 위화감이 없지 않겠느냐는 우려가 있었지만, 실제 구현해서 확인했을 때 큰 위화감이 들지 않아서 채택했다고 함.

## Skeleton Screen의 해제 조건

- 모든 API를 다 기다리면 너무 늦어질 가능성이 있음
- 결론적으로 해제 조건은 뷰포트 내에 들어오는 API와 해당하는 컴포넌트들의 아이템 높이를 이용해서 파악해야함 (뷰포트 높이 < 고정 컨텐츠의 전체 높이 일 때)

## Skeleton을 적용한 UI 아키텍쳐

### 컴포넌트

- 컴포넌트의 렌더링과 State 관리는 Flux 패턴을 사용 ([Facebook Utils](https://facebook.github.io/flux/docs/flux-utils/)를 이용)
- 스켈레톤을 위해 두가지 타입의 컴포넌트를 사용함
    1. `<SkeletonScreen />`
        - 비즈니스로직을 포함하지 않고 스타일만 있는 stateless한 컴포넌트
    2. `<SkeletonOverlap />`
        - 스켈레톤 / 컴포넌트를 그려주는 로직이 포함된 컴포넌트
        - 스켈레톤 해제시 fade-out 애니메이션 담당
        - `useAnimationSkeletonOverlap`이라는 훅을 사용함
            - 스켈레톤을 그리기 위한 state를 사용하도록 해주는 hook
            - 다른 컴포넌트에서도 SkeletonScreen을 사용하는 방식을 재사용하기 위해 훅으로 관리

### 상태 관리

- 스켈레톤 스크린을 위한 상태를 정의함
    
    ```tsx
    export interface SkeletonOverlapState {
    	screenHeight: number;
    	tabs: SkeletonOverlapTab[];
    }
    
    export interface SkeletonOverlapTab {
    	[index: number]: {
    		elementHeight:number;
    	}
    	totalElementHeight: number;
    	readyToHide: boolean;
    }
    ```
    
    - 인덱스와 컴포넌트의 높이 값을 모두 기록하고 있는데, 순서에 따라서도 레이아웃 시프트가 발생할 수 있기 때문에 컴포넌트의 순서가 중요해진다고 함.
- 각 API를 통해 내용이 확정되어 높이값이 확정시키는데, 데이터 상태에 따라 상태값을 나눠서 관리하고 있음
    - `None`, `Pending`, `Sucess`, `Failed`, `Cached`, `Cached & Pending`
    - `Sucess`, `Failed`, `Cached`, `Cached & Pending` 는 컴포넌트가 렌더링 할 수 있는 상태임
    - data fetching 이후 이 상태값을 바꿔주는 Action을 dispatch 해줌
- 뷰포트에 포함된 데이터의 상태가 모두 렌더링 가능한 조건일 때 (AND 조건) 스켈레톤을 해제시킴

### 유틸리티

- 스켈레톤을 좀 더 쉽게 사용할 수 있는 훅과 클래스 컴포넌트를 제공하고 있음
1. for hooks
    
    ```tsx
    export function useRenderReady<T extends HTMLElement>({
    	dataStatus,
    	onRenderReady,
    }) {
    ...
    }
    ```
    
2. for class components
    
    ```tsx
    export function RenderReadyWrapper<T extends HTMLElement = HTMLElement>({
    dataStatus,
    onREnderReady,
    childerenCallback,
    }):RenderReadyWRapperProps<T>){
    	const rootRef = useRenderReady<T>({...});
    	return childrenCallback(rootRef);
    }
    ```
    
- 이런 유틸리티를 통해 스켈레톤을 사용하는 방법을 통일하여 작업할 수 있도록 가이드함

## Trouble Shooting

스켈레톤 컴포넌트를 개발하면서 두 가지 문제와 해결책을 생각했다고 함.

1. 스켈레톤이 해제되지 않는 현상
    
    → 타임아웃을 걸어서 어쨌든 스켈레톤을 해제시킴
    
2. 스켈레톤이 통합되어있는 상태이기 때문에 어떤 부분에서 장애가 났는지 판별이 어려움 → 디버깅 메커니즘을 제공
    - 개발 환경에서 디버깅 툴을 제공하고 있음
    - 각 컴포넌트의 데이터 상태와 높이값 등을 제공하고 있음

## 결과

- 스켈레톤 스크린을 적용하고 난뒤에 레이아웃 시프트 빈도 비율이 0.348 → 0.002로 낮아짐
    - 롤링 등의 극단적인 케이스에서 발생한 것이므로 실제로는 0이라고 봐도 무방
- 최악의 경우 타임아웃 값인 2.5s 정도 스켈레톤 스크린이 노출됨 → 스켈레톤이 통으로 이루어져있기 때문에 느려졌을 때 전체 스켈레톤 해제에 어려움이 있음

# 느낀점

관심있어하는 FE 분야의 첫 번째 세션이라 기대를 했는데, 일본스러운 발표였다라는 느낌이 들었다.

1. 꼼꼼함
    
    이렇게 꼼꼼하게 모든 상태를 관리하는 것이 일본 특유의 장인정신과 디테일이 느껴지는 것 같아 감동스러웠다. 이제껏 스켈레톤을 쓸 때 이런식으로 관리한 적이 없었는데, 좀 신기하다는 느낌이 들었다.
    
2. 이렇게까지 해야했나?
    
    일본스러운 해법이었다는 생각이 드는 느낌이 들었던 것은, '일반적으로 스켈레톤을 만들 때에 컴포넌트 별로 분리해서 관리하는 것이 더 유연하게 관리할 수 있는데 왜 이렇게 해야만 했을까?' 하는 점이었다. 발표의 초반부에 그 이유를 설명하고는 있다. 개인화된 일부 컴포넌트에서 보여지는 컨텐츠가 일정하지 않기 때문이었다. 이런 부분에서 이렇게 디테일이 들어가면, 당연히 이 작업을 하는 시간만큼 다른 일정을 수행할 수 없게 될 텐데, 디자인적으로 컨텐츠 높이를 고정시키면 이렇게까지 관리할 필요가 없지않았나 하는 생각이 들었다.
    
    어쩌면 제품 개발이 이미 일정 궤도에 올랐고, 디테일한 튜닝이 필요한 시점에 적절하게 튜닝한 것일 수도 있겠지만, 그런 상황이 아니었다면 유관 부서 간에 협의로 조율될 수 있는 문제가 아니었나 생각한다.
    
    환경적으로 조율할 수 없었을 수도 있지만 (대부분의 인간사는 말로 다 해결된다..), 주어진 환경을 최대한 만족하는 방안을 찾은 것, 혹은 조율보다 그냥 방법을 찾지 뭐라고 생각했을 수도 있을 것 같은데 (ㅋㅋ). 이런 점이 좀 일본 스럽달까(?)..
    
3. 협업과 코드 퀄리티를 고려한 유틸리티와 디버깅 툴
    
    프로 개발자의 소양(ㅋㅋ) 이기도 한 것 같은데, 디버깅 툴을 통해 개발 환경에서 쉽게 디버깅이 가능하게 UI를 제공한 점과 custom hook 등의 유틸리티를 이용해서 다른 개발자들이 작업할 때에 스켈레톤 렌더링 방식을 통일하고, 관련 로직을 재사용하게 했다는 점이 좋은 점인 것 같다.
    

접근 방식 등 여러가지 흥미로운 점이 있었던 발표이긴 했다.

# 발표 영상
<iframe width="1488" height="846" src="https://www.youtube.com/embed/jJ6MqAbsDc8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

# Reference

[Line Developer Days 2021 세션](https://linedevday.linecorp.com/2021/ko/sessions/97)

[발표 Youtube](https://www.youtube.com/watch?v=jJ6MqAbsDc8)

[발표자료 PDF](https://speakerdeck.com/line_devday2021/solving-the-layout-shift-problem-in-line-news)