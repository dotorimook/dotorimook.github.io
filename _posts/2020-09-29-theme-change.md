---
layout: post
title: "Jekyll 테마를 바꿔보기"
date: 2017-10-20 08:26:28 -0400
categories: jekyll update
tags: jekyll etc
---
# Jekyll 테마 변경해보기
약 한 달간 방치하고 있던 블로그의 테마를 변경했다. 원래는 터미널 테마 `b2a3e8/jekyll-theme-console` 이었는데 윈도우 스타일로 ㅎㅎ

터미널 테마가 썩 마음에 들어 적용한 가장 큰 이유는 

1. `remote_theme` compatible이라 `_config.yml`에 단 한줄 추가만으로 간편하게 설치가 가능하다는 점
2. 까만 배경에 안정감을 준다는 점

이었는데 변경을 결심하였다.

그 이유는 내가 지킬 사용법을 잘 모르는데 많은 내용이 감춰져 있어서 구조를 더욱 모르는 상태에서 작업해야해서 (적어놓고 보니 좋은 점이잖아?!) 손을 댈 엄두가 나지 않았던 점이 있고 (마치 처음 프레임워크를 접할 때와 같은 막연한 심정? ㅋㅋ),
사실 메뉴 등 각 영역이 분리 되어 잘 보이지 않아서 뭐가 뭔지 잘 모르는 이유가 컸다.

막상 테마의 적용은 그다지 어렵지 않았다.

그냥 테마로 나와 있는 파일들을 저장소에 넣어주기만 하고 기존 `_config.yml`파일만 만져주면 됐다. 테마에 대한 샘플 파일들도 제공하고 있는 것 같았다. `remote_theme`을 처음부터 사용할 때보다 조금 더 나은 점이라고 한다면, 이 샘플 파일들이 지킬의 구조를 이해하는데 도움을 주는 것 같다.

우선 `_layout`의 존재를 알게 되었고, `_data/tags`로 **tag**를 **메뉴**처럼 관리할 수 있다는 점, **scss**도 지원한다는 점 등등.. 이러한 가이드를 엿볼 수 있는 점이 좋았다. 또 설치했기 때문에 내가 손을 볼수도 있겠구나 ㅎㅎ..

좀 더 공부해서 테마도 커스터마이즈 해봐야겠다. md, 지킬도 배워야하고, 보금자리 꾸며나가는 마음으로 차근차근 ㅎㅎ

추가로 개인적으로 마음에 드는 theme을 여기에 적어둔다.
1. [Mediator][theme1]
2. [mere-blog-theme][theme2]
3. [Pinghsu-Theme][theme3]
4. [beautiful-jekyll][theme4]

## refrence
블로그를 처음 시작하면서 도움이 될 만한 포스트
1. [쉽고 빠르게 수준 급의 GitHub 블로그 만들기 - jekyll remote theme으로][ref1]
2. [jekyll document][ref2]
3. [md 정리][ref3]

[ref1]: https://dreamgonfly.github.io/blog/jekyll-remote-theme/
[ref2]: https://jekyllrb.com/docs/
[ref3]: https://gist.github.com/ihoneymon/652be052a0727ad59601

[theme1]: https://blog.base68.com/
[theme2]: http://jekyllthemes.org/themes/mere-blog-theme/
[theme3]: http://jekyllthemes.org/themes/Pinghsu-Theme/
[theme4]: https://github.com/daattali/beautiful-jekyll
