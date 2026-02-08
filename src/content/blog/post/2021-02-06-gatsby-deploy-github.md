---
title: "Gatsby 블로그 github에 빌드/배포하기 (Feat. gh-pages)"
date: 2021-02-06 19:43:59
categories:
  - gatsby
tags:
  - gatsby
  - gh-page
  - github.io
---
# Gatsby 블로그 github.io로 빌드/배포하기
최근 Jekyll에서 Gatsby로 블로그를 변경했다. 여러가지 이유가 있겠지만 React 사용에 익숙하고, Gatsby를 활용해보고 싶은 마음이 컸다. 제일 중요한 것은 개발한 블로그를 github.io에 어떻게 보내는 것인가? 하는 것이었다. Netlify를 이용하면 편리해서 많이 이용하는 것 같은데, 사실상 github.io로 블로그를 활용하는 장점을 최대한 활용하고 싶었다. Gatsby 역시도 그 점을 예상했던 것 같다. [문서][ref1]에서 안내하고 있으니 말이다.

## Gatsby 빌드
개츠비로 개발한 소스는 `gatsby build`로 빌드할 수 있다. 빌드하게 되면 **public** 폴더에 빌드 결과물이 생성된다. 이 `public`폴더를 게시하면 되는 것이다. 그러니까 간단하게 생각하면 `gatsby build`를 한 뒤, **public**폴더의 내용물을 github.io 리파지토리의 *master* 브랜치의 루트에 복사하면 된다.

## gh-pages
하지만 매번 빌드해서 복사하고.. 여간 번거로운 일이 아닐 수 없다. 이 것을 도와주는 패키지가 있었으니, 바로 `gh-pages`이다. `gh-pages`가 하는 일은 특정 폴더 내에 있는 파일들을 특정 브랜치에 루트에 구성되게 한다. 즉, 내가 *A* 브랜치로 설정해서 `gh-pages`를 실행한다면, 현 브랜치에서 빌드한 public 하위 파일들만으로 *A*브랜치가 구성되게 된다.

```shell
gh-pages -d public -b master
```

라고 하면 *master* 브랜치에 *public* 하위 파일들로 구성되게 된다.

## 브랜치 세팅
그렇다면 *master* 브랜치에 빌드 결과물이 올라가야하니까, 소스는 다른 브랜치에 구성해야한다. 예를들면,
- *gatsby*: 개츠비 소스가 포함된 브랜치
- *master*: 배포용 브랜치
이렇게 세팅하고 *gatsby* 브랜치에서 `gh-pages`를 이용해서 배포를 하면 *master* 브랜치에 내용이 들어가게하면 된다.

## gh-pages의 설치
`gh-pages`는 개발 디펜던시로 설치한다.

```shell
npm install gh-pages -D
```
또는
```shell
yarn add gh-pages --dev
```
로 설치해서 사용한다.

## 스크립트 세팅
기본적으로 위의 커맨드를 이용하면되는데, 좀 더 편하게 사용하려면 `gatsby build`와 함께 *package.json*에 스크립트로 등록해둔다.

```json
//package.json
{
  ...
  "scripts": {
    "deploy": "gatsby build && gh-pages -d public -b master"
  }
  ...
}
```

## 프로젝트 빌드
이 상태로 *gatsby* 브랜치 (개츠비 소스가 포함된 브랜치) 에서 *yarn deploy*를 해보자. 그러면 *master* 브랜치에 빌드 결과물들이 들어가서 푸시가 되어있는 것을 확인할 수 있다. 명령어 하나로 깔끔하게 배포까지 할 수 있게 된 것이다. 😆

## refrence
1. [Gatsby 문서][ref1]

[ref1]: https://www.gatsbyjs.com/docs/how-to/previews-deploys-hosting/how-gatsby-works-with-github-pages/