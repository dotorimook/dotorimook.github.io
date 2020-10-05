---
layout: post
title: "React Hook Form의 watch() vs getValues"
date: 2017-10-20 08:26:28 -0400
categories: jekyll update
tags: react react-hook-form javascript typescript web
---

**React Hook Form**은 14.7k에 빛나는 리액트용 폼 라이브러리이다.
폼 생성과 검증 등 개발 과정을 간소화할 수 있고, 폼 생성 과정과 코드를 좀 더 규격화 할 수 있다는 장점이 있다.
다른 폼 라이브러리에 비해서 React Hooks 형태로 사용할 수 있다는 점과 빠르다는 장점도 있다.
또한, 문서가 **굉장히** 잘 구성되어있다.ㅎㅎ (완벽하지는 않지만 번역도 되어있는 듯 하다.)

**React Hook Form**사용에 필수적인 `getValues`와 `watch`의 차이점에 대하여 메모해두고자 한다.

## `watch` vs `getValues`

`getValues`와 `watch`는 **React Hook Form**을 값을 나타내거나 확인하는 등에 사용하기 때문에 필수적으로 사용하게 된다.
`watch`를 대부분 사용하지만...

이미 [공식 문서][ref1]에서는 `watch`와 `getVAlues`에 대한 차이점을 아래와 같이 설명하고 있다.

> watch: subscribe to either all inputs or the specified inputs changes via event listener and re-render based on which fields that are subscribed. Check out this codesandbox for actual behaviour.
> getValues: get values that are stored inside the custom hook as reference, fast and cheap. This method doesn’t trigger re-render.

아주 친절하게 [codesandbox][ref2]로 예제도 제공하고 있다.

<iframe src="https://codesandbox.io/embed/react-hook-form-watch-with-radio-buttons-and-select-examples-ovfus?fontsize=14&hidenavigation=1&theme=dark"
  style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
  title="React Hook Form - watch with Radio Buttons and Select examples"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

핵심은 `watch`는 **값 변화에 대해 컴포넌트가 re-render가 이루어지고** `getValues`는 그렇지 않다는 점이다.

`watch`는 input의 변화를 **subscribe**해서 변화에 따라 re-render가 이루어진다.

반면 `getValues`는 RHF 내에 render와 관계없이 저장된 value를 가져올 때에 사용된다. **re-render**가 이루어지지 않는다. 따라서 빠르고 cheap한 메소드이다.

개발을 하다보면 `watch`와 `getValeus`의 깂이 다른 시점이 있을 수 있는데, 이 차이점에서 비롯된 것이라고 볼 수 있다.

### Reference

1. [React Hook Form 문서][ref1]
2. [codesandbox][ref2]


[ref1]: https://react-hook-form.com/faqs/#watchvsgetValuesvsstate
[ref2]: https://codesandbox.io/s/react-hook-form-watch-with-radio-buttons-and-select-examples-ovfus