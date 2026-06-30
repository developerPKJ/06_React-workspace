function EventComponent1() {

    // 실행할 구문
    // 이벤트 핸들러 함수를 별도의 변수로 셋팅하기!!
    /*
    const clickTest = () => {

        alert("클릭 이벤트 발생!");
    };
    */
    
    function clickTest() {

        alert("클릭 이벤트 발생!");
    }
    // > 익명함수도 가능하지만, 선언적 함수로도 쓸 수 있다!!
    //   (단, 익명함수로 쓰는 것을 더 권장한다)

    // 해당 버튼에 마우스가 올라가는 순간 실행할 함수를 변수로 셋팅
    const mouseEnterTest = () => {

        console.log("마우스 엔터 이벤트 발생!");
    };

    // 해당 버튼으로부터 마우스가 빠져나가는 순간 실행할 함수를 변수로 셋팅
    const mouseOutTest = () => {

        console.log("마우스 아웃 이벤트 발생!");
    };

    // return 구문 - JSX 형식으로 화면 구성
    /*
    return (
        <button onClick={ () => { 

            // 이 버튼이 클릭되었을 때 실행할 구문
            alert("클릭 이벤트 발생!");
         } }>
            버튼을 클릭해보세요
        </button>
    );
    */
    // > 위와 같이 이벤트 핸들러 함수를 직접 {} 안에 작성해도 상관 없지만
    //   실행할 구문이 너무 길어진다면? 가독성이 떨어진다!!

    return (
        <button onClick={ clickTest }
                onMouseEnter={ mouseEnterTest }
                onMouseOut={ mouseOutTest }>
            버튼을 클릭해보세요
        </button>
    );
    // > 한개의 요소에 여러개의 이벤트를 걸 수도 있다!!

    /*
        이벤트 속성명은 "카멜케이스" 로,
        이벤트 핸들러는 함수를 통으로 지정하면 된다!!
    */
}

// 함수 (컴포넌트) 내보내기
export default EventComponent1;