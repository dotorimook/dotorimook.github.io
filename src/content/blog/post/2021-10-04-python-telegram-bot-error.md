---
layout: post
title: "module 'telegram' has no attribute 'Bot' 에러 해결 python telegram"
date: 2021-10-04 09:58:07
categories:
  - python
tags:
  - python
  - telegram
---
# module 'telegram' has no attribute 'Bot'

텔레그램 봇을 간단하게 만들었다가, 오랜만에 다른 환경에서 돌려야하는데 다음과같은 에러를 발견했고, 그 해결책을 찾아보고자 한다.

## ImportError: No module named telegram

처음  `telegram` 모듈을 import 하는 스크립트를 실행하려고 할 때 다음과 같은 메시지를 받게 될 것이다:

```
ImportError: No module named telegram
```

그래서 당연하게 `telegram` 모듈을 설치하면:

```bash
$pip install telegram
```

실행 시 아래와 같은 에러가 발생한다:

```
module 'telegram' has no attribute 'Bot'
```

## module 'telegram' has no attribute 'Bot' 해결법

잠깐 뭔가 잘못된건가? 😟

당황하지말고 아래와 같이 실행하자.

```bash
$pip uninstall python-telegram-bot telegram
$pip install python-telegram-bot
```

이렇게 하고 다시 실행하면 잘 실행되는 것을 확인할 수 있다. 😎

사실상 설치해야하는 패키지는 `python-telegram-bot`이다. 명심하자.
