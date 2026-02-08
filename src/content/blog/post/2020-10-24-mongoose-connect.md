---
title: "[mongoose] mongoose 연결하기"
date: 2020-10-24 16:19:25
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

# mongoose 시작하기

MySQL과 같은 전통적인 SQL 데이터베이스가 여전히 많이 쓰이고 있고, 나도 꽤 익숙한지라..
*mongoDB*는 자주 접할 기회기 없었는데, *javascript*와의 찰떡 궁합이라는 이야기에 욕심내서 공부겸.. 사용해보려고 한다.

## mongoose?
**mongoose**는 *mongoDB*의 *ODM* 라이브러리이다. *ODM*은 *Object-Document Mapper*로, *ORM(Object-Relation Mapper)*과 유사한 개념이라고 보면 된다.
*ODM*을 사용하면 *ORM*을 사용할 때와 같은 장점을 가지고 있다고 볼 수 있겠다.

*mongoose*는 *mongoDB*를 사용한다고 하면 거의 대부분 *mongoose*를 이용한다고 보면 될 정도로 유명하고 많이 쓰이는 라이브러리 같다.
일반적으로는 *mongoDB*를 그대로 사용한다기보다 *mongoose*를 이용해서 사용한다.
특히, SQL에 익숙하다면 *mongoDB*를 사용하게되면 쿼리를 작성하는 것이 달라서 낯설고 어렵게만 다가오는데, *mongoose*를 사용하면 한결 편해진다.

## mongoose의 설치.

`mongoose`는 `yarn`으로 설치하면 된다.

```shell
$yarn add mongoose
```

typescript 프로젝트의 경우 아래와 같이 정의를 *devDependency*로 설치해주자.

```shell
$yarn add @types/mongoose --dev
```

## mongoDB의 연결 
이 포스트의 주제다. 그럼 mongoose를 이용해서 어떻게 DB에 연결하는지 알아보자.
*mongoDB*의 연결은 `mongoose.connect`로 한다.
스펙은 아래와 같다.

```javascript
mongoose.connect('mongodb://username:password@host:port/database?options...', {useNewUrlParser: true});
```

연결에 관한 내용은 `mongoose.connection`이 제공한다. `mongoose.connection`을 이용하면 DB 연결에 대한 콜백이나 에러 핸들링 등도 가능하다.

```javascript
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017', {useNewUrlParser: true});
const { connection } = mongoose;

console.log('connecting db...');
connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', () => {
  console.log('connected to mongo db');
});
```

이렇게 해주면 성공적으로 연결되었을 때, `connected to mongo db`라는 메시지를 콘솔에서 확인할 수 있다.

