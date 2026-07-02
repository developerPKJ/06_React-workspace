import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import CounterComponent from "./CounterComponent";
import TestComponent from "./TestComponent";

function App() {
  
  // 실행할 구문

  // return 구문
  return (
    <div>
      <h1>상태 관리 라이브러리 (State Management Library)</h1>

      <p>
        - 리액트 프로젝트에서 컴포넌트가 많아지고 구조가 복잡해질 수록
          State 를 여러 컴포넌트에서 공유해야 하는 상황이 생긴다!! <br/>

        - 컴포넌트의 depth 가 깊어질 수록 (전달 -&gt; 전달 -&gt; 전달 -&gt; ...) props 를 계속 타고 내려가야함 
          (혹은 URL 주소 간에 전달값으로 계속 타고 전달될 수도 있음..) <br/>

        - "Props Drilling" 문제 발생!! <br/>

        - 해결방법 : 상태 관리 라이브러리를 이용해서 State 를 전역 (Glabal) 로 관리해보자!! <br/>
        - 어느 컴포넌트든 간에 전역 State 변수에 바로 직접 접근 가능!!
          (자바로 따지면 Static 전역 변수의 느낌)
      </p>

      <br/>
      <hr/>

      <h3>1. 대표적인 상태 관리 라이브러리</h3>

      <p>
        - Redux <br/>
          가장 오래되고 널리 쓰이는 라이브러리 <br/>
          대규모 프로젝트에 적합 <br/>
          초기 설정 및 상태 관리 구조를 작성하기 위한 코드가 많은 편 (복잡) <br/>

        - Recoil <br/>
          Meta (Facebook) 에서 만든 라이브러리 <br/>
          리액트 라이브러리 또한 Meta 에서 만든거라 호환이 좋고, Redux 에 비해 사용법이 단순함 <br/>
          요즘은 공식 지원이 활발하게 이루어지지 않음 <br/>

        - Zustand <br/>
          가볍고 간단한 상태 관리 라이브러리 <br/>
          훅 기반으로 useState 와 사용법도 유사함 <br/>
          소/중규모 프로젝트에 적합 <br/>

        우리 수업에서는 Zustand 를 사용해볼 것!!
        (가장 빠르게 익힐 수 있고, 실무에서도 많이 쓰이는 추세임)
      </p>

      <br/>
      <hr/>

      <h3>2. Zustand 란?</h3>

      <p>
        - 리액트에서 전역 State 변수를 간단하게 관리할 수 있는 경량 라이브러리 <br/>

        - 훅 기반으로 동작하기 때문에 useState 와 사용법이 매우 유사함 <br/>

        - npm install zustand 명령문으로 라이브러리 설치 후 사용한다. <br/>

        - 주요 용어 정리 <br/>
        store : 전역 State 변수를 저장소 <br/>
        create : store 를 만들 때 사용하는 함수 <br/>
        useStore : 어느 컴포넌트에서든 store 의 State 변수에 접근할 때 사용하는 훅 (함수)
      </p>

      <br/>
      <hr/>

      <h3>3. Zustand 예제</h3>

      {/* Count 값을 조절하고 출력해주는 컴포넌트의 예시 */}

      <CounterComponent />

      {/*
        - 우선 State 를 전역으로 보관할 수 있는 store 를 만들것임!!
        - 주로 이 store 는 별도의 .js 파일에 작성해둔다!! 
      */}

      <br/>

      <TestComponent />

    </div>
  )
}

// 내보내기
export default App
