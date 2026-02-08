---
title: "[짧은 팁] jest Cannot find module 'module' from 'src/components/Component.tsx' 에러 해결"
date: 2022-03-05 23:06:01
categories:
  - jest
---
TDD 생활중에 마주한 뜻밖의 상황에 대한 원인과 해결 방법을 공유하고자 한다.

## jest Cannot find module 'module' 에러

```
● Test suite failed to run

    Cannot find module 'module' from 'src/components/Component.tsx'

    Require stack:
      src/components/Component.tsx
      src/__test__/components/Component.spec.tsx

       9 | import React from 'react'
    > 10 | import { Method } from 'module'
         | ^
      11 |

      at Resolver.resolveModule (node_modules/jest-resolve/build/index.js:306:11)
      at Object.<anonymous> (src/components/Component.tsx:10:1)
```
(경로나 모듈명들 중요하지 않은 내용 일부는 각색했다.)


최근 작업하는 프로젝트에서 모듈을 하나 추가한 후 Jest로 테스트 코드를 작성했는데, 테스트 중에  `Cannot find module` 이라는 에러 메시지를 만나게 됐다. 재밌는 점은 브라우저로 실행해보았을 때엔 잘 된다는 점이었다. jest로 테스트만 잘 작동하지 않았다.

## 원인과 해결 방법

원인은 -당연하겠지만- 새롭게 추가한 모듈에 있었다. 해당 모듈을 jest에서 부를 수 없는 이유는 해당 모듈의 package.json에 `main` 프로퍼티가 정의되어있지 않아서였다. 실제로 해당 모듈의 package.json을 살펴보니 `main`이 없었다.

해결방법은 당연하게도 `main`의 경로를 입력해주면 된다.

```json
{
  ...
  "module": "dist/index.js",
  "main": "dist/index.js",
  ...
}
```

깔끔하게 해결된다.✨😎✨

### package.json의 `main` 프로퍼티의 역할

`main`은 모듈의 시작점, entrypoint가 되는 지점을 알려준다.
> "main" 항목은 당신의 프로그램의 시작점이 되는 모듈의 ID입니다.
>
> 즉, 'foo' 라는 패키지가 있다면, 이 패키지를 사용자가 설치한 뒤, require("foo") 를 실행했을 때 "main" 으로 지정한 모듈의 exports 객체가 반환됩니다.

[package.json 간단히 알아보기](https://webclub.tistory.com/472)의 내용을 보면 `main`에 대해 위와 같이 설명하고 있다.

위 내용을 살펴보면 jest가 해당 모듈을 import하려고 할 때에 메인 진입 지점을 찾지 못하기 때문으로 추측해볼 수 있다.

## Reference
1. [https://stackoverflow.com/questions/53466859/jest-cannot-find-module-from-node-modules](https://stackoverflow.com/questions/53466859/jest-cannot-find-module-from-node-modules)
2. [https://programmingsummaries.tistory.com/385](https://programmingsummaries.tistory.com/385)