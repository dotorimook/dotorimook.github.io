---
layout: default
title: "node.js express 서버에 Swagger 끼얹기"
date: 2020-10-08 12:45:52
categories:
  - express
tags:
  - node
  - express
  - swagger
---

# Express 프로젝트에 Swagger를 달아보자.

## Swager?
**Swagger**는 RESTful 웹 서비스에서 설계, 구축, 문서화 등을 도와주는 오픈소스 프레임워크라고 볼 수 있다.
Spring 프로젝트에서 적용된 사례를 많이 접했는데, node.js도 지원하고 있었다.

## Swagger Tools
Swagger는 다음과 같은 것들이 있다.

- **[Swagger Editor](https://swagger.io/tools/swagger-editor/)**

    **Swagger Editor**는 RESTful API를 Swagger 스펙에 맞게 설계, 정의, 문서화할 수 있는 오픈소스 에디터이다.

- **[Swagger Codegen](https://swagger.io/tools/swagger-codegen/)**

    **Swagger Codegen**은 OpenAPI 스펙을 기반으로 API 클라이언트 라이브러리(SDK generation), server stubs, 문서화 등을 자동으로 해준다.

- **[Swagger UI](https://swagger.io/tools/swagger-ui/)**

    **Swagger UI**는 API 스펙들을 가시적으로 볼 수 있고, 실제 API를 테스트해볼 수 있게 해준다. API에 

- **[Swagger Inspector](https://swagger.io/tools/swagger-inspector/)** 

    자동 생성된 OpenAPI 문서를 테스트 할 수 있는 툴이다.

현업에서 일반적으로 **Swagger**라고 하면 **swager-ui**를 많이 지칭하는 것 같다. **swagger-ui**는 백엔드 - 프론트 개발자 간 소통하는 문서로 많이 사용되고 있는데,
- 프론트 작업자 입장에서는  API 스펙을 볼 수 있고, 테스트도 해볼 수 있기 때문에
    - 백엔드 작업자를 찾아가서 물어보지 않을 수 있고,
    - 백엔드 프로젝트를 들춰서 VO 소스코드를 보지 않아도 작업을 할 수 있는 장점이 있다.
- 백엔드 개발자 입장에서는 **swagger-ui** 자체가 문서가 되기 때문에
    - 별도의 문서가 필요하지 않다는 점,
    - 프로젝트 소스와 연동되어있기 때문에 *가장 신선한* 문서라고 볼 수 있다는 장점이 있다.

실제로 Spring 개발자들은 **swagger-ui**를 많이 도입해서 사용하는 사례들을 자주 보았다. 쓰는 프로젝트와 안쓰는 프로젝트의 차이? 말모말모.. 없으면 너무 불편한 정도다.

그렇다면 node.js에는 어떻게 적용할 수 있을까?

## express 프로젝트에 `swagger-ui`를 적용하기
express로 개발된 node.js 프로젝트에 `swagger-ui`를 적용해보자.

### `swagger-ui-express` 설치

프로젝트에 `swagger-ui-express`를 설치한다.

`swagger-ui-express`는 swagger-ui를 사용할 수 있게 하는 express 미들웨어이다.

```bash
$ yarn add swagger-ui-express
```

### `swagger.json` 생성

`swagger.json`파일을 프로젝트 루트에 생성한다.

이 JSON 파일에 OpenAPI 정의를 작성한다.

swagger open api 스펙은 다음링크에서 확인 가능: [https://swagger.io/docs/specification/basic-structure/](https://swagger.io/docs/specification/basic-structure/)

- swagger 기본 구조
    - `info`
        - API의 정보들을 정의: `title`, `description`(optional), `version`, ...
    - `Paths`
        - 각 endpoint path를 나타냄
    - `Parameters`
        - URL에 포함된 파라미터나 Query String들을 정의함.
    - `Request Body`
        - `requestBody`로 body content와 media type을 정의할 수 있음.
    - `Responses`
        - 가능한 status code와 response body `schema`를 정의할 수있음.

아래와 같이 `swagger,json`파일을 작성한다. 참고로 아래 `version`은 OpenAPI 스펙의 버전이다.

```json
{
  "swagger": "2.0",
  "info": {
    "version": "1.0.0", //version of the OpenAPI Specification
    "title": "My User Project CRUD",
    "description": "My User Project Application API",
    "license": {
      "name": "MIT",
      "url": "https://opensource.org/licenses/MIT"
    }
  },
  "host": "localhost:8000",
  "basePath": "/",
  "tags": [
    {
      "name": "Users",
      "description": "API for users in the system"
    }
  ],
  "schemes": [
    "http"
  ],
  "consumes": [
    "application/json"
  ],
  "produces": [
    "application/json"
  ]
}
```

### `swagger-ui-express` 연동하기

아래와같이 `swagger-ui-express`와 작성한 `swagger.json`을 import 하여

```jsx
const swaggerUi = require(‘swagger-ui-express’),
swaggerDocument = require(‘./swagger.json’);
```

`app.listen()`앞에 아래 코드를 추가한다.

```jsx
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
```

이렇게하면 호스트에서 `{{host}}/api-docs`를 통해서 Swagger 문서를 볼 수있는 것을 확인할 수 있다.

### API 정의 완성하기

이제 `swagger.json`을 사용하는 API로 완성하면 된다. `paths` 필드에 api 스펙을 추가해나가면 된다. `definitions`에는 API에서 사용하게되는 object 형태를 제공 할 수 있다. 

`endpoint` 명과 method type이 key가 되고, 각 값들을 정의할 수 있다. `parameters`로 파라미터의 타이

```json
..
"paths": {
    "/users": {
      "get": {
        "tags": [
          "Users"
        ],
        "summary": "Get all users in system",
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/Users"
            }
          }
        }
      }
    },
    "/addUser": {
      "post": {
        "tags": [
          "Users"
        ],
        "description": "Create new user in system",
        "parameters": [
          {
            "name": "user",
            "in": "body",
            "description": "User that we want to create",
            "schema": {
              "$ref": "#/definitions/User"
            }
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "New user is created",
            "schema": {
            "$ref": "#/definitions/User"
            }
          }
        }
      }
    },
    "/user/{id}": {
      "put": {
        "summary": "Update user with given ID",
        "tags": [
          "Users"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "rquired": true,
            "description": "ID of user that we want to find",
            "type": "integer"
          },
          {
            "name": "user",
            "in": "body",
            "description": "User with new values of properties",
            "schema": {
              "$ref": "#/definitions/User"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "User is updated",
            "schema": {
              "$ref": "#/definitions/User"
            }
          }
        }
      }
    }
  },
  "definitions": {
    "User": {
      "required": [
        "name",
        "_id",
        "companies"
      ],
      "properties": {
        "_id":{
          "type": "integer",
          "uniqueItems": true
        },
        "isPublic": {
          "type": "boolean"
        },
        "name": {
          "types": "string"
        },
        "books": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "name": {
                "type": "string"
              },
              "amount": {
                "type": "number"
              }
            }
          }
        },
        "companies": {
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      }
    },
    "Users": {
      "type" :"array",
      "$ref": "#/definitions/User"
    }
  }
...
```

대략적으로 형태들이 파악이 가능하다.

그런데... 이 모든 API에 대해서 `swagger.json`을 작성해야하나?!!
이럴거면 단순 문서를 위해서라면 JSDoc, TSDoc, docz 등을 차라리 사용했겠죠..

그럼 다음 포스트에서 좀 더 쉽게 작성할 수 잇는 방법을 소개한다!

### Reference
참고가 된 사이트
- [Open API Spec](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.3.md)
- [how-to-add-swagger-ui-to-existing-node-js-and-express-js-project](https://medium.com/@kirtikau/how-to-add-swagger-ui-to-existing-node-js-and-express-js-project-2c8bad9364ce)
- [the-simplest-way-to-add-swagger-to-a-node-js-project](https://levelup.gitconnected.com/the-simplest-way-to-add-swagger-to-a-node-js-project-c2a4aa895a3c)