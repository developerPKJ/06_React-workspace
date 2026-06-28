import "./MyComponent2.css";

function MyComponent2() {

    // 실행할 구문
    const styleObj = {
        color : "pink",
        border : "3px dotted pink",
        width : "300px",
        height : "100px",
        backgroundColor : "lightgray"
    };
    // > 인라인 스타일 방식의 경우 가독성 측면에서 꾸밀 내용이 길면 보기 안좋음!!
    //   별도의 스타일 객체 변수를 셋팅 후 style={ 객체명 } 안에 가져다 쓰는 것을 권장한다!!

    // return 구문 - () 안에 xml 태그 형식으로 화면을 구성
    return (
        <div style={ styleObj }>
            나의 <span className="second">두번째</span> 컴포넌트!!
            {/* 리액트에서는 기존 class 속성 대신 className 속성으로 쓴다!! */}
        </div>
    );

}

// 컴포넌트 (함수) 내보내기
export default MyComponent2;