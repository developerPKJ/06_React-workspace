import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import ControlledComponent1 from "./ControlledComponent1";
import ControlledComponent2 from "./ControlledComponent2";
import ControlledComponent3 from "./ControlledComponent3";
import ControlledComponent4 from "./ControlledComponent4";

function App() {
  
  // 실행할 구문

  // return 구문
  return (
    <div>

      <h1>Controlled Component (제어 컴포넌트)</h1>

      <p>
        - React 의 State 변수가 입력양식요소 (input, textarea, select 등) 의 입력값을
          직접 "제어 (관리)" 하는 방식 <br/>

        <br/>
        - React 에서 입력값을 처리하는 방식 <br/>
        1. Uncontrolled (비제어 방식) : 입력양식요소의 입력값을 DOM 을 통해 직접 조작하는 방식 - 기존의 방법 <br/> 
                                       사용자가 입력양식요소에 입력한 값을
                                       document.getElementById("id").value 를 통해 직접 값을 꺼내오는 방식
        <br/>
        2. Controlled (제어 방식) : State 가 입력양식요소의 입력값을 저장하고 관리하는 방식 <br/>
                                   입력값을 매번 State 형 변수에 담고, 그 값을 입력양식요소의 value 로 출력 <br/>
        <br/>

        - React 에서는 Controlled 방식을 권장!! (왠만해서는 직접 DOM 을 건들지 말자) <br/>
        - 입력값을 React State 가 항상 알고 있으므로 입력값 처리가 훨씬 쉬워진다!!
      </p>

      <br/>
      <hr/>

      <h3>1. Uncontrolled 방식과 Controlled 방식의 차이</h3>

      <ControlledComponent1 />

      <br/>
      <hr/>

      <h3>2. 여러 입력 요소 제어하기 (text, password, textarea)</h3>

      <ControlledComponent2 />

      <br/>
      <hr/>

      <h3>3. radio, checkbox 제어하기</h3>

      <ControlledComponent3 />

      <br/>
      <hr/>

      <h3>4. select, option 제어하기</h3>

      <ControlledComponent4 />

    </div>
  )
}

// 내보내기
export default App
