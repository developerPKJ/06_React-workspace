import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

import './App.css'
// > .css 파일 또한 import 구문으로 가져온다!!
//   App 컴포넌트에서 호출해서 가져다 쓰는 자식컴포넌트들에도 해당 스타일이 적용됨!!

import MyComponent1 from "./MyComponent1.jsx";
// > MyComponent1.jsx 파일로부터 MyComponent1 이라는 함수 (컴포넌트) 를 가져다 쓰겠다. (import)

import MyComponent2 from "./MyComponent2.jsx";
import MyComponent3 from "./MyComponent3.jsx";

function App() {
  
  // 실행할 구문
  // ajax 요청을 통해 응답데이터를 받아왔다 라는 가정 하에
  // 회원들의 정보를 담고 있는 객체 배열을 먼저 셋팅해보기!! (JSON 형식)
  const memberList = [];
  memberList.push({ name : "홍길동", age : 25 }); // [0]
  memberList.push({ name : "김말똥", age : 30 }); // [1]
  memberList.push({ name : "고영희", age : 54 }); // [2]
  // > 이 데이터들을 가지고 반복문을 이용해서 memberList 의 데이터들을
  //   각각 MyComponent3 호출 구문으로 옮겨줄 예정!!

  // return 구문
  return (
    <div>
      <h1>리액트로 화면 구현하기</h1>

      <h3>* Component</h3>

      <p>
        - 리액트 화면을 이루는 최소 단위 <br/>
        
        - 하나의 item 을 출력할 수 있는 템플릿 (레고 블럭) <br/>

        - 화면 구현의 재사용성을 높여서 개발을 효율적으로 할 수 있도록 도와주며,
          유지보수 또한 용이해진다. <br/>

        예) 썸네일 게시판 목록에서 게시글 하나를 나타내는 요소,
            일반게시글 목록 조회 시 tr 요소 한개,
            메뉴바, 푸터 등 <br/>

        - 데이터를 각각 담아서 반복적으로 출력 가능한 경우 <br/>
        - 데이터를 출력할 용도는 아니지만 한번 만들어두면 
          모든 페이지에서 계속 가져다 쓸 수 있는 경우 <br/>
      </p>

      <br/>
      <hr/>

      <h3>* Component 작성 시 주의사항</h3>

      <p>
        1. 컴포넌트의 이름은 항상 대문자로 시작하게끔 (명명규칙) <br/>
        2. 최대한 재사용할 수 있도록 잘 설계 후 작성한다.
      </p>

      <br/>
      <hr/>

      <h3>* Component 작성 방법</h3>

      <p>
        1. function 형 (함수형) <br/>
        2. class 형 (클래스형) <br/>

        - 어느 방법을 써도 상관은 없지만,
          공식 개발 문서에서는 function 형 사용을 권장한다!! <br/>
        - 요즘은 class 형 컴포넌트는 아예 안쓰이는 추세 <br/>

        - 함수형이든 클래스형이든 간에
          return ( 이 부분 ) 에 컴포넌트를 "JSX 태그 형식" 으로 작성한다!! <br/>

        - 만들어진 컴포넌트를 외부에서 조립해서 쓸 수 있도록
          항상 하단에는 export 구문을 작성해서 내보내줘야 한다!!
      </p>

      <br/>
      <hr/>

      <h3>1. 가장 기본적인 함수형 컴포넌트 만들기</h3>

      {/* 이 자리에 방금 만든 MyComponent1 컴포넌트를 가져다 붙여볼 것!! */}
      <MyComponent1 />
      {/* 컴포넌트를 가져다 쓸 경우 태그 형식으로 호출해서 쓴다!! */}

      <br/>
      <hr/>

      <h3 id="myStyle">2. 스타일을 적용한 컴포넌트 만들기</h3>

      <p style={ {color : "blue", backgroundColor : "beige"} }>
        - CSS 를 적용해서 스타일을 부여한 형태의 컴포넌트를 작성할 수 있다. <br/>

        1. 외부 스타일 방식 : 별도의 .css 파일 작성 후 import 해서 쓰기 <br/>
        2. 인라인 스타일 방식 : 시작태그에 style 속성을 기술하기 (단, 자바스크립트의 객체 형식으로 작성) <br/>
        3. 내부 스타일 방식 : index.html 문서의 head 영역에 직접 style 태그를 작성하는 방식
      </p>

      {/* 이 자리에 MyComponent2 를 갖다 붙이고 싶음!! */}
      <MyComponent2 />

      <br/>
      <hr/>

      <h3>3. 데이터를 전달받는 컴포넌트 만들기</h3>

      <p>
        - 자식 컴포넌트로 데이터 전달값을 넘길 수 있다. <br/>

        - 컴포넌트를 불러 올 때, 속성명="속성값" 형태로 나열해서 데이터를 넘기고,
          함수형 컴포넌트의 경우 전달받은 값을 "매개변수" 로 받아주면 된다!! <br/>

        - 이 때, 전달값들을 함수의 props 라는 하나의 객체타입의 매개변수로 받아준다.
      </p>

      {/* 데이터를 전달받는 컴포넌트 예시 */}

      <h4>회원 정보 List</h4>

      {/*
      <ul>
        <li>홍길동님은 25살 입니다.</li>
        <li>김말똥님은 30살 입니다.</li>
        <li>고영희님은 54살 입니다.</li>
      </ul>
      */}

      {/*
      <ul>
        <MyComponent3 userName="홍길동" age="25" />
        <MyComponent3 userName="김말똥" age="30" />
        <MyComponent3 userName="고영희" age="54" />
      </ul>
      */}

      {/*
        - 위의 각각 호출했었던 자식컴포넌트들을 반복문을 활용해서 호출해보고싶음!!
        - DB 로부터 조회해왔다 라는 가정 하에 회원 정보들이 담긴 변수를 먼저 셋팅
      */}
      
      <ul>
        {/* 반복문 예정 */}
      </ul>

    </div>
  )
}

// 내보내는 구문
export default App

