---
layout: post
title: "JQuery Uncaught TypeError: a.indexOf is not a function 에러처리"
date: 2020-11-13 09:41:58
categories:
  - JQuery
tags:
  - javascript
  - web
  - jquery
  - load
  - unload
  - indexOf
  - error
---

ㅎㅎㅎ 예전에 네이버 블로그에서 작성했던 글이었는데,
최근 어떤 분이 댓글을 달아두셔서 뿌듯했던 포스트라 이쪽으로 옮겨온다. ㅎㅎㅎ

# Uncaught TypeError: a.indexOf is not a function

**JQuery** 프로젝트 상에서 

```
Uncaught TypeError: a.indexOf is not a function
```

위와 같은 에러가 나올때에는
`.load()` function이 있는지 찾아보고, `on('load',function(){});`으로 바꾸어주면 됨.

`.load`, `.unload`, `.error`가 **deprecate**되었다고.

### Reference
1. [stackOverflow][ref]

[ref]: https://stackoverflow.com/questions/38871753/uncaught-typeerror-a-indexof-is-not-a-function-error-when-opening-new-foundat