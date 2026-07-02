import { useState } from "react";

function StateComponent4() {

    // 실행할 구문
    // let arr = ["html", "css", "javascript", "jQuery"];
    // > 일반 배열의 경우 내용이 바뀌더라도 화면에 반영되지 않음!!

    // > 자바스크립트 변수에는 아무 타입이나 다 담을 수 있었음!!
    //   마찬가지로 State 형 변수에 아무 타입이나 다 담을 수 있다!!

    // "배열" 타입의 State 형 변수 선언
    const [arr, setArr] = useState(["html", "css", "javascript", "jQuery"]);
    /*
        내부적으로
        const arr = ["html", "css", "javascript", "jQuery"];
        const setArr = () => {}; // arr 에 대한 setter 함수
    */

    // 버튼 클릭 시 실행할 이벤트 핸들러 함수
    const changeArr = () => {

        // arr 배열의 [3] 번 데이터만 "React" 로 변경 ("jQuery" -> "React")
        // arr[3] = "React";
        // > 마찬가지로 배열 또한 일반 변수 형태로 선언하고 변경하면 화면에 반영되지 않음!!
        //   그래서 배열도 State 형 변수로 선언하고 값을 수정할 수 있다!!

        // setter 함수를 이용해서 배열의 [3] 번 데이터 변경해보기
        // > 아무리 배열의 일부 데이터만 수정하더라도
        //   setter 함수를 통해 배열 자체를 다른 배열로 덮어씌워줘야함!!
        //   (setter 함수 호출 시 새로운 배열을 통으로 매개변수 인자로 넘겨줘야함)

        // 변경할 배열 셋팅
        // const newArr = ["html", "css", "javascript", "React"];
        // > 매번 배열을 직접 다시 셋팅하기가 너무 귀찮음!!

        // 그래서 주로 전개연산자를 통해 기존 State 형 배열의 깊은복사본을 만들고,
        // 깊은복사본 배열로부터 내가 수정할 부분만 수정한 뒤, setter 로 넘겨서 쓴다!!
        const newArr = [...arr];
        newArr[3] = "React";

        // 이 변경할 배열을 setter 의 인자로 넘기면서 호출 (간접 대입)
        setArr(newArr);
    };

    // return 구문
    return (
        <div>
            <h4>프론트엔드 기술들</h4>

            <ul>
                {
                    arr.map((item, index) => {

                        return (
                            <li key={ index }>{ item }</li>
                        );
                    })
                }
                {/* 마찬가지로 State 형 배열도 map 함수 적용이 가능하다!! */}
            </ul>

            <button onClick={ changeArr }>클릭하세요</button>
        </div>
    );
}

// 내보내기
export default StateComponent4;