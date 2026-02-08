---
title: "[짧은 팁] mac env: python: No such file or directory 에러 해결"
date: 2022-10-10 14:10:43
categories:
  - npm
  - mac
tags:
  - sharp
  - mac
  - python
  - env
  - error
  - gatsby
---

# env: python: No such file or directory

M1 환경에서 gatsby를 사용하려고 했더니 에러가 났다. `sharp` 관련된 플러그인 모듈들에서 난 것 같다. `sharp`는 v0.28.0 부터 apple silicon 지원이 된 것 같다.

하지만 내 경우에는 python과 관련된 에러 같다. 최신 버전이었던 v0.30.1 을 설치하려고 해도 설치가 실패하는 것이었다:

> env: python: No such file or directory

python2.7도 깔아보고 python3도 깔아보았지만 소용 없었다.. 😭 절망.. 알고보니 이미 python도 설치되어있는 상태였고 python 실행도 잘되었다..도대체 무엇이 문제인가..ㅠ 절망하던 중, 검색하다보니 symbolic link로 해결되었다는 글을 보았고, 해보니까 나도 해결되었다.

터미널에 아래와 같이 입력한다:

```sh
ln -s "$(brew --prefix)/bin/python"{3,}
```

이후에 깔끔하게 해결 되었다 ✨

# Reference
- https://github.com/lovell/sharp/issues/2460
- https://github.com/nuxt/image/issues/204
- https://stackoverflow.com/questions/71468590/env-python-no-such-file-or-directory-when-building-app-with-xcode
- https://velog.io/@choijahyoun/macenv-python-No-such-file-or-directory