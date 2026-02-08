---
layout: post
title: "Jira 스마트 커밋(Smart Commit) 사용하기"
date: 2020-10-22 13:05:21
categories:
  - Jira
tags:
  - Jira
  - git
  - bitbucket
  - commit
---

이슈 관리를 위해 Jira를 사용하고 있다.
일반적으로 Bitbucket과 연동해서 사용하고 있을텐데, 원격 저장소에 커밋을 할 경우 연동된 Jira 이슈에 몇가지 부가적인 기능을 하게 할 수 있다.
이것을 **스마트 커밋 (Smart Commit)**이라고 부른다. **스마트 커밋(Smart Commit)**은 다음과 같은 몇 가지 기능을 제공한다.

# 스마트 커밋 문법
스마트 커밋은 다음과 같이 커밋을 작성하면 된다.
```
<ignored text> <ISSUE_KEY> <ignored text> #<COMMAND> <optional COMMAND_ARGUMENTS>
```

`<ignored text>`는 아무 텍스트이다.
예를들면,

```
Chore: ABC-123 코멘트 테스트 #comment Hello, World!
```

라고 커밋 메시지를 작성하면, **ABC-123** 이라는 Jira 이슈에 *'Hello, World!'*라는 댓글이 달리게 된다.

스마트 커밋은 3가지 커맨드를 제공한다

# 댓글 - `#comment`
방금 위에서 알아보았던 이슈에 댓글을 달기다.

```
ABC-123 #comment Hello World
```

**ABC-123**이라는 지라 이슈에 *'Hello World'*라는 댓글이 달린다.

# 소요시간 입력 - `#time`
소요시간 단위를 입력할 수 있다.

```
ABC-123 #time 3m Hello World
```

라고하면 **ABC-123**이라는 이슈에 **시간추적** 3분 로그가 추가되고, *'Hello World'*라는 댓글이 달린다.
소요시간은 이슈에 일일이 입력하기 너무 번거로운 점이 있는데, 이런식으로 하면 소요시간을 입력할 수 있고, 앞으로 업무 예측하기 좋아진다.

# transition
이슈의 상태를 바꿀 수 있는 커맨드이다. 워크플로우의 각 상태를 이어주는 화살표를 **transition**이라고 부르고, 커밋을 통해 Jira 이슈의 상태를 바꿀 수 있다.
만약 워크플로 상에 `close`라는 트랜지션이 존재한다면

```
TEST-23 #close Fixed this today
```

라고 커밋을 하면 **TEST-23**이라는 이슈에 *Fixed this today*라는 댓글이 달리면서 이슈는 닫히게 된다.

