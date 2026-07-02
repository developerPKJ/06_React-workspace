import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { BrowserRouter } from "react-router-dom";
// > react-router-dom 라이브러리로부터 BrowserRouter 라는 컴포넌트 (태그) 를 가져다 쓰겠다. (import)

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
// > BrowserRouter 로 App 컴포넌트를 감쌈으로써
//   이 웹사이트 전반적인 URL 주소 변화를 감지하고, 그 URL 주소에 맞는 화면으로 변환해주겠다.