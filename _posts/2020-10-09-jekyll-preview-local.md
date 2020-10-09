---
layout: post
title: "로컬에서 Jekyll 확인하기 - 기본 Jekyll 커맨드"
date: 2020-10-09 22:19:11
categories: jekyll
tags: jekyll
---

# 로멀에서 Jekyll을 설치해서 블로그를 꾸며보기

최근 여유가 좀 있어서 *Jekyll* 본격적으로 꾸며 나가보려는 마음에 이것저것 시도를 해보고 있다.
새롭게 찾은 테마가 처음 마음에 들긴 했지만, 보다보니 마음에 안들거나 개선시켜 보고 싶은 부분들도 느껴지고, 개인적으로 좀 욕심도 생겨서 지금 테마를 진화시켜나가보려고 마음을 먹었다.
기본적으로 *Jekyll*은 원하는 플러그인을 붙이거나 *js*나 *scss*도 지원하는 등 손쉽게 원하는 커스터마이즈가 가능하다. (본 테마를 적용하게 되면서 알게된 사실이다..ㅎㅎ)

그래서 처음엔 간단한 수정을 하기 위해서... 로컬에 별도의 프로젝트에서 js와 scss를 테스트 한 다음 이 블로그에 내용을 업데이트해서 푸시해서 확인하는 형식으로 업데이트 했다.
하지만 이런식으로 계속 하려니 좀 불편했다. 그래서 결국 *Jekyll*을 설치했다..ㅋㅋ..

로컬에 **Jekyll**을 굳이 설치한다는 것은 약간의 귀찮음을 동반하지만 몇 가지 장점이 있다.
- 푸시하기 전에 로컬에서 포스트를 미리보기할 수 있다.
- 블로그를 로컬에서 확인할 수 있기 때문에, 테마 수정을 하기 용이하다.

그럼 본격적으로 **Jekyll**을 설치하고, 사용하는 커맨드를 소개하고자 한다.

## Jekyll 설치하기

Jekyll을 설치하는 방법은 [공식홈페이지][ref]에서 너무 잘 안내되어 있다. 그냥 따라하면 쉽게 설치할 수 있다. 간단하게 적자면 다음과 같다:
1. *Ruby* 설치하기
2. *Homebrew* 설치하기
3. *rbenv* 설치 (여러 버전의 ruby를 관리하는데 사용된다고 한다.)
4. *Jekyll* 설치

이렇게 로컬에 *Jekyll*을 설치한 다음에 새로운 블로그 프로젝트를 만들어 실행하는 방법은 다음과 같다.

```shell
$ jekyll new myblog
$ cd myblog
$ bundle exec jekyll serve
```

이렇게하면 새로운 블로그를 만들어 로컬 서버로 띄울수가 있고 `localhost:4000`으로 접속할 수 있다. clone한 github 블로그 프로젝트에 `bundle exec jekyll serve`를 하게 되면 `Could not locate Gemfile or .bundle/ directory` 오류가 난다.
깃헙 프로젝트에서는 다음 커맨드들을 이용하면 된다.

## Jekyll 빌드
소스를 빌드하려면 다음 커맨드를 입력한다.
```shell
$ jekyll build
```
커맨드를 실행하면 **_site**폴더, **.jekyll-cache**폴더 등이 생성되며, 만들어둔 **md**과 에셋들이 빌드된 형태로 만들어진다.

## Jekyll 서버 띄우기
블로그를 로컬 서버에 띄우려면 다음과 같이 입력한다.
```shell
$ jekyll serve
```

이렇게 하면 `localhost:4000`으로 로컬에서 블로그를 확인할 수 있다.

## Jekyll 빌드 클린
빌드 결과물들을 지우려면 다음과 같이 입력한다.
```shell
$ jekyll clean
```
하면 캐시 등이 사라 진다.

이제 남은 것은 뭐다? **해피 해킹!!**

[ref]:[https://jekyllrb-ko.github.io/docs/installation/macos/]