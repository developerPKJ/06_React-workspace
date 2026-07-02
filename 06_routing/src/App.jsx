import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

// import { Routes } from "react-router-dom";
// import { Route } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
// > 같은곳으로부터 여러개를 import 할 때 한번에 작성 가능!!

import MemberEnrollFormComponent from "./MemberEnrollFormComponent";
import LoginFormComponent from "./LoginFormComponent";

import TestComponent1 from "./TestComponent1";
import TestComponent2 from "./TestComponent2";

function App() {
  
  // 실행할 코드
  // Link 컴포넌트 없이 버튼을 클릭했을 때 화면 깜빡임 없이 URL 주소를 이동하고 싶음!!
  // > navigate 라는 함수를 이용한다.

  /*
    [ 표현법 ]

    - navigate 함수는 useNavigate 라는 함수를 통해 얻어내야한다!!
    - 당연히 import 먼저 해줘야 한다.
    import { useNavigate } from "react-router-dom";

    - 인자 없이 그냥 간단히 호출만 하면 함수가 하나 리턴됨!!
    let navigate = useNavigate();

    - 이 navigate 를 호출해서 URL 이동을 해주면 된다.
    navigate("이동할URL주소");
  */
  let navigate = useNavigate();
  /*
    내부적으로
    let navigate = () => {};

    필요할 때 마다 navigate(); 형태로 호출해서 이용한다!!

    - useNavigate 함수는 반드시 컴포넌트 함수 내부에서 지역변수로 쓸 수 있도록 호출해야 한다!!
      (이벤트 핸들러 함수 내부에서 호출 불가)
  */

  // 회원가입 페이지로 버튼 클릭 시 실행할 함수
  const memberEnrollForm = () => {

    // console.log("잘 실행되나?");

    // 이 버튼이 클릭되었을 때 URL 주소를 화면 깜빡임 없이 요청하고 싶음!!

    // 기존의 방식
    // location.href = "/member/enrollForm";

    // 리액트 방식
    navigate("/member/enrollForm");
  };

  // 로그인 페이지로 버튼 클릭 시 실행할 함수
  const loginForm = () => {

    // console.log("잘 클릭되나?");

    // 리액트 방식
    navigate("/member/loginForm");
    // > URL 주소가 이동되고, 이때 화면이 깜빡거리지 않음!!
  };

  // return 구문
  return (
    <div>
      <h1>라우팅 (Routing)</h1>

      <p>
        - 사용자가 브라우저 주소창에 요청한 URL 주소에 따라 알맞은 페이지를 보여주는 개념 <br/>

        - SPA (Single Page Application) 에서
          페이지 이동 기능을 제어하고, URL 주소에 맞는 페이지를 전환해준다. (화면 깜빡임 없이) <br/>

        - 리액트에서 Routing 기술을 이용하려면 해당 리액트 프로젝트 내부에서
          "React Router" 모듈을 우선 설치해야한다!! <br/>

        {/* 
          * React Router 모듈 설치 방법 (프로젝트 구동 X 상태에서)

          1. 우선 터미널 명령문 (cd) 를 이용해서 모듈을 설치할 프로젝트 폴더 내부로 이동
          2. npm install react-router-dom@6
          (npm 은 react 의 라이브러리들을 관리해주는 도구임!! 자바로 따지면 Maven 같은 놈)
        */}

        - 그리고 이 프로젝트의 최상위 .jsx 파일인 main.jsx 파일에
          모든 하위 컴포넌트들에 대해 라우팅 기능을 수행하겠다 라고 선언까지 해야한다!!
      </p>

      <br/>
      <hr/>

      <h3>1. 간단한 라우터 사용 방법</h3>

      <div>test1</div>
      <div>test2</div>

      {/*
        - 이 자리에 div 요소를 하나 더 찍을 예정
        - 단, URL 주소 마다 다른 div 가 찍히도록 유도해볼 것!!

        - Routes 라는 복수형의 태그로 Route 라는 단수형의 태그들을 감싸준다.
          (단, 상단에 import 는 필수!!)

        - Route 라는 단수형의 태그에는 path, element 속성을 짝지어서 작성한다!!
          path : url 주소, element : 보여질 요소 (컴포넌트)

        - 마치 if 문 처럼 선택적으로 어떤 URL 일 경우 어떤 화면이 보여질건지 매칭을 시켜준다.
      */}

      <Routes>
        <Route path="/" element={ <div>나는 메인페이지야</div> }></Route>
        <Route path="/detail1" element={ <div>나는 상세페이지1이야</div> }></Route>
        <Route path="/detail2" element={ <div>나는 상세페이지2야</div> }></Route>
        <Route path="/detail3" element={ <div>나는 상세페이지3이야</div> }></Route>
      </Routes>

      <br/>

      {/*
        - 사용자가 브라우저 창의 URL 주소를 직접 컨트롤하면 화면이 깜빡거린다!!
          (웹 페이지에 최초 진입해서 아예 리로드가 되기 때문)

        - 화면이 깜빡거리지 않게 URL 요청을 보낼 수 있는 링크를 Link 컴포넌트를 이용해서
          만들 수 있다!! (단, 마찬가지로 import 해야함)
        
        - Link 컴포넌트의 시작태그와 종료태그 사이에는 노출될 문구를,
          to 속성에는 요청할 (이동할) URL 주소를 적어준다. (마치 기존 a 태그처럼)

        - 그렇다고 해서 리액트에서 a 태그를 못쓰는거는 아님!!
          단, a 태그를 이용해서 URL 이동을 하면 화면이 깜빡거림 (리로드됨)
          
        - 또한, Link 컴포넌트는 브라우저 상에 렌더링 될 때
          실제로는 a 요소로써 렌더링 된다!! (개발자 도구로 확인 가능하다)
          하지만 그렇다고해서 클릭 시 화면이 깜빡거리지는 않는다!!
      */}

      <Link to="/">메인페이지로 이동</Link> <br/>
      <Link to="/detail1">상세페이지1로 이동</Link> <br/>
      <Link to="/detail2">상세페이지2로 이동</Link> <br/>

      <a href="/detail3">상세페이지3으로 이동</a>

      <br/>
      <hr/>

      <h3>2. Link 컴포넌트 없이 URL 주소 요청하기 (화면 깜빡임 없이)</h3>

      {/*
        - 기존의 html, js 에서...

        <a href="/myweb/member/logout">로그아웃</a> (O)

        <button href="/myweb/member/logout">로그아웃</button> (X)

        <button onclick="location.href = '/myweb/member/logout';">로그아웃</button>

        > href 속성은 a 태그에서만 사용 가능한 속성이였음!!
        > a 태그 이외의 다른 태그에서는 href 속성을 쓸 수 없고,
          클릭 시 a 태그 처럼 특정 url 주소로 요청하고 싶을 경우에는
          순수 자바스크립트의 location.href = "URL주소"; 구문을 이용할 수 밖에 없었음!!      
      */}

      <p>
        - 위와 같은 상황이 리액트에서도 똑같이 발생할 수 있다!! <br/>

        - Link 컴포넌트 없이 navigate 라는 "함수" 를 이용해서
          화면 깜빡임 없이 URL 요청을 할 수 있다!! <br/>

        - navigate 함수를 useNavigate 라는 리액트 내장함수를 이용해서 얻어낸 뒤,
          이동할 URL 주소를 인자로 전달하면서 호출하면 된다!!
      </p>

      <button onClick={ memberEnrollForm }>회원가입 페이지로</button>
      <button onClick={ loginForm }>로그인 페이지로</button>

      <br/>

      <Routes>
        <Route path="/member/enrollForm" element={ <MemberEnrollFormComponent /> } />
        <Route path="/member/loginForm" element={ <LoginFormComponent /> } />
      </Routes>

      <br />
      <hr />

      <h3>3. 화면 깜빡임 없이 URL 주소 전환 시 전달값 넘기고 받기</h3>

      <p>
        - 마찬가지로 navigate 함수를 통해 URL 요청 시 전달값을 다른 컴포넌트로 넘길 수 있다. <br />

        {/* 
          // 우선 navigate 함수를 useNavigate 함수로 얻어낸다.

          1. 전달값이 없을 경우
          navigate("요청할 URL 주소");

          2_1. 전달값이 있을 경우 - URL 주소 상에 전달값을 노출 X
          navigate("요청할 URL 주소", { state: { 전달값1: 값1, 전달값2: 값2 } });

          2_2. 전달값이 있을 경우 - URL 주소 상에 전달값을 노출 O
          navigate("요청할 URL 주소/전달값1/전달값2");
          - URL 주소 내에 Path Variable 방식으로 전달값을 같이 작성
        */}
      </p>

      <button onClick={ () => 
        navigate("/test1", { state: { id: "abc123", name: "홍길동" } })
      }>요청 시 전달값 넘겨보기1</button>

      <button onClick={ () => 
        navigate("/test2/123456")
      }>요청 시 전달값 넘겨보기2</button>

      <br />

      <Routes>
        <Route path="/test1" element={ <TestComponent1 /> }></Route>
        <Route path="/test2/:noticeNo" element={ <TestComponent2 /> }></Route>
      </Routes>

      {/* 
        참고
        - State를 사용하는 경우 useState 함수 사용
        - navigate 사용하는 경우 useNavigate 함수 사용
        - location 사용하는 경우 useLocation 함수 사용
        - params 사용하는 경우 useParams 함수 사용

        - react 에서 기본적으로 제공하는 내장함수들은 함수명이 use 로 시작하는 경우가 많음
        > hook 이라고 부름 (리액트 훅)
      */}

    </div>
  )
}

export default App
