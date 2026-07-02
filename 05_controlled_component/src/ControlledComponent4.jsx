import { useState } from "react";

function ControlledComponent4() {

    // 실행할 구문
    // select, option 태그는 selected 속성을 쓰므로, selected 된 value 값을 담을 State 변수 선언
    const [city, setCity] = useState("서울");
    // > 초기화 시 제일 상단 option 의 value 로 초기화한다!! (selected 니까)

    // > 단, 리액트에서는 option 태그에 selected 속성을 쓰지 않는다!!
    // > select 태그에 value 속성을 기술한다!!

    // select 태그에 change 이벤트 발생 시 실행할 이벤트 핸들러 함수
    const handleCity = e => {

        setCity(e.target.value);
    };

    // 버튼 클릭 시 실행할 이벤트 핸들러 함수
    const getCityValue = e => {

        e.preventDefault();
        // > 기본이벤트 제거

        alert(`선택된 도시는 ${ city } 입니다.`);
    };

    // return 구문
    return (
        <div>
            <form>
                거주 지역 : 
                <select value={ city } onChange={ handleCity }>
                    <option value="서울">서울</option>
                    <option value="경기">경기</option>
                    <option value="부산">부산</option>
                    <option value="대구">대구</option>
                    <option value="인천">인천</option>
                    {/* 마찬가지로 map 함수를 통해 반복적으로 출력도 가능하다!! */}
                </select>

                <br/>

                <button type="submit" onClick={ getCityValue }>값 꺼내기</button>
            </form>
        </div>
    );
}

// 내보내기
export default ControlledComponent4;