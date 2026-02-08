---
type: post
title: 최신버전 mobx mobx-react에서 observer re-render 안될 때
date: 2021-02-11 08:40:16
categories:
  - react
tags:
  - react
  - mobx
  - mobx-react
  - troubleshooting
---

# 최신버전 mobx mobx-react 패키지 설치 후 observer 리렌더링이 되지 않는다?! 😭

오랜만에 새로운 프로젝트를 세팅하느라 React 프로젝트를 만들고, state 관리로는 *MobX*로 결정. `mobx`롸 `mobx-react` 패키지를 설치한다. 테스트로 `observable` 변수를 만들고 `observer` 컴포넌트에서 상태 변화를 확인해본다. 그런데 갑자기 업데이트가 되질 않는다. 도대체 무슨 일인가?! 이것저것 해봐도 한 것은 정확히 똑같은데?!!

## Enabling decorators
[공식 문서](https://mobx.js.org/enabling-decorators.html)에 소개된 바로는, *MobX* 버전 6이전까지는 ES.next 데코레이터를 이용해서 `observable`, `computed`, `action`으로 만들기로 되어 있었다. 하지만 데코레이터는 현재 ES 표준이 아니고, 표준화의 과정이 너무 오랜 기간이 소요된다. 그리고 표준이 이전에 데코레이터와는 다른 방식으로 구현되고 있는 것으로 보이고 있다고 한다. MobX 버전 6부터는 `makeObservable`과 `makeAutoObservable`을 대신 사용하도록 한다고 한다.

```
import { makeObservable, observable, computed, action } from "mobx"

class Todo {
    id = Math.random()
    @observable title = ""
    @observable finished = false

    constructor() {
        makeObservable(this)
    }

    @action
    toggle() {
        this.finished = !finished
    }
}

class TodoList {
    @observable todos = []

    @computed
    get unfinishedTodoCount() {
        return this.todos.filter(todo => !todo.finished).length
    }

    constructor() {
        makeObservable(this)
    }
}
```

## mobx와 mobx-react의 올바른 버전 선택은?

사실 셋업하는 시점에는 최신 버전의 `mobx`, `mobx-react`를 설치해서 사용하지만, [mobx-react 문서](https://github.com/mobxjs/mobx-react)에 따르면 `mobx-react`는 유지보수가 되고 있는 법전이 2가지 존재한다고한다. `mobx`와 `mobx-react`는 다음 버전 궁함이 있는 것으로 보인다:

| `mobx-react` 버전 | `mobx` 버전 | React 버전 | hook 기반 컴포넌트 지원 여부 |
|---|---|---|---|
|v7|6.*|16.8+|지원|
|v6|4._ / 5._|16.8+|지원|
|v5|4._ / 5._|0.13+|미지원 (`<Observer>` 로 감싸서 사용)|

혹시나 MobX가 잘 동작하지 않는다면, 버전을 확인해봐야 할 것 같다.
