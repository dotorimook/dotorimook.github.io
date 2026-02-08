---
title: "[mongoose] mongoose paranoid (soft delete) 적용하기 (feat. plugin)"
date: 2020-10-24 17:20:15
categories:
  - mongoose
tags:
  - mongoose
  - node
  - js
  - db
  - javascript
  - typescript
  - database
---


mongoose는 timestamp라는 옵션을 제공한다.

plugin은 스키마별로도 적용할 수 있지만,
전역 플러그인(global plugin)으로 모든 schema에 대해서도 적용이 가능하다.

## `remove`와 `delete`

이제부터 `delete`를 기록하기 위해서는 `delete`만을 사용한다.
`remove`는 *document를 완전히 삭제*할 때 사용한다.
