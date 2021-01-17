---
layout: post
title: "에러 “error fsevents@2.0.7: The platform ”linux“ is incompatible with this module.”, ”error Found incompatible module.”를 만났을 때"
date: 2021-01-17 10:03:58
categories: javascript
tags: javascript node npm yarn docker error
---

*cra* 프로젝트를 *docker*를 이용해 빌드하려고 `node` 컨테이너에서 `yarn`을 실행하도록 했는데 다음과 같은 에러를 마주하게 된다.

```
yarn install v1.21.1
[1/4] Resolving packages...
[2/4] Fetching packages...
info fsevents@2.3.1: The platform "linux" is incompatible with this module.
info "fsevents@2.3.1" is an optional dependency and failed compatibility check. Excluding it from installation.
error postcss@8.1.9: The engine "node" is incompatible with this module. Expected version "^10 || ^12 || >=14". Got "13.8.0"
error Found incompatible module.
info Visit https://yarnpkg.com/en/docs/cli/install for documentation about this command.
```

아무래도 에러는 특정 모듈이 linux 호환이 안된다는 것 같다? 이런 일이...
`node:latest` 이미지로도 동일했다.
이 문제는 `fsevents` 모듈의 문제로, `fsevents` 모듈이 MacOS를 위한 것이고, linux에서는 안되어서 인 것 같다.
그래서 **yarn.lock** 파일의 `fsevents`가 포함된 dependency 부분을 제거하는 것으로 해결 가능하다고 한다.

`yarn.lock`파일의
```
  fsevents@^1.2.7, fsevents@^2.0.6:
  version "2.0.7"
  resolved "https://registry.yarnpkg.com/fsevents/-/fsevents-2.0.7.tgz#382c9b443c6cbac4c57187cdda23aa3bf1ccfc2a"
  integrity sha512-a7YT0SV3RB+DjYcppwVDLtn13UQnmg0SWZS7ezZD0UjnLwXmy8Zm21GMVGLaFGimIqcvyMQaOJBrop8MyOp1kQ==
```
부분과
```
  optionalDependencies:
    fsevents "^2.0.6"
```
부분을 제거한다.

더욱 같단한 방법으로는 `--ignore-engines` 옵션을 확용한다. 아래와 같이 커맨드를 입력하도록 하면 해결된다.
```
yarn install --ignore-engines
```

`--ignore-engeins` 옵션은 엔진 체크를 무시하는 옵션이다.

### reference
- [stackoverflow](https://stackoverflow.com/questions/40225844/why-does-yarn-say-found-incompatible-module-when-the-version-is-correct)
- [stackoverflow](https://stackoverflow.com/questions/57082249/how-to-fix-error-fsevents2-0-7-the-platform-linux-is-incompatible-with-thi)
