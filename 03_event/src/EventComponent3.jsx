function EventComponent3(props) {

    // 실행할 구문
    // h2 요소가 클릭되었을 때 실행할 함수
    const clickTest = e => {

        // console.log(e.target);
        // console.log(e.target.innerText);

        // h2 요소가 클릭되었을 때 innerText 값을 수정하고 싶음!!
        // e.target.innerText = "안녕히계세요";

        e.target.innerText = props.text;
        // > 전달값 또한 이벤트 핸들러 함수 내부에서 사용 가능!!
    };

    // return 구문 - JSX 형식으로 화면 구성
    return (
        <h2 onClick={ clickTest }>
            안녕하세요
        </h2>
    );
}

// 내보내기
export default EventComponent3;