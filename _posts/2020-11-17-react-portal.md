---
layout: post
title: "React Portal + Hook으로 외부 DOM에 Component 생성하기"
date: 2020-11-17 08:24:48
categories: react javascript react-hook portal 
tags: react javascript web react-hook portal
---

[Portals - React](https://ko.reactjs.org/docs/portals.html)

> Portal은 부모 컴포넌트의 DOM 계층 구조 바깥에 있는 DOM 노드로 자식을 렌더링하는 최고의 방법을 제공합니다.

# Why Portal?

**Portal**은 기존 React Component가 담겨있는 DOM Tree 밖으로 Component를 렌더링을 할 때에 사용할 수 있는 기법이다.

`React.Portal`의 ***대표적인 유스케이스***가 있다. 다이얼로그 처럼 전체 페이지를 덮어쓰면서 튀어나오도록 보이게 하는 컴포넌트들을 나타낼 때이다. 일반적인 경우 모달 다이얼로그는 페이지 전체를 덮어쓰는 방식이기 때문에 `position:fixed`나 `z-index` 등 속성을 사용하게 되지만, 결국 부모 엘레멘트의 속성에 영향을 받기 때문에, 페이지 최상단 등에 두게 된다. **redux**, **mobx** 등을 이용해 상태관리를 하고 있는 경우에는 다이얼로그의 show/hide를 별도의 공간에서 관리하기 때문에 원격지의 컴포넌트의 상태를 관리하는 것이 간단하지만, 원격지에 있는 컴포넌트가 여간 신경쓰이는 것이 아니게 된다... 이럴 때에 **Portal**을 사용하면, 기존의 DOMTree 밖으로 컴포넌트를 생성할 수 있기 때문에 부모 엘레멘트의 속성으로 부터 자유로워질 수 있다!

# Portal의 사용

```jsx
ReactDOM.createPortal(child, container)
```

일반적으로 `index`에 담겨있는 `ReactDOM.render`와 유사하다.

- `child`: 렌더링 할 컴포넌트
- `container` : `child`를 담을 DOM 엘레멘트

## 예제

예제는 [리액트 공식 문서](https://ko.reactjs.org/docs/portals.html)에서 잘 제공 하고 있다. [codepen](https://codepen.io/gaearon/pen/jGBWpE)도 제공하고 있다.

**index.html**

```html
<html>
  <body>
    <div id="app-root"></div>
    <div id="modal-root"></div>
  </body>
</html>
```

**Portal.js**

```jsx
// 여기 이 두 컨테이너는 DOM에서 형제 관계입니다.
const appRoot = document.getElementById('app-root');
const modalRoot = document.getElementById('modal-root');

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    // Portal 엘리먼트는 Modal의 자식이 마운트된 후 DOM 트리에 삽입됩니다.
    // 요컨대, 자식은 어디에도 연결되지 않은 DOM 노드로 마운트됩니다.
    // 만약 자식 컴포넌트가 마운트될 때 그것을 즉시 DOM 트리에 연결해야만 한다면,
    // 예를 들어, DOM 노드를 계산한다든지 자식 노드에서 'autoFocus'를 사용한다든지 하는 경우에,
    // Modal에 state를 추가하고 Modal이 DOM 트리에 삽입되어 있을 때만 자식을 렌더링하십시오.
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.el
    );
  }
}
class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {clicks: 0};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // 이것은 Child에 있는 버튼이 클릭 되었을 때 발생하고 Parent의 state를 갱신합니다.
    // 비록 버튼이 DOM 상에서 직계 자식이 아니라고 하더라도 말입니다.
    this.setState(state => ({
      clicks: state.clicks + 1
    }));
  }
  render() {
    return (
      <div onClick={this.handleClick}>
        <p>Number of clicks: {this.state.clicks}</p>
        <p>
          Open up the browser DevTools
          to observe that the button
          is not a child of the div
          with the onClick handler.
        </p>
        <Modal>
          <Child />
        </Modal>
      </div>
    );
  }
}

function Child() {
  // 이 버튼에서의 클릭 이벤트는 부모로 버블링됩니다.
  // 왜냐하면 'onClick' 속성이 정의되지 않았기 때문입니다.
  return (
    <div className="modal">
      <button>Click</button>
    </div>
  );
}
ReactDOM.render(<Parent />, appRoot);
```

## Portal Component

사용법은 간단하므로, Portal Component를 만들어서 사용하면 되겠다.

```tsx
import React, { FC } from 'react';
import ReactDOM from 'react-dom';

const Portal:FC<any> = ({ children, className = 'root-portal', el = 'div' }) => {
  const [container] = React.useState(document.createElement(el));

  container.classList.add(className);

  React.useEffect(() => {
    document.body.appendChild(container);
    return () => {
      document.body.removeChild(container);
    };
  }, [container]);

  return ReactDOM.createPortal(children, container);
};

export default Portal;

```

생성된 컴포넌트를 넣고 뺄 때 자연스럽게 `body`에서 사라지게 할 수 있다.

### 출처

- [Stackoverflow](https://stackoverflow.com/questions/49426474/can-a-react-portal-be-used-in-a-stateless-functional-component-sfc/59154364#59154364)