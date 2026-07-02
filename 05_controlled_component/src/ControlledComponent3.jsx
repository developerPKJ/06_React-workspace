import { useState } from "react";

function ControlledComponent3() {

    // 실행할 구문
    // 1) input type="radio" 제어 - 단일 선택
    // > radio 는 checked 속성으로 제어한다. (마찬가지로 State 형 변수를 적용)
    
    // radio 로 입력받은 값을 저장할 State 형 변수
    const [gender, setGender] = useState("");
    // > 처음에는 아무것도 선택이 안된 상태이므로 빈 문자열("") 로 초기화

    // 남성이 선택되면 gender == "M" / 여성이 선택되면 gender == "F"

    // radio 가 change 되었을 경우 실행할 이벤트 핸들러 함수
    const handleGender = e => {

        // console.log(e.target.value); // "M" / "F"

        setGender(e.target.value);
    };
    // > onChange 에 의해 gender State 변수값이 바뀌는 순간
    //   각각의 radio 마다 작성했었던 checked={ gender == "X" } 속성에 의해
    //   gender 값이 "M" 이 되는 순간 / "F" 가 되는 순간 알맞은 radio 가 check 된다!!
    // > State 값을 그대로 출력하는게 아니라 어떤 radio 가 선택되야하는지 결정해준다!!

    // 성별 값을 꺼내오는 버튼을 클릭했을 때 실행할 이벤트 핸들러 함수
    const getGenderValue = e => {

        e.preventDefault();
        // > 기본 이벤트 제거

        alert(`선택된 성별은 ${ gender || "X" } 입니다.`);
        // > 값을 꺼내오는 건 동일하게 State 형 변수를 호출해서 가져오면 되고,
        //   checked 된 상태를 화면에 렌더링 하기 위해 checked 속성의 비교연산식을 이용하는 원리임!!
    };

    // 2) input type="checkbox" 제어 - 다중 선택
    // > 마찬가지로 checked 속성으로 제어한다. 
    //   단, checkbox 는 여러개의 데이터가 선택될 수 있으므로 "배열" 형태의 State 변수를 이용한다.

    // checkbox 로 입력받은 값들을 담을 배열 형태의 State 변수
    const [hobbies, setHobbies] = useState([]);
    // > 처음에는 아무것도 체크되어있지 않으므로 빈 배열로 초기화

    // checkbox 가 change 되었을 경우 실행할 이벤트 핸들러 함수
    const handleHobby = e => {

        // console.log(e.target.value); // 체크가 되었거나 체크가 풀린 데이터
        // console.log(e.target.checked);
        // > e.target.checked : 현재 체크박스가 체크된 상태인지 여부를 나타낸다. (true/false)

        let value = e.target.value;
        let checked = e.target.checked;
        // > checkbox 의 경우는 change 될 때 양방향임!! (체크가 되거나, 체크가 풀리거나)

        if(checked) {
            // > 원래 체크가 안되어있었는데 이번 change 이벤트를 통해 체크된 상태로 변경된 경우
            //   hobbies 라는 배열을 깊은복사한 뒤, value 를 배열에 추가 -> setter 호출

            // let newHobbies = [...hobbies];
            // newHobbies.push(value);
            
            let newHobbies = [...hobbies, value];
            // > 전개연산자를 통해 깊은복사본 배열 접합도 가능!!

            setHobbies(newHobbies);

        } else {
            // > 원래 체크가 되어있었는데 이번 change 이벤트를 통해 체크가 풀린 경우
            //   hobbies 라는 배열로부터 value 를 제거해야함 (몇번째 인덱스에 담겨있는지는 모름)

            let newHobbies = []; 

            for(let i = 0; i < hobbies.length; i++) {

                if(hobbies[i] != value) {
                    // > hobbies[i] 값을 살려야함

                    newHobbies.push(hobbies[i]);
                }
            }

            // 이 시점 기준으로 newHobbies 라는 배열에는 살아남은 값들만 존재
            setHobbies(newHobbies);
        }
    };
    // > checkbox 가 change 이벤트가 일어나는 순간 State 형 배열 변수에 체크된 value 들을 차곡차곡 담는다.
    //   setter 에 의해 재렌더링이 되면서 선택된 데이터에 대한 체크박스들만 체크되서 보이게 된다!!

    // 취미 체크 후 값 꺼내기 버튼 클릭 시 실행할 이벤트 핸들러 함수
    const getHobbyValue = e => {

        e.preventDefault();
        // > 기본 이벤트 제거

        if(hobbies.length == 0) {

            alert("선택된 취미가 없습니다.");

        } else {

            alert(`선택된 취미는 ${ hobbies.toString() } 입니다.`);
        }
    };

    // return 구문
    return (
        <div>
            <h4>1) input type="radio" - 단일 선택</h4>

            <form>
                성별 선택 : 

                <input type="radio" id="genderM" name="gender" value="M" 
                       checked={ gender == "M" }
                       onChange={ handleGender } /> 
                <label htmlFor="genderM">남성</label>

                <input type="radio" id="genderF" name="gender" value="F" 
                       checked={ gender == "F" }
                       onChange={ handleGender } /> 
                <label htmlFor="genderF">여성</label>
                {/* 리액트에서는 for 속성 대신 htmlFor 로 쓴다!! */}

                <br/>

                <button type="submit" onClick={ getGenderValue }>값 꺼내기</button>
            </form>

            <br/>
            <br/>

            <h4>2) input type="checkbox" - 다중 선택</h4>

            <form>
                취미 선택 : 

                {
                    ["독서", "운동", "게임", "요리", "여행", "영화"].map((item, index) => {

                        return (
                            <label key={ index }>
                                <input type="checkbox" 
                                       name="hobby" 
                                       value={ item }
                                       checked={ hobbies.includes(item) }
                                       onChange={ handleHobby } /> { item }
                            </label>
                            // > 배열명.includes(값) : 해당 배열에 해당 값이 포함되어있다면 true 리턴
                        );
                    })
                }

                <br/>

                <button type="submit" onClick={ getHobbyValue }>값 꺼내기</button>
            </form>

        </div>
    );
}

// 내보내기
export default ControlledComponent3;