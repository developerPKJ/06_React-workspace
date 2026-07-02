import useCountStore from "./countStore";

function TestComponent() {

    // 실행할 구문
    // const {count, increment, decrement, reset} = useCountStore();
    const count = useCountStore().count;

    // return 구문
    return (
        <h3>
            count가 잘 공유 되나? : { count }
        </h3>
    );
}

// 내보내기
export default TestComponent;