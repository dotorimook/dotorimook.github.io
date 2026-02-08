---
title: "맥에서 vscode auto import가 되지 않을 때"
date: 2021-06-20 14:07:19
categories:
  - vscode
tags:
  - vscode
  - typescript
  - 오토 임포트
  - auto import
---

# 잘되던 Auto Import가 왜 갑자기?!
맥환경 vscode에서 갑자기 auto import가 이상하리만큼 잘 안되기 시작했다..?! 다른 많은 유/무료 IDE를 제치고 vscode를 메인 IDE로 사용하고 있는 점 중 하나가 가벼움과 ts와의 궁합으로 auto complete과 auto import를 강력하게 지원한다는 것이었는데.. 대체 이유가 뭘까? 몇가지 환경 체크를 했다.

## **tsconfig.json** (혹은 **jsconfig**)의 설정은 올바른가?
**tsconfig.json** 의 `compilerOptions` 에 인덱싱돼어야할 path나 설정들이 올바르게 설정되어있는지 확인한다. 해당 설정에 따라 파일을 읽지 못하는 경우도 발생한다.

## typescript version 체크
vscode창 우측 하단에 보면 typescript의 버전이 나오는데, 버전을 누르면 Typescript의 버전을 선택할 수가 있다. workspace 버전으로 맞춰보지.

## Auto Import 확장 사용하기
딱히 별 차도가 없다? [Auto Import](https://marketplace.visualstudio.com/items?itemName=NuclleaR.vscode-extension-auto-import)라는 익스텐션을 사용해보자. 사실 위 문제들은 없었던 것 같고, **Auto Import** 설치로 한방에 해결했다.

vscode는 기본 기능도 좋지만 잘 찾아보면 개발환경을 훨씬 강력하게 만드는 익스텐션들이 꽤 있는 것 같다.