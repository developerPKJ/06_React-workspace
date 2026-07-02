import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import StateComponent1 from "./StateComponent1";
import StateComponent2 from "./StateComponent2";
import StateComponent3 from "./StateComponent3";

import CountComponent from "./CountComponent";

import StateComponent4 from "./StateComponent4";
import StateComponent5 from "./StateComponent5";
import StateComponent6 from "./StateComponent6";

import ReplyInsertComponent from "./ReplyInsertComponent";
import ReplyListComponent from "./ReplyListComponent";

// 함수형 컴포넌트
function App() {
  
  // 실행할 구문
  // 댓글 예제용 State 변수 셋팅
  // > DB 로 부터 조회해왔다 라는 가정 하에 보여질 댓글 목록 리스트
  const arr = [];
  arr.push({replyWriter : "홍길동", replyContent : "꿀잼!"}); // [0]
  arr.push({replyWriter : "김말순", replyContent : "안녕하세여"}); // [1]
  arr.push({replyWriter : "박개똥", replyContent : "즐거운 리액트 공부 ^___^"}); // [2]

  // arr = [{}, {}, {}];

  // 이 arr 을 State 형 변수에 담기
  const [replyList, setReplyList] = useState(arr);

  // 하위 컴포넌트로 전달할 State 변수 생성
  const [str, setStr] = useState("Before");
  /*
    내부적으로
    const str = "Before";
    const setStr = () => {}; // str 변수에 대한 setter 함수
  */

  // return 구문 - JSX 형식으로 화면 구성
  return (
    <div>

      <h1>State (상태)</h1>

      <p>
        - 컴포넌트 상에 (리액트 화면 상에) 값을 출력하고자 할 때 props 대신 사용할 수 있는
          일종의 "변수" 개념 (값을 담을 수 있고, 값을 매번 변경도 가능하다) <br/>

        - props : 단순히 전달받은 값을 "출력" 할 때 사용 (읽기 전용) <br/>
        - state : 컴포넌트 내부에서 출력 시 필요한 값을 저장할 수 있는 "변수" 개념 (값 수정 가능)
      </p>

      {/* State 는 리액트의 꽃!! (핵심) */}

      <br/>
      <hr/>

      <h3>1. State 가 필요한 이유</h3>

      <StateComponent1 />

      <br/>
      <hr/>

      <h3>2. State 의 사용법 및 주의사항</h3>

      <StateComponent2 />

      <br/>
      <br/>

      {/* 간단 연습 */}
      <StateComponent3 />

      <br/>
      <hr/>

      {/* 
          * State 연습 문제 - 쇼핑몰 장바구니 예제
          
          - 요구사항
          1. 컴포넌트명은 CountComponent 로, 함수형으로 만들기
          2. - 버튼, input 요소 (text), + 버튼을 나열해서 작성
          3. input 요소의 초기값은 0, 읽기 전용
          4. input 요소에 들어가는 수량값은 State 형 변수 이용
          5. 수량은 음수가 될 수 없음
          6. 스타일은 마음대로 지정
      */}

      <h4>수량을 카운트 하는 컴포넌트 만들기</h4>

      {/* 이 자리에 출력 */}
      <CountComponent />

      <br/>
      <hr/>

      <h3>3. State 로 배열 선언해보기</h3>

      <StateComponent4 />

      <br/>
      <hr/>

      <h3>4. State 로 객체 선언해보기</h3>

      <StateComponent5 />

      <br/>
      <hr/>

      <h3>5. State 를 하위 컴포넌트의 전달값으로 넘기기</h3>

      {/* 
        즉, props 로 넘기겠다. 
        테스트를 위해 App 함수 (컴포넌트) 에 State 형 변수 셋팅
      */}

      <StateComponent6 str={ str } setStr={ setStr } />
      {/* 전달값으로 함수도 넘길 수 있다!! (특히 setter) */}

      {/*
        str, setStr (State 형 변수) 는 App 함수의 지역변수임!!
        이 두개의 변수를 하위 (자식) 컴포넌트인 StateComponent6 함수 호출 시
        매개변수 인자값으로 넘겨준 꼴!!
        + 하위 컴포넌트에서 setStr 을 호출해서 str 값이 변화하는것 까지 확인함!!
      */}

      <br/>

      <h4>App 에서 str 출력 : { str }</h4>
      {/*
        하위 컴포넌트에서 setter 함수를 호출하더라도
        그 State 변수를 가지고 있는 모든 컴포넌트에 그 변수값 변경이 일괄 적용됨!!

        - State 변수를 갖고 있는 App, StateComponent6 어디서든지 setter 를 이용해서
          값 변경을 시키는 순간 State 변수값이 수정되면서 
          그 부분에 대해서 모두 재렌더링이 일어난다!! (일종의 전역변수처럼 동작)
      */}

      <button onClick={ () => { setStr("잘 변경 되나?"); } }>
        App 에서 str 변경
      </button>

      {/* 
        State 변수값은 브라우저에서 새로고침을 하는 순간 초기화된다!! 
        (useState 호출 시 넘겼던 인자값으로 초기화됨)  
      */}

      <br/>
      <hr/>

      {/* State 종합 연습 문제 */}

      <h4>댓글 기능 구현</h4>

      <ReplyInsertComponent replyList={ replyList } setReplyList={ setReplyList } />
      {/* 댓글 작성 (기존에 댓글 정보가 담겨있던 replyList 라는 State 형 변수를 setReplyList 로 변경) 용 컴포넌트 */}

      <ReplyListComponent replyList={ replyList } />
      {/* 댓글 목록 (replyList 라는 State 형 변수에 담겨있음) 출력용 컴포넌트 */}
      

    </div>
  )
}

// 내보내기
export default App
