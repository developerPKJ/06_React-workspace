function MyComponent3(props) {
    // > 함수형 컴포넌트의 경우 매개변수로 전달값을 받는다!!
    //   단, 전달값 여러개를 하나의 매개변수로 뭉쳐서 받는 경우이기 때문에
    //   이 props 매개변수는 "객체 타입" 으로 전달된다!!

    // 실행할 구문
    console.log(props);
    /*
        props = {
            userName : "홍길동",
            age : 25
        }
    */

    // props 의 각 속성값들을 뽑아서 보고 싶다면?
    // > 객체명.속성명 또는 객체명["속성명"] 으로 접근해서 뽑아온다.
    console.log(props.userName);
    console.log(props.age);

    console.log("------------");

    // props 값을 반대로 변경해보기!!
    /*
    props.userName = "김가현";
    props.age = 22;
    props.addr = "서울시";
    props.gender = "여자";

    console.log(props);

    console.log("------------");
    */
    // > props 는 값을 변경하거나 새로운 값을 추가하지 못하는 "읽기 전용"
    //   (read only ~~~~ 오류 발생)

    // 그럼에도 불구하고 전달값을 조작하고 싶다면?
    // > 전개연산자를 이용해서 props 객체를 "깊은복사" 후 그 깊은복사본을 조작하면 된다!!
    let newProps = {...props};

    newProps.userName = "김가현";
    newProps.age = 20;

    console.log(newProps);

    /*
        * 매번 console.log 로 props 값을 출력할 때 두번씩 출력되고 있음!!
        - Strict Mode 로 실행중이기 때문

        * Strict Mode
        - 리액트 프로젝트가 구동되는 중에 발생할 수 있는 잠재적인 문제를 찾아내기 위해서
          일부러 같은 코드를 두번씩 실행시켜보는 모드 (개발용 모드)

        - Strict Mode 를 해제하려면 main.jsx 파일에서 <StrictMode> 태그를 지우면 된다!!
    */

    // return 구문 - () 안에 xml 태그 형식으로 화면 구성
    return (
        <li>{ props.userName }님은 { props.age }살 입니다.</li>
    );
}

// 내보내기
export default MyComponent3;