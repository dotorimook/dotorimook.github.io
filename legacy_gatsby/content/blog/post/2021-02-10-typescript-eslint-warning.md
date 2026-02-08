---
layout: post
title: "eslint 'React' was used before it was defined  @typescript-eslint/no-use-before-define 대처법"
date: 2021-02-10 22:53:41
categories:
  - typescript
tags:
  - typescript
  - eslint
---

# 'React' was used before it was defined ?

typescript 기반 CRA 프로젝트를 생성한 다음 eslint르 적용을 다음과 같이 적용했는데,

```shell
yarn add eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --dev
```

다음과 같은 어이없는 메시지를 발견하고 말았다.

```
'React' was used before it was defined  @typescript-eslint/no-use-before-define
```

정의 전에 `React`가 사용되었다고? 무슨말인지...🤯

일반적으로 `no-use-before-define`은 변수 선언 전에 변수가 사용되는 경우를 탐지하고 그 잠재된 위험을 발견하기 위한 워닝이다. 이런 워닝이 왜 `import React from 'react'` 구문에서 발생되는 것일까?

대충 찾아보았는데 프로젝트 내에 `react-scripts` 패키지가 설치되어 있을 텐데, `react-scripts` 내에 의존성으로 설치된 `@typescript-eslint`의 버전과 프로젝트의 `package.json`에 설치된 버전이 맞지 않아서 충돌하면서 생기는 문제라고 한다.

간단하게 아래와같에 프로젝트 단 `@typescript-eslint` 의존성을 조절해주면 된다.

```
yarn add @typescript-eslint/parser@4.0.1 @typescript-eslint/eslint-plugin@4.0.1 --dev
```

그러면 그 워닝이 깨끗하게 사라진다.

## 다른 방법: 단순 무시
`.eslintrc`에 다음과 같이 설정해서 해당 규칙을 무시하는 방법도 있다.

```
"rules": {
  // note you must disable the base rule as it can report incorrect errors
  "no-use-before-define": "off",
  "@typescript-eslint/no-use-before-define": ["error"]
}
```

## 다른 방법: react-scripts 버전
`react-scripts`버전과도 문제가 있는 것같다. 버전 4 이상에서는 lint 에러가 compile error로 인식된다. 이건 생각보다 귀찮은 문제다. 3점대로 낮추면 이런 문제가 해결된다. `eslint` 버전 관련 내용이 나올경우 별도로 설치한 `eslint` 패키지를 지워본다.


그럼 클린 코딩 😎



## Reference
1. [Github Issue](https://github.com/typescript-eslint/typescript-eslint/issues/2540)
2. [Stack Overflow](https://stackoverflow.com/questions/63818415/react-was-used-before-it-was-defined)