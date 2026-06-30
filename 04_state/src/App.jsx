import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import StateComponent1 from './StateComponent1'
import StateComponent2 from './StateComponent2'
import StateComponent6 from './StateComponent6'

import ReplyInsertComponent from './ReplyInsertComponent'
import ReplyListComponent from './ReplyListComponent'

function App() {

  // 실행할 구문
  const [str, setStr] = useState("Before");

  const arr = [];
  arr.push({replyWriter : "홍길동", replyContent : "안녕하세요"});
  arr.push({replyWriter : "김말순", replyContent : "반갑습니다"});
  arr.push({replyWriter : "박개똥", replyContent : "잘 부탁드립니다"});
  const [replyList, setReplyList] = useState(arr);

  // 리턴 구문(JSX 형식 화면 구성 부분)
  return (
    <div>
      
      <h1>state (상태)</h1>

      <p>
        - 컴포넌트 상에 (리액트 화면 상에) 값을 출력하고자 할 때 props 대신 사용할 수 있는
          일종의 "변수" 개념 (값을 저장 및 변경 가능) <br />

        - props : 단순히 전달받은 값을 출력 할 때 사용(읽기 전용) <br />
        - state : 컴포넌트 내에서 값을 저장하고 변경할 수 있는 변수(읽기/쓰기 가능) <br />
      </p>

      {/* State 는 리액트의 핵심요소 - props로도 가능하지만 권장되지 않음 */}
      
      <br />
      <hr />

      <h3>1. State 필요성</h3>

      <StateComponent1 />

      <br />
      <hr />

      <h3>2. State 사용법 및 주의사항</h3>

      <StateComponent2 />

      <br />
      <hr />

      <h3>5. State를 하위 컴포넌트의 전달값으로 넘기기</h3>

      <StateComponent6 str={str} setStr={setStr} />
      {/* 전달값으로 함수도 전달 가능 */}

      <br />

      <h4>APP에서 str 출력 : {str}</h4>
      {/* 
        어느 컴포넌트에서든 setter를 호출해서 State 변수를 변경하면
        해당 State 변수를 가지고 있는 모든 컴포넌트에 변경된 값이 반영됨
      */}

      <button onClick={() => setStr("After")}>APP에서 str 변경</button>
      {/* 
        State 변수는 새로고침하면 초기값으로 돌아감
      */}

      <br />
      <hr />

      {/* State 종합 연습 문제 */}
      <h4>댓글 기능 구현</h4>

      {/* 댓글 작성용 컴포넌트 */}
      <ReplyInsertComponent replyList={replyList} setReplyList={setReplyList} />

      {/* 댓글 목록 출력용 컴포넌트 */}
      <ReplyListComponent replyList={replyList} />

    </div>    
  );
  
}

// 내보내기 구문
export default App
