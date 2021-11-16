---
layout: post
title: "LINE Creative Lab: HTML5 Canvas로 눈길 끄는 광고 만들기"
date: 2021-11-16 16:54:06
categories:
  - etc
tags:
  - etc
  - LINE dev days 2021
  - line developer days 2021
  - line dev days
  - line developer days
---

# LINE Creative Lab: HTML5 Canvas로 눈길 끄는 광고 만들기

<aside>
💡 제가 발표를 보면서 흥미롭게 보았던 내용 위주로 정리를 한 내용입니다. 모든 발표 내용을 수록하지 않고 있을 수 있고 더 자세하게 내용을 알고 싶으시다면 함께 첨부된 발표자료 링크나 유튜브를 보시길 바랍니다 😎

</aside>

# Abstract

> LINE Creative Lab은 사용자가 자신이 만든 콘텐츠를 다른 LINE 서비스에 광고로 게시할 수 있는 서비스로 현재 일본에서만 제공하고 있습니다.
> 
> 
> LINE Creative Lab은 HTML5 Canvas를 이용해 사용자가 몇 개의 간단한 단계만 거치면 광고를 만들 수 있게 해줍니다. 사용자는 이미지와 영상 편집기를 사용해 다양한 광고를 제작할 수 있습니다. 영상 편집기는 크게 두 부분으로 나뉘는데요. 첫 번째는 영상 템플릿을 만들 수 있는 프론트엔드 애플리케이션이고, 두 번째는 영상 렌더링 처리를 담당하는 Node.js 인코딩 서버입니다. 빠른 렌더링을 위해 클라이언트에서는 WebGL을 이용한 GPU 하드웨어 가속을 지원하고 서버에서는 headless-gl(OpenGL) GPU 하드웨어 가속을 지원합니다. 이번 발표에서는 LINE 사용자에게 LINE Creative Lab을 제공하기 위해 어떻게 서비스를 기획하고, 개발하고, 배포했는지에 대해서 이야기하고자 합니다.
> 

# 요약

## LINE Creative Lab?

- 라인에서 보여줄 광고(이미지 및 동영상 배너)를 직접 만들 수 있는 에디터
- 기존 agency에 비용을 지불해서 광고 컨텐츠를 제작 (금전전 비용, 컨텐츠 의뢰에서 나오는 부담 및 시간 소요) → 직접 제작 (빠르고, 비용절감 가능)
- 이미지 및 비디오 에디터 제공
- 제공 기능
    - 요소를 편집할 수 있는 레이어 제공
        - 이미지 레이어 (이미지, 비디오)
        - 쉐잎 레이어 (이미지, 비디오)
        - 로고 레이어 (이미지, 비디오)
        - 텍스트 레이어 (이미지, 비디오)
        - 씬 편집 (비디오만)
        - 전환 편집 (비디오만)
    - 쉽게 제작이 가능한 템플릿 제공
- 일반적인 시나리오
    - 툴을 이용해서 내용을 편집
    - 미리보기
    - 템플릿으로 저장
    - 렌더링

## Challenge

### Font Loading

- 폰트 사이즈가 크면 미리보기 등 렌더링하는데 시간이 소요됨
- 해결책은 두가지
    1. Font Server:  폰트 서버가 특정 렌더링 데이터를 넘기면 텍스트가 렌더링 된 이미지를 넘겨준다.
        - 잦은 변경에 오히려 비효율이 발생할 수 있음
    2. Font subsets: 유니코드 범위로 폰트를 분리하고 css `@font-face`의  `unicode-range`를 이용하여 유니코드 범위로 구분
        - 일일이 폰트를 분리가 번거로움
        - 최악의 경우 모든 폰트를 불러야함
    
    ⇒ 결론은 Font subsets로 적용함
    

### Shape

- 쉐입을 디자이너가 svg 형태로 전달 받음
- 이 형태에서 스트로크를 적용했을 때 처음 설정한 범위에서 crop 되는 현상이 있음
    - svg를 **Path2D**를 이용해서 그림
    - **Path2D**는 모던 브라우저에서 대부분 지원하고 있음

### Encoding

- 비디오를 인코딩 할 수 있는 방법은 몇 가지가 있음:
    - MediaRecorder API ⇒ 30s 영상을 만들 때 30s 소요
        - 대부분의 브라우저에서 지원
        - 브라우저 단에서 인코딩 가능하고
        - 구현이 간편
        - 캡쳐하는 형태기 때문에 동영상 길이만큼 기다려야함
        - 탭 이동시 pause 되고, 탭을 닫을 때 멈추는 단점이 있음
        
        ⇒ 프로덕션에서 사용하지 않음
        
    - FFMPEG ⇒ 30s 영상을 만들 때 7s 소요
        - Raw frames → FFMPEG → video encoding 방식
        - 클라이언트에서 실행할 수 없으므로 서버가 필요함
    - Hardware Encoder 활용 ⇒ 30s 영상을 만들 때 2s 소요
        - NodeJS SERVER → N-API binding(C++을 실행시켜주는 스크립트) → low-level SDK (C++) → HW encoder 로 전달되면서 인코딩 되는 형태
        - 클라이언트에서 실행할 수 없으므로 서버가 필요함
        - Node JS 서버를 이용해서 코드베이스를 재사용할 수 있음
        - 브라우저에서만 지원되던 API 일부는 특정 패키지와 맵핑돼서 사용할 수 있음
            - `canvas` → `node-canvas`
            - WebGL → `headless-gl`
        - GPU Memory - RAM/SDD 간 이동시 병목이 발생 → 통으로 GPU Memory를 이용하면서 병목현상을 제거

### Difference of text

- 서버쪽에서 인코딩하기 때문에 일부 클라이언트 환경과 텍스트 렌더링의 미묘한 차이가 있음
    - macOS - node server 간 차이
    - MacOS - Headless (Linux) 간 차이

### 신규 이펙트 추가

- GLSL 개발자 부재와 오픈소스를 사용으로 인해 신규 이펙트를 추가할 때 개발 시간이 충분히 필요함

# 느낀점

개발 과정에서 발생할 수 있는 이슈들과 이를 해결해나가는 방법이 흥미로웠다.

상당히 디테일한 부분까지도 신경을 쓰고 있음을 알 수 있었다.

javascript는 역시 백 프론트를 넘나들면서 개발하기 좋은 언어라는 생각이 들었다. 😎

# Reference

[Line Developer Days 2021 소개 사이트](https://linedevday.linecorp.com/2021/ko/sessions/103)

[영상](https://youtu.be/buWVbRubuBE)

[발표자료](https://speakerdeck.com/line_devday2021/line-creative-lab-create-catchy-ads-with-html5-canvas)