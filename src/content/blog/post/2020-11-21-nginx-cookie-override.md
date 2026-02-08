---
title: "[nginx] nginx.conf 설정으로 프록시 서버 쿠키 설정 추가하기"
date: 2020-11-22 00:01:10
categories:
  - nginx
tags:
  - nginx
  - web
  - server
  - cookie
---
nginx로 프록시 서버를 구성하게 되면, 프록시서버로 연결된 내부 백엔드 구조에서는 `Secure` 등 속성이 위부로 통하는 response에 적용되지 않는 문제가 발생한다. 이럴 때  **nginx.conf** 파일에서 아래와 같이 `proxy_cookie_path`를 이용하여 설정할 수 있다.

```
location /foo {
    proxy_pass http://localhost:4000;
    proxy_cookie_path /foo "/; SameSite=None; HTTPOnly; Secure";
}
```

크로스 도메인의 경우 `SameSite=none`처리도 필요하다.

### Refernce
[Stackoverflow](https://stackoverflow.com/questions/48880738/how-to-set-secure-attribute-to-set-cookie-in-nginx-through-nginx-conf-file)