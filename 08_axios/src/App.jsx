import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import AxiosComponent1 from "./AxiosComponent1";
import AxiosComponent2 from "./AxiosComponent2";

function App() {

  // 실행할 구문

  // return 구문
  return (
    <div>
      <h1>Axios</h1>

      <p>
        - Ajax 기능을 구현할 수 있는 자바스크립트 라이브러리 <br/>

        - 비동기식 요청 구문을 간략화 해준다!! <br/>

        - 기존에 jQuery 에서 제공하던 $.ajax() 와 문법이 유사해서 익히기 쉽고,
          라이브러리 자체도 jQuery 에 비해 훨씬 가벼움!! <br/>

        <br/>

        * Axios 연동하기 <br/>
        1. axios 를 연동하고자 하는 프로젝트 폴더로 이동 (cd 명령어) <br/>
        2. npm install axios 명령문을 통해 axios 라이브러리를 설치
      </p>

      <br/>
      <hr/>

      <h3>1. 간단한 형식의 JSON 샘플 데이터 조회해보기</h3>

      <AxiosComponent1 />

      <br/>
      <br/>

      <AxiosComponent2 />

      <br/>
      <hr/>

      <h3>2. 공공데이터 조회해보기</h3>

      

    </div>
  )
}

// 내보내기
export default App
