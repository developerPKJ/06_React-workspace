import "./EventComponent2.css";

function EventComponent2() {

    // 실행할 구문
    const clickTest = e => {

        // console.log("잘 클릭되나?");

        // 자바스크립트에서 이벤트 타겟을 얻어내는 방법
        // 1. window.event.target
        // console.log(window.event.target);

        // 2. 익명 이벤트 핸들러 함수에 e 라는 매개변수를 정의한 후 e.target
        // console.log(e.target);
        // > 리액트에서 공식적으로 권장하는 방법임!!
        // > 단, 이 이벤트 핸들러 함수가 "익명" 함수일 경우에만 사용 가능하다!!
        //   (e 라는 매개변수 - 이벤트에 대한 정보를 담은 객체 를 적극 활용하기 위해 익명함수 방식을 더 권장)

        // 3. 익명 이벤트 핸들러 함수일 경우 this 도 가능!!
        // > 익명 함수를 화살표 함수 형식으로 나타낼 경우에는 this 사용 불가!!
        // > 리액트에서는 아예 적용 불가한 방식!! 
        //   왜? xml 태그로 요소를 찍어내기 때문임!! (순수 자바스크립트 요소 객체가 아니기 때문)

        // 4. 순수 자바스크립트 방식으로 직접 방금 이벤트를 당한 요소를 불러오기
        // console.log(document.getElementById("btn2"));
        // console.log(document.querySelector("#btn2"));
        // > 리액트에서는 직접 DOM 요소를 건들이는걸 권장하진 않음!!

        // 이 버튼을 클릭할 때 마다
        // 빨 > 주 > 노 > 초 > 파 > 남 > 보 > ...
        if(e.target.className == "red") {
            e.target.className = "orange";
        } else if(e.target.className == "orange") {
            e.target.className = "yellow";
        } else if(e.target.className == "yellow") {
            e.target.className = "green";
        } else if(e.target.className == "green") {
            e.target.className = "blue";
        } else if(e.target.className == "blue") {
            e.target.className = "navy";
        } else if(e.target.className == "navy") {
            e.target.className = "purple";
        } else {
            e.target.className = "red";
        }
    };

    // return 구문 - JSX 형식으로 화면 구성
    return (
        <button id="btn2" 
                className="red"
                onClick={ clickTest }>
            클릭하세요
        </button>
    );
}

// 내보내기
export default EventComponent2;