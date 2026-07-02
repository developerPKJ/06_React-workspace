import { create } from "zustand";
// > 당연히 import 는 필수!!

/*
    * Zustand store 만들기

    - create() 함수로 전역 State 변수를 보관할 저장소 (store) 를 생성한다.
    - create 호출 시 인자로 익명함수를 전달하고,
      그 익명함수의 매개변수를 set 으로 셋팅하고, 그 set 으로 State 를 변경한다.

    [ 표현법 ]
    const use스토어명 = create((set) => ({
        State변수명 : 초기값,
        함수명 : () => (set((state) => { state변수명 : 변경할값; }))    
    }));

    - 이렇게 내가 만든 store 는 export 해놨다가 필요한 컴포넌트마다 가져다 쓴다.
    - 즉, 전역으로 가져다 쓰고자 하는 State 변수와, 그 State 변수에 대한 setter 함수를
      내 입맛대로 커스터마이징 해서 한번 만들어두고 가져다 쓰는 개념임!!
*/

const useCountStore = create((set) => ({
    // 전역 State 변수 선언용 속성
    count : 0,

    // 바로 위에서 선언한 State 변수에 대한 setter 함수를 커스터마이징 하는 부분
    // > 내가 필요한 만큼 만들어서 쓸 수 있다!!
    increment : () => (set((state) => ({ count : state.count + 1 }))),
    decrement : () => (set((state) => ({ count : state.count - 1 }))),
    reset     : () => (set((state) => ({ count : 0 })))
}));

// 내보내기
export default useCountStore;