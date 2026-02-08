---
layout: post
title: "MySQL Field를 이용해서 원하는 순서로 정렬하기"
date: 2020-10-06 13:43:59
categories:
  - MySQL
tags:
  - MySQL
---

쿼리를 짜다보면 일정 특정 필드에 대해 오름차순이나 내림차순 뿐만 아니라 특정 순서를 만들어서 정렬하고 싶을 경우가 있다.

이럴 때 **MySQL**에서 제공하고 있는 `FIELD` 함수를 이용하면 굉장히 간단하게 쿼리를 작성할 수 있다.

```
SELECT name FROM city
ORDER BY FIELD(name, 'london', 'milano', 'paris', 'new york', 'tokyo');
```

`FIELD`의 파라미터로 넘긴 값 외 다른 값의 정렬은 `DESC`나 `ASC`로 설정 가능하다.

```
SELECT name FROM city
ORDER BY FIELD(name, 'london', 'milano', 'paris', 'new york', 'tokyo') DESC;
```

다른 필드를 섞어서 정렬도 가능하다.

```
SELECT name FROM city
ORDER BY FIELD(name, 'london', 'milano', 'paris', 'new york', 'tokyo') DESC, poularity;
```

만약 `FIELD`를 사용하지 않는다고 한다면? `CASE`나 `DESC`를 줄줄 늘려서 쓸 수도 있다고 한다.
약간 지저분해 보인다.

```
select name FROM city
ORDER BY CASE
  WHEN name = 'london' then 1 else 2
end, city ASC
```

```
SELECT * FROM table ORDER BY id='8' DESC, id='5' DESC, id='4' DESC, id='3' DESC
```

`FIELD`를 이용하면 보기 좋게 쿼리 작성이 가능하므로 잘 알아두고 요긴하게 써먹자.

### Reference
1.[stackoverflow][ref1]

[ref1]:[https://stackoverflow.com/questions/14104055/ordering-by-specific-field-value-first]