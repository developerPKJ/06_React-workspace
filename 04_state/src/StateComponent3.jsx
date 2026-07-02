import { useState } from "react";

function StateComponent3() {

    // 실행할 구문
    // h4 요소 안에 출력할 문구를 담을 State 형태의 변수
    const [msg, setMsg] = useState("안녕하세요");

    // setMsg("안녕히계세요"); 
    // > 컴포넌트 함수 내에서 곧바로 setter 함수를 호출하면 무한반복!! (재렌더링 과정에서)

    // 버튼이 클릭되었을 경우 실행할 이벤트 핸들러 함수
    const changeMsg = () => {

        // msg 변수값이 "안녕하세요" 일 경우 "안녕히계세요" 로
        //             "안녕히계세요" 일 경우 "안녕하세요" 로 변경

        if(msg == "안녕하세요") {

            setMsg("안녕히계세요");

        } else {

            setMsg("안녕하세요");
        }
        // > State 형 변수값 또한 마찬가지로 == 을 통해 동등비교가 가능함!!
    };

    // return 구문
    return (
        <div>
            <button onClick={ changeMsg }>클릭하세요</button>
            <h4>{ msg }</h4>
        </div>
    );
}

// 내보내기
export default StateComponent3;