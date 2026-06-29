import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import StateComponent1 from './StateComponent1'

function App() {

  // 실행할 구문

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

    </div>    
  );
  
}

// 내보내기 구문
export default App
