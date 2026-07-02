import useCountStore from "./countStore";
// > countStore.js 에 만든 useCountStore 를 import

function CounterComponent() {

    // 실행할 구문
    /*
        * store 에서 필요한 State변수와 setter 함수를 가져다 쓸 수 있다!!
        
        - useState 처럼 훅 형태로 사용한다.
        - 매번 props 로 받을 필요 없이
          어느 컴포넌트에서든지 바로 접근해서 가져다 쓸 수 있게됨!! (전역변수)
    */

    const {count, increment, decrement, reset} = useCountStore(); 
    // > {count : 0, increment : () => {}, decrement : () => {}, reset : () => {}}

    /*
        내부적으로
        const count = 0;
        const increment = () => {};
        const decrement = () => {};
        const reset = () => {};
    */

    // return 구문
    return (
        <div>
            <h4>전역 카운터</h4>

            <p>현재 count : { count }</p>

            <br/>

            <button onClick={ decrement }>-</button> &nbsp;
            <button onClick={ increment }>+</button> &nbsp;
            <button onClick={ reset }>초기화</button>
        </div>
    );
}

// 내보내기
export default CounterComponent;