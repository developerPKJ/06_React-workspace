import { useLocation } from "react-router-dom";

function TestComponent1() {

    // 2_1. URL 주소 상에 전달값이 노출되지 않는 경우
    // > navigate 함수를 통해 state에 담겨온 데이터를 뽑아서 출력해야함
    // > react에서 제공하는 location 객체 이용

    /*
        [ 표현법 ]

        import 먼저

        location 객체 얻기
        > useLocation 함수 통해 얻음
    */

    const location = useLocation();
    const { id, name } = location.state || {};

    /*
        location = {
            pathname: "/test1",
            state : {
                id: "abc123",
                name: "홍길동"
            }
        }

        - pathname : 현재 URL 주소
        - state : navigate 함수 호출 시 전달한 값이 담겨있음

        구조분해할당
        const id = location.state.id;
        const name = location.state.name;
    */

    return (
        <div>
            <h1>회원 정보 상세보기</h1>

            <h3>아이디 : {id}</h3>
            <h3>이름 : {name}</h3>
        </div>
    );

}

export default TestComponent1;