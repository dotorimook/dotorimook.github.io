---
layout: post
title: 'Gatsby Something went wrong installing the "sharp" module 개츠비 오류'
date: 2021-11-19 00:28:13
categories:
  - gatsby
tags:
  - gatsby
  - sharp
---

# Something went wrong installing the "sharp" module
`gatsby develop` `gatsby build` 등 개츠비 개발 또는 빌드 중에 아래와 같은 메시지를 보게 되는 경우가 있다.

```
Something went wrong installing the "sharp" module

Cannot find module '../build/Release/sharp.node'
```

나는 새로운 플러그인을 설치한 경우에 이렇게 되었는데, 해결법을 알기 위해 검색해보는 중에 브랜치를 옮겨다니면서 발생하는 경우도 있는 것 같았다. 원인은 **의존성이 변경 될 때 `sharp` 모듈이 이 점에 취약하다는 것 같다.**

아래와 같은 명령어로 수정할 수 있다:

```shell
rm -r node_modules/sharp
yarn install --check-files
```

참고로 `--check-files` 옵션은 **node_modules**에 이미 설치된 파일이 제거되진 않았는지 확인하는 옵션이다.

# Reference
[관련 github issue](https://github.com/gatsbyjs/gatsby/issues/20957#issuecomment-579414671)