import { useState } from 'react'

import './StateComponent2.css'

function StateComponent2() {
    
    // state 형 변수 선언
    const [color, setColor] = useState("Red");
    
    const changeColor = (e) => {
        // 방법1) DOM 요소 직접 접근
        // e.target.className === "Red" ? 
        // e.target.className = "Orange" : e.target.className = "Red";
        // DOM 요소에 직접 접근(e.target)해서 속성값을 대입구문으로 변경
        
        // 리액트에서는 DOM 관련 구문을 직접 조작하는 것을 선호하지 않음
        // 코드 동작은 문제 없음
        // DOM <-> Virtual DOM <-> browser
        // Virtual DOM을 통해 요소를 바꾸는걸 권장
        
        // 방법2) State 형 변수 이용
        color === "Red" ? setColor("Orange") : setColor("Red");

        // 무한 반복하는 경우 :
        // setColor() 구문을 컴포넌트 함수 안에서 바로 실행하면
        // setColor() 구문이 실행되면 컴포넌트가 재렌더링 되면서
        // setColor() 구문이 다시 실행되면서 무한 반복 발생
        // 따라서 setColor() 구문은 주로 이벤트 핸들러 함수처럼
        // 한번만 실행되는 구문 안에서 작성해야 함
    };

    return (
        <div>
            <h3 className={color} onClick={ changeColor }>test</h3>
        </div>
    );

}

export default StateComponent2;