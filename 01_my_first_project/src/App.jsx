import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

// App 이라는 js 선언적 함수 (function) - 컴포넌트
function App() {

  // 실행할 구문 - 생략 가능
  let num = 10;

  // 총합을 구하는 구문
  let sum = 0;

  for(let i = 1; i <= 100; i++) {

    sum += i;
  }

  // return 구문 - 태그 형식으로 화면을 구성한다.
  return (
    <div>
      <h1>React</h1>

      <p>
        - 자바스크립트 라이브러리의 한 종류로, 
          페이지를 매번 다시 리로드 (새로고침) 하지 않고 
          자바스크립트의 동적으로 요소를 생성하는 구문들을 이용해서
          부분적으로 필요한 화면만 변경해서 화면을 그려주는 라이브러리 <br></br>

        - 화면을 html 이 아닌 자바스크립트로 그려줌으로써,
          필요한 화면이 여러개더라도 하나의 html 파일에 자바스크립트로 동적으로 화면만 짜주는 원리
          (SPA - Single Page Application 구현이 가능해짐) <br></br>

        - 리액트를 사용함으로써
          웹 애플리케이션의 성능 (그림 그려지는 속도가 빨라짐, 화면이 깜빡거리지 않음) 을 높여줌 <br></br>
          
        - 리액트를 쓴다고 해서 절대 화면이 예뻐지지는 않음!!
      </p>

      <br></br>
      <hr></hr>

      <h3>* 리액트의 장점</h3>

      <p>
        1. 화면이 렌더링 되는 속도가 상대적으로 빠르다. <br></br>
        2. 코드의 재사용성이 증가한다. - 화면을 함수 단위로 짜기 때문에 재사용성이 증가할 수 밖에 없음
      </p>

      <br></br>
      <hr></hr>

      <h3>* Virtual DOM (Document Object Model)</h3>

      <p>
        - 자바스크립트에서 기존의 한개의 html 문서를 나타내는 객체가 DOM (Document) <br></br>

        - 기존 웹페이지 구현 방식에서는 필요한 화면 html (내지 jsp) 문서들이 다량이기 때문에
          화면이 변경될 때 마다 새로운 html 문서들이 "응답, 리로드" 되어
          매번 화면이 깜빡거리면서 처음부터 그려지게 된다!! <br></br>

        - Virtual DOM 은
          브라우저와 DOM 사이의 중간 매개체로써,
          화면 구조의 변화가 생길 때 마다 기존의 화면 DOM 구조와 바뀔 화면의 DOM 구조를 비교하여
          "어느 부분이 변경 되었나" 대조 후 수정할 부분만 수정해주는 역할
          (React 라이브러리에 내장되어있음) <br></br>

        - 즉, React 를 사용하면 Virtual DOM 덕분에
          화면이 바뀔 때 마다 깜빡거리면서 전체가 리로드 되지 않기 때문에
          렌더링 되는 속도가 빨라지는 것임!! (성능 향상 목적)
      </p>

      <br></br>
      <hr></hr>

      <h3>* JSX (JavaScript XML)</h3>

      <p>
        - 자바스크립트 문법 내부에 xml 태그를 기술하는 것 <br></br>
          (xml 태그는 반드시 시작태그와 종료태그가 세트로 이루어져야함,
           시작태그와 종료태그 사이에 딱히 적을 내용이 없다면 / 로 한번에 종결도 가능) <br/>
        
        - 즉, 자바스크립트 문법으로 기존 html 문법과 최대한 비슷한 형태로
          화면을 비교적 쉽게 구현할 수 있도록 도와주는 역할을 한다. <br/>
      </p>

      <br/>
      <hr/>

      {/*
          * JSX (xml 태그) 사이에 주석을 달고 싶다면
            {} 안에 자바스크립트 형식의 주석을 써 주면 된다!!

          - 이 {} 영역 안에는 자바스크립트 구문을 쓸 수 있다!!
          - xml 태그 사이에 자바스크립트 변수값 또는 연산식의 결과 등을 
            화면에 출력하고 싶을 경우 쓰인다!! (표현식, 출력식 역할)
          - 즉, 기존 jsp 의 <%= 변수명 %> 과 같은 역할이다.
      */
        Math.random()
      }

      <br/>
      <hr/>

      변수값 : { num + 1 }

      <br/>
      <hr/>

      1 ~ 100 까지의 총합 : { sum }

    </div>
  )
}

export default App
// > App 함수를 외부에서 가져다 쓸 수 있도록 내보내겠다. (export default)
