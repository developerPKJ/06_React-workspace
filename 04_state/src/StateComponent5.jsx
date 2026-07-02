import { useState } from "react";

// 일반 함수 - 기능 담당
// > .js 내지 .jsx 파일 하나에는 여러개의 함수를 둘 수 있다!!
function getLiList(obj) {

    // 매개변수로 전달받은 obj 에 들은 데이터를 각각 li 태그로 옮긴 후
    // 그 li 태그들이 담겨있는 배열을 셋팅하기!!
    let liList = [];
    for(let key in obj) {

        liList.push(<li key={ key }>{ obj[key] }</li>);
    }

    // 이 시점 기준으로 
    // liList = [<li>홍길동</li>, <li>20</li>, <li>서울시</li>];

    // 이 만들어진 liList 를 리턴
    return liList;
}

// 컴포넌트 역할의 함수 - 화면 담당
function StateComponent5() {

    // 실행할 구문
    // let obj = {name : "홍길동", age : 20, addr : "서울시"};
    // > 일반 변수 형식으로 객체를 선언해도 화면에 재렌더링 X

    // > 마찬가지로 State 형 변수로 객체를 선언해야함!!
    const [obj, setObj] = useState({name : "홍길동", age : 20, addr : "서울시"});
    /*
        내부적으로
        const obj = {name : "홍길동", age : 20, addr : "서울시"};
        const setObj = () => {}; // obj 에 대한 setter 함수
    */

    // 버튼 클릭 시 실행할 함수
    const changeObj = () => {

        // 기존 객체의 내용 중 age 속성을 1 증가시키기
        // obj.age = 21;
        // > 마찬가지로 객체의 경우도 일반 변수가 아닌 State 형식의 변수로 선언해야
        //   값 수정 내용이 화면에 반영된다!! (재렌더링 된다)

        // setter 함수를 이용해서 obj 의 age 속성을 1 증가시키기!!
        // > 객체의 경우도 마찬가지로 특정 속성값 하나만을 수정하고 싶더라도
        //   setter 함수를 호출할 때 인자값으로 변경할 객체를 통으로 넘겨줘야 한다!!

        // 변경할 객체 셋팅
        // let newObj = {name : "홍길동", age : 21, addr : "서울시"};
        // > 기존 객체의 내용 중 일부만 수정하기 위해 객체를 일일이 다시 작성하기 귀찮음!!

        // 마찬가지로 State 형 객체를 전개연산자를 통해 깊은복사본을 만든 후
        // 내가 원하는 속성값만 골라서 수정하면 더 간단해진다!!
        let newObj = {...obj};
        // newObj.age = 21;
        newObj.age = newObj.age + 1;

        setObj(newObj);
    };

    // return 구문
    return (
        <div>
            <h4>회원 정보 상세 조회</h4>

            <ul>
                {
                    getLiList(obj)
                }
            </ul>

            <button onClick={ changeObj }>클릭하세요</button>
        </div>
    );
}

// 내보내기
export default StateComponent5;
// > 필요하다면 .jsx 파일 내부에 일반 기능을 담당하는 함수도 같이 정의해서 쓰되,
//   실제로 내보낼 때는 (화면을 가져다 조립하라고 내보내는거니깐) default 컴포넌트 함수만 내보내서 쓴다!!