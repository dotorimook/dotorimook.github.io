---
layout: post
title: "개발자를 위한 친절한 UI 컴포넌트 라이브러리 만들기 - LINE Developer Days 2021 요약"
date: 2021-11-16 16:54:06
categories:
  - React
tags:
  - React
  - storybook
  - TSDoc
  - Declare file
  - mdx
  - typesciprt
  - LINE dev days 2021
  - line developer days 2021
  - line dev days
  - line developer days
---

# 개발자를 위한 친절한 UI 컴포넌트 라이브러리 만들기

<aside>
💡 제가 발표를 보면서 흥미롭게 보았던 내용 위주로 정리를 한 내용입니다. 모든 발표 내용을 수록하지 않고 있을 수 있고 더 자세하게 내용을 알고 싶으시다면 함께 첨부된 발표자료 링크나 유튜브를 보시길 바랍니다 😎

</aside>

# Abstract

> 우리가 사용하는 다양한 NPM 패키지 중에는 개발자를 위한 문서나 예제가 충분하지 않은 경우가 많습니다. 개발 초기에는 문서와 예제를 잘 작성해 두었더라도 시간이 지남에 따라 실제 코드와 제공되는 문서가 조금씩 달라지는 경우를 많이 경험하게 됩니다. 하지만 TypeScript와 Storybook을 활용하면 이런 문제를 점진적으로 해결해 나갈 수 있습니다.
> 
> 
> 이번 세션에서는 사내 UI 컴포넌트 라이브러리인 Universal Video Player를 개편하며 얻은 인사이트를 바탕으로 TypeScript와  Storybook을 활용해 적은 노력으로 문서와 예제 페이지와 테스트를 쉽게 구성해 보는 방법을 다룹니다.
> 

# 요약

## 개발자 친화적?

- 개발자의 경험을 향상 = developer experience를 향상
- 효과적으로 문서를 관리하여 작성자 / 작업자 모두에게 효과적인 방법을 고민
- 발표자가 개발하고 있는 Universal Video Player (라인 여기저기에 비디오 플레이어를 삽입하는 컴포넌트를 개발/배포) 를 예시로 설명함

## Problem

- 기존 문서의 문제점
    - Readme에서 모두 작성
        - 링크로 연결되어 있음
        - 작성할 때 다시 문서로 돌아와서 내용을 찾아봐야했음
        - 풍부한 예제가 없음

## Objectives

- 개발자 친화적으로 변경해보자
    - Easy to use: 쉽고 가볍게 작성하고 읽음
    - Kindness: 친절하게 설명되어있어서 빠르게 적용해볼 수 있게 한다
    - Usefulness: 여러가지 환경에서 사용할 수 있도록 풍부한 예제를 제공하려고 함
- maintainer 입장에서는
    - Sustainable Document
    - Stable
    - Automation

## Solutions

- Typescript
    - TSDoc ([https://tsdoc.org/](https://tsdoc.org/))
        - 타입스크립트의 표준화된 주석 포맷으로 IDE에서 지원해줌
        - 자동완성과 같이 보여지므로 컨텍스트 변경없이 쓸 수 있어서 훨씬 편함
        - Playground([https://tsdoc.org/play](https://tsdoc.org/play)) 도 지원함
    - Declare file
        - 문서화와 구현부를 분리해서 관리할 수 있음
    
    ⇒ IDE Workspace에서 볼 수 있기 때문에 컨텍스트를 옮기지 않고, 개발 환경 내에서 참고하여 작성할 수 있음
    
- Storybook
    - 여러가지 애드온들을 결합해서 사용할 수 있어서 빠르게 퀄리티 있고 인터랙티브한 문서를 만들 수 있음
    - 빌드에서 CDN에 올리면 별도 서버 구현 없이 바로 배포 가능
    - MDX
        - md + jsx 의 개념으로 md문법
            - 컴포넌트를 직접 담을 수 있음
            - 변수 사용도 가능
    - Snapshot
    - Code Sandbox (Mdx-embed Addon)
        - mdsx-embed addon을 사용해서 code sandbox나 codepen 등을 문서에 삽입할 수 있음
    - viewport addon
        - 반응형 예제에 사용 가능한 addon
    
    ⇒ 인터랙티브한 Sample 들을 제공하므로써 다양한 환경에서 바로 적용해볼 수 있는 문서를 제공하게 됨
    

# 느낀점

일단 역시 큰 회사니 개발 영역이 많이 나뉘어져있긴 하구나 하는 느낌이 들었고, 많은 개발자들과 협업해야하는 기회가 많구나 하는 생각이 들었다. 특히 발표자가 작업하는 공용으로 사용되는 컴포넌트를 개발하는 역할은 더욱 그러하겠다고 생각했다. 개발 문화에 대한 고민이 많은 조직에 속해있는 것은 얼마나 행운인가 하는 생각도 들었다.

주어진 역할이 그래서 더욱 그랬겠지만, 발표자분이 가진 협업을 위한 개발 환경에 대한 깊은 고민을 엿볼 수 있는 발표였다. 비슷한 고민을 해왔기 때문에 더욱 공감이 되는 발표 내용이었다.

기본적으로 개발자라면 누구나 **주석/문서가 필요 없는 코드가 좋은 코드**라고 생각하고, 문서에 대한 유지보수 노력을 최소화 하고싶어 한다. 하지만, 여러 사람들이 많이 사용하는 코드라면 문서가 필요하지 않을 수가 없다. 그렇다면 최소한의 유지보수 노력이 들고 (코드와의 동기화), 가능하면 사용하기 좋아야 할 것인데 (코드상에서 설명이 보이는), 이러한 고민의 결과라는 느낌이 들었다.

나의 경우에는 스토리북을 오래전에 도입 시도를 했는데, 조직이 크지 않아서, 문서도 크게 필요로하지 않고, 실제로 보는 사람이 없어서 (ㅠㅠ) 오히려 유지보수 부담이 들어 스토리북을 없애고 개발 환경에서 볼 수 있는 샘플 코드 페이지를 사용해왔다. 하지만 스토리북이 많은 곳에서 차용되고 있고, 써드파티 생태계도 괜찮아서, 도입도 괜찮겠다는 생각이 들었다.

특히, 스냅샷 활용 (PR과 비교해서 사이드 이펙트를 추측)과 써드파티 팁들, 버저닝+CDN 으로 문서의 버전 관리하는 팁들도 눈여겨 볼만 했다.

마치 리빙 포인트를 읽는 듯한 쏠쏠한 팁을 볼 수 있는 좋은 발표였다.

# 발표 영상

<iframe width="824" height="480" src="https://www.youtube.com/embed/xQOpjychnwQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

# Reference

[Line Developer Days 2021 세션](https://linedevday.linecorp.com/2021/ko/sessions/100/)

[발표 Youtube](https://www.youtube.com/watch?v=jJ6MqAbsDc8)

[발표자료 PDF](https://speakerdeck.com/line_devday2021/how-we-made-a-developer-friendly-ui-component-library)