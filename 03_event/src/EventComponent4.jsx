function EventComponent4() {

    // 실행할 구문
    const submitTest = e => {

        // 기본이벤트를 가지고 있는 요소에 클릭이벤트를 직접 걸게 되면
        // 내가 직접 연결했던 이벤트가 먼저 실행된다!!

        // > 리액트에서는 이벤트와 관련된 정보를 담은 객체 e 에서 제공하는
        //   기본이벤트를 제거하는 함수를 호출해주면 끝난다!!

        // [ 표현법 ]
        // e.preventDefault();
        e.preventDefault();

        // 리액트를 이용해서 화면 구현 시,
        // 입력양식 관련된 화면을 구성할 때 가독성 때문에
        // 입력양식 관련 태그들을 form 태그로 똑같이 감싸서 표현한다!! (장식임)
        // button 의 type 도 동일하게 submit 으로 잡아주되,
        // 화면이 깜빡이지 않게끔 submit 버튼에 클릭 이벤트를 직접 걸어 주고
        // 위와 같이 기본이벤트를 제거하고 마저 볼 일을 보면 된다!!

        // Ajax 관련 코드 ~~~
    };

    // return 구문 - JSX 형식으로 화면 구성
    return (
        <div>

            <form>
                {/* 
                    - 리액트에서 입력양식 폼을 구성할 경우 form 태그 내에 똑같이 input 요소들로 구성한다.
                    - 단, form 요소 내부에서 submit 버튼을 클릭하면
                      화면이 깜빡거리면서 "동기식 요청 방식" 으로 Controller 가 호출될 것임!!
                      (리액트는 기본적으로 화면이 깜빡거리는걸 좋아하지 않음)
                    - 우리는 리액트에서 submit 버튼에 대해 기본이벤트를 제거할 것임!!
                    - submit 버튼이 클릭되는 순간 화면이 깜빡거리지 않는 AJAX 요청을 보내게 될 것!!
                */}

                {/* input 요소 등으로 입력양식 폼을 다 구성했다 라는 가정 하에 */}

                <button type="submit" onClick={ submitTest }>제출</button>
                {/* button 에 type 속성 생략 시 기본값은 submit */}
            </form>

        </div>
    );
}

// 내보내기
export default EventComponent4;