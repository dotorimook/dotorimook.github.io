---
layout: post
title: "NextJS + Typescript + ESLint + Capacitor 세팅을 해보자"
date: 2021-06-13 21:34:49
categories:
  - typescript
  - NextJS
  - React
  - ESLint
  - Capacitor
tags:
  - typescript
  - NextJS
  - React
  - ESLint
  - Capacitor
---

# Background

 사실상 Capacitor가 ionic과 궁합이 좋다지만.. 꼭 ionic을 위해 만들어진 것도 아니다?! 라는 생각이 들어서. 그렇다면 NextJS 세팅에선 어떨까? 하는 생각이 들었다. 그래서 한 번 테스트 해보았다.

# What is Capacitor?

Capacitor는 웹플랫폼에서 네이티브 기능을 사용해 줄 수 있는 플러그인들을 제공하는 라이브러리다.  크로스플랫폼 네이티브 런타임이라고 스스로 표방한다. 이전 Cordova와 PhoneGap을 계승하여, 모던 웹 앱을 메이저 플랫폼에서 쉽게 돌아가게 하도록 한다. 아이오닉에서 만들어진 만큼 아이오닉 프레임워크와 가장 궁합이 좋다. 

# Next JS + Typescript + ESLint 세팅

NextJS Typescript 세팅은 이미 create next-app에서 간단하게 제공하고 있다. 

```bash
yarn create next-app --example with-typescript-eslint-jest project-name
```

# Capacitor 끼얹기

## Capacitor 설치

우선 capacitor에 필요한 `@capacitor/core` `@capacitor/cli`를 설치한다.

```bash
yarn add @capacitor/core @capacitor/cli
```

## Capacitor 초기화

```bash
npx cap init --web-dir=out
```

실행하면 초기화하기 위한 옵션들을 물어보는데 맞게 입력하고 넘어가면 된다.

`--web-dir=out` 옵션이 중요한데, next가 빌드되면 결과물이 `out` 에 생성 되기 때문이다.

대략 물어보는 정보는 다음과 같다:

```bash
[?] What is the name of your app?
    This should be a human-friendly app name, like what you'd see in the App Store.
✔ Name … project-name
[?] What should be the Package ID for your app?
    Package IDs (aka Bundle ID in iOS and Application ID in Android) are unique identifiers for apps. They must be in
    reverse domain name notation, generally representing a domain name that you or your company owns.
✔ Package ID … com.example.app
✔ Creating capacitor.config.ts in /Users/jihoyeom/Documents/Projects/playground/next-with-capacitor in 8.51ms
[success] capacitor.config.ts created!

Next steps: 
https://capacitorjs.com/docs/getting-started#where-to-go-next
[?] Join the Ionic Community! 💙
    Connect with millions of developers on the Ionic Forum and get access to live events, news updates, and more.
✔ Create free Ionic account? … no
[?] Would you like to help improve Capacitor by sharing anonymous usage data? 💖
    Read more about what is being collected and why here: https://capacitorjs.com/telemetry. You can change your mind at
    any time by using the npx cap telemetry command.
✔ Share anonymous usage data? … yes

Thank you for helping to make Capacitor better! 💖
Information about the data we collect is available on our website: https://capacitorjs.com/telemetry
```

프로젝트 루트에 `capacitor.config.ts` 라는 설정 파일이 생성된다. 이 설정파일의 `webDir` 필드가 `out`으로 설정되어 있는 것을 확인한다.

## 플랫폼 추가하기

android와 ios 프로젝트를 추가하기 위해 다음과 같이 입력한다

```bash
npx cap add android
npx cap add ios
```

각 명령어를 실행하기 위해서는 `@capacitor/ios`와 `@capacitor/android` 의존성도 필요하다.

# NextJS 에서 Capacitor를 사용 했을 때 가능 범위

NextJs에서 지원하는 좋은 기능들을 다 쓸 수 있는 것일까?

## 사용할 수 있는것

- router
- getInitialProps
- dynamic Routes
- api
- link

NextJS를 사용하면서 중요하게 생각했던 기능들은 대체로 잘 동작하는 것을 확인했다.

## 사용할 수 없는 것

- next/images

## 제한적으로 사용할 수 있는 것

- live reload

기존에 `ionic capacitor —live-reload-url` 로 편리하게 사용할 수 있었던 live reload기능은 사용할 수 없다. 다만, **capacitor.config.ts** 에 다음을 추가해서 비슷한 효과를 낼 수 있다.

```tsx
const config: CapacitorConfig = {
...
  server: {
    url: 'http://[YOUR_IP_ADDRESS]:[YOUR_PORT]',
    cleartext: true
  }
...
};
```

`yarn dev` 로 개발 서버를 띄운 다음에 주소를 `server.url` 로 설정해서 사용할 수 있다.

실제로 `ionic capcitor`도 실행되는 동안 저 설정을 추가하고 종료 시 되돌리는 일을 하고 있다.

# 결론

Capacitor는 모던 웹앱을 네이티브 앱 처럼 손쉽게 만들어주는 감동적인 라이브러리이다. Ionic과 찰떡 궁합이겠지만, 약간의 제한이 있지만 NextJS와도 나쁘지 않은 궁합을 보여주는 것 같다. NextJS는 CRA나 Ionic과 같은 CSR 프로젝트에 비해 SSR의 장점을 취할 수 있는데, Capacitor와 NextJS를 함께 이용한다면 웹 서비스와 앱 두 장점을 모두 취할 수 있을 것 같다.

# Trouble Shooting

## `next export` 시 Error: Image Optimization using Next.js' default loader is not compatible with `next export`. 에러 발생할 때

**next/images** 를 이용해서 이미지를 사용하는데 `next export` 를 사용할 때 발생한다. **next/images**는  `next export` 를 이용해서 생성된 정적 페이지에서는 동작하지 않기 때문에 export 시에 오류가 발생한다. **next/images** 대신 **[next-optimized-images](https://github.com/cyrilwanner/next-optimized-images)**를 사용할 수 있다.

## Reference

[https://github.com/vercel/next.js/tree/canary/examples/with-typescript-eslint-jest](https://github.com/vercel/next.js/tree/canary/examples/with-typescript-eslint-jest)

[https://broddin.be/english/packaging-nextjs-capacitor/](https://broddin.be/english/packaging-nextjs-capacitor/)

[https://github.com/cyrilwanner/next-optimized-images](https://github.com/cyrilwanner/next-optimized-images)

[https://stackoverflow.com/questions/65487914/no-exportpathmap-found-in-next-config-js-generating-map-from-pages](https://stackoverflow.com/questions/65487914/no-exportpathmap-found-in-next-config-js-generating-map-from-pages)