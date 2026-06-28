import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// > App.jsx 파일로부터 App 이라는 함수를 가져다 쓰겠다. (import)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
// > index.html 로 부터 id 가 root 인 요소 객체 (div) 를 선택하고,
//   그 div 요소 안에 React 에서 제공하는 방식으로 
//   js 를 이용해서 화면에 동적으로 그림을 그려주겠다. (render)
// > App.jsx 파일의 js 코드를 이용해서 그림을 그리겠다. (참고로 함수를 태그 형식으로 호출하고 있음)
// > App 함수의 return 구문에 있던 태그들이 결국 화면에 그려지는 꼴!!
//   (앞으로 우리는 App.jsx 에서 리액트 문법에 맞게 화면 구현 작업을 진행할 예정)

