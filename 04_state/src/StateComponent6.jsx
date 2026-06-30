function StateComponent6(props) {
    
    // props = {str : "Before"} (App.jsx에서 전달한 값)

    const changeStr = () => {
        // props.str = "After"; // props는 읽기 전용이므로 변경 불가

        // 그래서 보통 State 형 변수를 전달값으로 넘기고 props로 받은경우
        // 변경이 필요하면
        // setter 함수도 전달값으로 같이 넘겨주면 됨
        props.setStr("After");
        // 읽기전용인 props여도 setter 함수를 통해 상태를 변경할 수 있음
    };

    return (
        <div>
            <p>str : {props.str}</p>
            <button onClick={changeStr}>str 변경</button>
        </div>
    );

}

export default StateComponent6;