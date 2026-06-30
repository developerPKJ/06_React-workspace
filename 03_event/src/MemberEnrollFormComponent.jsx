function MemberEnrollFormComponent() {

    // 실행할 구문
    // 아이디[0], 비번[1], 비번확인[2] 통과 여부를 나타낼 변수 셋팅
    let checkArr = [false, false, false];

    // 4. 최종 가입하기 버튼 클릭 시 실행할 이벤트 핸들러 함수
    const insertMember = e => {

        e.preventDefault();
        // > 기본이벤트 제거

        // 모든 유효성 검사를 통과했을 경우에 대한 여부를 체크
        // > 아이디, 비번, 비번확인 셋 다 통과해야함!!

        if(checkArr[0] && checkArr[1] && checkArr[2]) {
            // > 셋 다 통과일 경우 (true 일 경우)

            // Ajax 를 이용해서 회원가입 처리 후

            alert("회원가입에 성공했습니다.");

        } else {
            // > 하나라도 통과가 아닐 경우 (하나라도 false 일 경우)

            alert("회원가입에 실패했습니다.");
        }
    };

    // 3. 비밀번호가 일치함을 검사하는 이벤트 핸들러 함수 (비번 확인 onBlur)
    const checkPwd2 = () => {

        // 비밀번호와 비밀번호 확인 값이 일치하는지를 보면 됨!!
        
        let userPwd = document.getElementById("userPwd").value;
        let checkPwd = document.querySelector("#checkPwd").value;

        // 결과를 출력할 result3 요소 선택
        var result3 = document.getElementById("result3");

        // 검사 진행
        if(userPwd == checkPwd) {
            // > 두 비번이 일치할 경우

            result3.innerText = "비밀번호가 일치합니다.";
            result3.style.color = "green";

            checkArr[2] = true;

        } else {
            // > 아닐 경우

            result3.innerText = "비밀번호가 일치하지 않습니다. 다시 확인해 주세요.";
            result3.style.color = "red";

            checkArr[2] = false;
        }
    };

    // 2. 비밀번호 유효성 검사용 이벤트 핸들러 함수 (비번 onBlur)
    const checkPwd1 = e => {

        // 사용자가 입력한 비번 값을 가져와야 함!!
        let userPwd = e.target.value;

        // 비번 검사용 정규식
        // > 영문 대소문자, 숫자, 특수기호 !@#$%^ 포함 8~20자 사이
        var regExp = /^[A-Z0-9!@#$%^]{8,20}$/i;

        // 결과를 출력할 result2 선택
        const result2 = document.querySelector("#result2");

        // 검사 진행
        if(regExp.test(userPwd)) {
            // > 유효한 비밀번호일 경우

            result2.innerText = "유효한 비밀번호 입니다.";
            result2.style.color = "green";

            checkArr[1] = true;

        } else {
            // > 유효하지 않은 비밀번호일 경우

            result2.innerText = "8~20자 영문 대소문자, 숫자, !@#$%^ 를 사용하세요.";
            result2.style.color = "red";

            checkArr[1] = false;
        }
    };

    // 1. 아이디 유효성 검사용 이벤트 핸들러 함수 (아이디 onBlur)
    const checkId = e => {

        // console.log("blur 가 일어났나?");

        // console.log(e.target.value);
        // > 현재 이 blur 이벤트가 일어난 input 요소 (target) 으로 부터
        //   .value 속성에 직접 접근해서 입력값을 가져오기!!

        let userId = e.target.value;

        // 아이디 유효성 체크
        // > 영문 소문자, 숫자 포함 5~20자 사이
        let regExp = /^[a-z0-9]{5,20}$/;

        // 결과를 출력할 result1 요소 선택
        const result1 = document.getElementById("result1");

        // 검사 진행
        if(regExp.test(userId)) {
            // > 유효한 아이디일 경우

            result1.innerText = "멋진 아이디네요!";
            result1.style.color = "green";

            checkArr[0] = true;

        } else {
            // > 유효하지 않은 아이디일 경우

            result1.innerText = "5~20자의 영문 소문자, 숫자만 사용 가능합니다.";
            result1.style.color = "red";

            checkArr[0] = false;
        }
    };

    // return 구문
    return (
        <div>
            <h4>회원가입 페이지</h4>

            <form>
                <table>
                    {/*
                        리액트에서는 table 표현 시, 반드시 thead, tbody, tfoot 태그 등으로
                        tr 요소들을 감싸서 표현해야 한다!!
                    */}
                    <tbody>
                        <tr>
                            <th>아이디</th>
                            <td>
                                <input type="text" onBlur={ checkId } />
                            </td>
                        </tr>
                        <tr>
                            {/* 리액트에서는 colspan 속성 또한 카멜케이스를 적용한다!! */}
                            <td colSpan="2">
                                <span id="result1"></span>
                            </td>
                        </tr>
                        <tr>
                            <th>비밀번호</th>
                            <td>
                                <input type="password" id="userPwd" onBlur={ checkPwd1 } />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <span id="result2"></span>
                            </td>
                        </tr>
                        <tr>
                            <th>비밀번호 확인</th>
                            <td>
                                <input type="password" id="checkPwd" onBlur={ checkPwd2 } />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <span id="result3"></span>
                            </td>
                        </tr>
                        <tr>
                            <th>이름</th>
                            <td>
                                <input type="text" />
                            </td>
                        </tr>
                    </tbody>
                </table>

                <br/>

                <button type="submit" onClick={ insertMember }>가입하기</button>

            </form>
        </div>
    );
}

// 내보내기
export default MemberEnrollFormComponent;