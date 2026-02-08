---
title: "yarn.lock package-lock.json 간 변환"
date: 2020-12-02 13:11:10
categories:
  - javascript
tags:
  - javascript
  - yarn
  - npm
  - package
  - lock
---

# Yarn or NPM?

웹 개발시 `yarn`이나 `npm`을 패키지 매니저로 사용한다. `yarn`과 `npm`은 거의 동일하다. `npm`이 더 기본값이라고 생각할 수 있다. 나는 `yarn`을 선호한다. 내가 처음 `yarn`을 접하던 시기에 `yarn`이 `npm`보다 미세하게 더 빨랐고, 이전에는 패키지를 설치할 때에 `npm install --save`라고 `--save` 옵션을 쓰지 않으면 추가한 패키지가 `package.json`의 의존성에 작성되지 않았다. 그래서 항상 패키지를 설치할 때에 `--save`라는 옵션을 사용해야하는 번거로움이 존재했다. 그래서 `Yarn`을 선호했다.

# `yarn.lock` or `package-lock.json`?

`yarn`을 이용하면 `yarn.lock` 파일이 생성되고 `npm install`을 하게되면 `pacakge-lock.json`파일이 생성되는 것을 확인할 수 있다. 파일 내용을 보면 알겠지만 설치된 의존성 패키지들의 버전이 기록되어있다. 프로젝트가 개발되는 시점에 어떤 의존성이 설치되어있는가 확인할 수 있는 자료가 된다. `package.json`파일의 의존성 정보에는 각 패키지의 **특정 버전을 명시**해서 작성할 수도 있지만, *일정 버전 이상*이라든지 조금 더 유연하게 작성할 수 있기 때문에, 이 **lock**파일 들이 *패키지를 설치하는 시점에 어떤 버전을 설치했는지 확인할 수 있는 기준*이 된다. 또한, 개발 하던 시점의 패키지 의존성 상태를 복원할 수 있는 자료가 된다. 즉, **의존성 패키지들의 버전의 일관성**을 유지하기 위해 필요한 파일이라는 뜻이다.

이 lock 파일들을 `gitignore`에 추가해야하는지 말아야하는지에 대한 이야기가 있곤 하는데 바로 위 이유 때문에 이 lock파일들은 무조건 유지해야하고 **gitignore처리하면 안된다**.

# `yarn.lock` `package-lock.json` 간 변환

그런데 나는 yarn 개발 환경을 써왔는데, 정작 원격 빌드 환경은 npm을 쓰는 경우에는, 또는 그 반대의 경우에는 어떻게 해야하는가? 좀 황당한 질문이지만 이런 종류가 왕왕있다. 그래서 찾아봤다. 그랬더니 *[synp][ref2]* 라는 도구가 있었다. *synp*는 `yarn.lock` 파일을 `package-lock.json`파일로 변환하거나 그 반대로 변환해주는 도구이다. `npm install -g` 또는 `yarn global add`로 글로벌로 설치해서 사용할 수 있다.

```
yarn global add synp
```

변환은 다음과 같이 커맨드를 입력하여 변환 가능하다:

```
synp --source-file yarn.lock            # will create package-lock.json
synp --source-file package-lock.json    # will create yarn.lock
```

그럼 이제 `package-lock.json` `yarn.lock` 고민 끝 ㅎㅎㅎ


### Reference
- [stackoverflow][ref1]
- [synp][ref2]

[ref1]: https://stackoverflow.com/questions/50093627/how-to-convert-package-lock-json-to-yarn-lock
[ref2]: https://github.com/imsnif/synp