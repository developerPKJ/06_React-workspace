import { useState } from "react";

function ControlledComponent1() {

    // 실행할 구문
    // 2) 제어 방식을 위한 (입력값을 담기 위한) State 형 변수 셋팅
    const [inputValue, setInputValue] = useState("");
    /*
        내부적으로
        const inputValue = ""; // input 요소의 입력값을 담는 용도로 사용!!
        const setInputValue = () => {}; // inputValue 변수에 대한 setter 함수
    */

    // 2) 제어 방식을 위한 (입력값을 담기 위한) Change 이벤트 핸들러 함수 셋팅
    // > 키보드의 키가 눌릴때 마다 실행됨
    const handleChange = e => {

        // setter 함수를 이용해서 입력값 (State 형 변수) 를 변경
        // > 입력값이 화면에 재렌더링됨 (즉, 실시간 입력 효과)

        // e.target.value
        // > 현재 input 요소에 입력된 값 (아직 화면에 렌더링되지 않음)

        setInputValue(e.target.value);
        // > 화면에 반영되지 않았던 입력값을 State 변수에 대입하고 재렌더링 해줌으로써
        //   실시간으로 입력값이 텍스트상자에 반영되는것!!
    };

    // 2) 제어 방식 연습용 클릭 이벤트 핸들러 함수
    const getValueByState = e => {

        // 기본이벤트 제거
        e.preventDefault();

        alert(`제어방식 : ${ inputValue }`);
        // > 제어방식은 State 변수에 입력값을 담아놨다가 바로 꺼내오는 React 만의 방식!!
        // > React 가 항상 사용자가 입력하는 값을 알 수 있는 방식임!! (권장사항)
    };

    // 1) 비제어 방식 연습용 클릭 이벤트 핸들러 함수
    const getValueByDOM = e => {

        // 기본이벤트 제거
        e.preventDefault();

        // let value = document.getElementById("uncontrolledInput").value;
        let value = document.querySelector("#uncontrolledInput").value;

        alert(`비제어방식 : ${ value }`);
        // > 비제어방식은 DOM 을 직접 조작해서 입력값을 꺼내오는 순수 자바스크립트 방식!!
        // > React 또한 JS 라이브러리이기 때문에 이 방법을 쓸 수는 있으나,
        //   정작 이 방식을 쓰면 React 는 사용자가 어떤 값을 현재 입력했는지 전혀 모른다!! (비권장사항)
    };

    // return 구문
    return (
        <div>
            <h4>1) 비제어 방식 (Uncontrolled) - 기존의 방식</h4>

            <form>
                <input type="text" id="uncontrolledInput" />
                <button type="submit" onClick={ getValueByDOM }>값 꺼내기</button>
            </form>

            <br/>
            <br/>

            <h4>2) 제어 방식 (Controlled) - 리액트 권장 방식</h4>

            <form>
                <input type="text" value={ inputValue } onChange={ handleChange } />
                {/*
                    * 제어 컴포넌트 작성 방법
                    1. 상단에 입력값을 담아둘 State 형 변수를 셋팅 (변수, setter 함수)
                    2. 그 State 변수값을 입력양식 요소의 value 속성으로써 출력
                       (이 순간부터는 내가 키보드로 입력한 값이 출력에 반영이 안됨!!)
                    3. 키보드로 입력을 해서 입력양식요소의 값이 매번 변경될 때 마다 (change 이벤트)
                       내용물 출력에 반영이 되도록 setter 함수로 그 State 변수값을 변경해주기
                       (즉, 실시간 입력 효과 주기)

                    [ 표현법 ]
                    value={ State변수명 } // 입력값을 State 변수로 고정
                    onChange={ () => { setter 호출 } } // 입력값이 변경될 때 마다 State 변수 갱신

                    - 그 외에 input type="password/checkbox/radio/number/..", textarea, select 등
                      모든 입력양식 요소들에게 해당된다!!
                */}
                <button type="submit" onClick={ getValueByState }>값 꺼내기</button>
            </form>
        </div>
    );
}

// 내보내기
export default ControlledComponent1;