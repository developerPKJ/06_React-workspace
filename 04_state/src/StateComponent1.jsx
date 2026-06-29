import { useState } from 'react';

function StateComponent1() {
    
    // State 사용 전
    // let count = 0;

    // State 사용 후
    let [count, setCount] = useState(0); // 초기값 0
    // useState(count) = [count, setCount(value) => {count = value}]

    // 실행할 구문
    const plusCount = (e) => {
        // console.log(e.target);

        // State 사용 전
        // count++;
        // console.log(count);
        /*
        이렇게 하는경우 아래 return 구문에서 count 값이 변경되지 않음
        왜냐하면 count 값이 변경되더라도 화면이 다시 렌더링되지 않기 때문
        변경하려면 아래 count 값을 변경하는 inner 구문을 여기에 작성해야함
        */

        // State 사용 후
        setCount(count + 1);
    };

    // return 구문
    return (
        <div>
            <p>총 {count}번 클릭했습니다.</p>
            <button onClick={ plusCount }>클릭</button>
        </div>
    );

}

// 내보내기 구문
export default StateComponent1;