import { useParams } from "react-router-dom";

function TestComponent2() {

    // 2_2. URL 주소 상에 전달값이 노출되는 경우
    // > react 에서 제공하는 useParams 함수를 통해 전달값을 뽑아서 출력

    /*
        [ 표현법 ]

        import 먼저

        useParams 함수 호출
    */

    const noticeNo = useParams().noticeNo;

    return (
        <div>
            <h1>회원 정보 상세 보기</h1>

            <h3>공지사항 번호 : {noticeNo}</h3>
        </div>
    );

}

export default TestComponent2;