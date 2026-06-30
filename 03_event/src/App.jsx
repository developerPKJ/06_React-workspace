import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import EventComponent1 from "./EventComponent1.jsx";
import EventComponent2 from "./EventComponent2.jsx";

// import EventComponent3 from "./EventComponent3.jsx";
import EventComponent3 from "./EventComponent3";
// > import 구문 작성 시 .jsx 또는 .js 확장자명은 생략할 수 있다!!

import EventComponent4 from "./EventComponent4";

import MemberEnrollFormComponent from "./MemberEnrollFormComponent";

function App() {

  // 실행할 구문

  // return 구문 - JSX 형식으로 화면을 구성
  return (
    <div>

      <h1>이벤트</h1>

      <p>
        - 자바스크립트의 이벤트와 거의 동일함!! <br/>
        
        - 이벤트의 "종류 (type)" 에 맞게 이벤트를 걸고자 하는 "요소 (target)" 에
          해당 이벤트가 발생했을 때 "실행할 구문 (handler)" 을 정의한다. <br/>

        - 단, 리액트에서의 이벤트 속성명은 "카멜케이스 (carmel case)" 를 사용하고,
          이벤트 핸들러 함수 단위로 넘겨준다!! (기존의 호출 방식이 아님)
      </p>

      <br/>
      <hr/>

      <h3>1. 이벤트를 정의한 기본적인 컴포넌트 만들기</h3>

      <EventComponent1 />

      <br/>
      <hr/>

      <h3>2. 이벤트 타겟을 얻어내는 방법</h3>

      <EventComponent2 />

      <br/>
      <br/>

      <EventComponent3 text="안녕히계세요" />

      <br/>
      <hr/>

      <h3>3. 기본 이벤트를 제거하는 방법</h3>

      <EventComponent4 />

      <br/>
      <hr/>

      {/*
        * 컴포넌트, 이벤트 종합 연습문제 - 회원가입 폼 만들기

        - 요구사항
        1. 컴포넌트명은 MemberEnrollFormComponent 로 짓기, 함수형으로 만들기
        2. 회원가입 페이지 라는 제목은 h4 태그로 표현
        3. 입력양식 관련 태그들은 form 태그로 감싸되, 기본이벤트는 제거
        4. 입력양식 관련 태그들을 table 태그를 이용해서 반듯하게 정렬할 것
           (리액트에서는 반드시 tbody 태그를 써야함!!)

        5. 아이디 입력 후 입력창에 blur 이벤트가 발생하면 (onBlur)
           사용자가 입력한 아이디가 유효한지 검사하기 (영문 소문자, 숫자 포함 5~20자 사이)
        6. 비밀번호 입력 후 입력창에 blur 이벤트가 발생하면
           사용자가 입력한 비밀번호가 유효한지 검사기 (영문 대소문자, 숫자, 특수기호 !@#$%^ 포함 8~20자 사이)
        7. 비밀번호 확인 입력 후 입력창에 blur 이벤트가 발생하면
           비밀번호와 비밀번호 확인 값이 일치하는지 비교

        8. 각각의 유효성 검사 결과를 table 태그 내부에 출력하기
        
        9. 위의 세개의 유효성 검사를 모두 통과했을 경우 "회원가입에 성공했습니다."
           하나라도 통과하지 못한 경우 "회원가입에 실패했습니다." 출력
      */}

      <MemberEnrollFormComponent />

    </div>
  )
}

export default App
