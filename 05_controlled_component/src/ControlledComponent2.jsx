import { useState } from "react";

function ControlledComponent2() {

    // 실행할 구문
    // 각 입력값들을 따로따로 처리할 경우
    /*
    // 1) input type="text" 제어 (입력값 : 이름)
    // 입력값 (이름) 을 담아둘 State 변수 셋팅
    const [userName, setUserName] = useState("");

    // 이름 입력용 input 요소에 change 이벤트가 발생할 때 마다 실행할 이벤트 핸들러 함수 정의
    const handleName = e => {

        setUserName(e.target.value);
    };

    // 2) input type="password" 제어 (입력값 : 비번)
    // 입력값 (비번) 을 담아둘 State 변수 셋팅
    const [userPwd, setUserPwd] = useState("");

    // 비번 입력용 input 요소에 change 이벤트가 발생할 때 마다 실행할 이벤트 핸들러 함수 정의
    const handlePwd = e => {

        setUserPwd(e.target.value);
    };

    // 3) textarea 제어 (입력값 : 자기소개글)
    // 입력값 (자기소개글) 을 담아둘 State 변수 셋팅
    const [introduce, setIntroduce] = useState("");

    // 자기소개글 입력용 textarea 요소에 change 이벤트가 발생할 때 마다 실행할 이벤트 핸들러 함수 정의
    const handleIntroduce = e => {

        setIntroduce(e.target.value);
    };
    */

    // ----------------------------------------------------------------------------------------

    /*
        * 위처럼 입력 요소마다 State 와 핸들러를 따로 만들면
          form 태그 내에 입력받아야할 입력 요소가 많아질 수록 코드가 길고 복잡해짐!!

        - 관련된 입력 묶음은 객체 형태의 State 변수로 하나로 묶어서 관리하면 코드가 훨씬 깔끔해진다!!

        
    */

    // 입력값들을 하나의 객체로 묶어서 처리할 경우
    const [member, setMember] = useState({
        userName : "",
        userPwd : "",
        introduce : ""
    });
    // > 회원 한명이라면 응당 이름, 비번, 자기소개글을 가질 수 있다라고 가정!!
    //   기존에 각각 State 형 변수로 "" 을 셋팅했던 것을, 하나의 객체로 묶어서 각 속성값으로 "" 로 셋팅함
    // > 기존에 각각 State 형 변수로 value={} 로 불러왔던 것을 객체명.속성명 으로 불러오면 된다!!

    // 마찬가지로 onChange 핸들러 함수도 공통코드로 묶어서 쓴다!!
    const handleChange = e => {

        // console.log(e.target);
        // console.log(e.target.name); // "userName" / "userPwd" / "introduce"
        // console.log(e.target.value); // 내용물

        // newMember 객체 생성 - 깊은복사본
        let newMember = {...member};

        // 깊은복사본으로부터 변경된 부분만 살짝 수정
        newMember[e.target.name] = e.target.value;
        // > 객체명["속성명"] 으로 해당 속성에 접근해서 알맞은 부분만 딱 변경 가능!!
        // > 각 입력양식 마다 name 속성값을 해당되는 속성명과 맞춰주기!!

        // 최종적으로 setter 함수를 호출
        setMember(newMember);
    };
    // > 기존에 각각 onChange 핸들러 함수로 작성했던 내용을 하나의 핸들러 함수로 작성했음!!
    // > 주의할 점이라고 한다면 어느 요소에 입력을 하든 하나의 함수로 흐름이 넘어오기 때문에
    //   e.target 을 이용해서 어느 요소에 입력이 들어왔는지 반드시 찾아내야 한다!!
    // > 현재 입력된 요소가 누구인지 바로 판별하기 위해 입력요소마다 name 속성을 작성하고,
    //   name 속성값을 일부러 State 형 객체의 알맞은 자리의 속성명 (키값) 과 맞춰준다!!
    // > 기존 State 객체의 깊은복사본으로부터 해당 name 과 일치하는 속성값 자리에 입력값으로 변경해준 뒤
    //   최종적으로 setter 함수를 호출해서 입력값을 화면에 반영해주면 된다!!

    // 등록 버튼 클릭 시 실행할 이벤트 핸들러 함수
    const insertMember = e => {

        e.preventDefault();
        // > 기본이벤트 제거

        // ajax 로 요청 - 입력받은 이름, 비번, 자기소개글을 Spring 의 Controller 로 넘겨야함!!
        /*
            만약 jQuery 가 연동되어있고, $.ajax() 를 통해 요청한다고 가정한다면...

            $.ajax({
                url : "/contextpath/member/insert",
                type : "post",
                data : member,
                success : function() {},
                error : function() {}
            });

            - 특히 나중에 Spring 서버에 비동기식으로 데이터를 전송할 때
              이 객체 State 변수를 그대로 전송하면 된다!!
            
            - Spring 의 Controller 에서 커맨드 객체 방식으로 바로 전달값을 받을 수도 있게 된다!!
              객체의 key 값이 VO 의 필드명과 맞아 떨어지면 자동으로 매핑됨!!

            - 즉, State 객체의 속성명 == input 의 name 속성 == VO 의 필드명
              이 세가지를 맞춰두면 프론트 -> 백엔드 로 데이터 입력부터 전달이 매우 편리해짐!!
        */ 

        alert("회원 정보 등록에 성공했습니다.");
    };

    // return 구문
    return (
        <div>

            <form>
                <h4>1) input type="text"</h4>

                이름 : <input type="text" 
                              name="userName"
                              value={ member.userName }
                              onChange={ handleChange } 
                              placeholder="이름을 입력하세요" />

                <br/>

                <h4>2) input type="password"</h4>

                비밀번호 : <input type="password"
                                  name="userPwd"
                                  value={ member.userPwd } 
                                  onChange={ handleChange }
                                  placeholder="비밀번호를 입력하세요" />

                <br/>

                <h4>3) textarea</h4>

                자기소개 : <textarea name="introduce" 
                                    value={ member.introduce } 
                                    onChange={ handleChange }
                                    placeholder="자기소개를 입력하세요" />
                {/*
                    리액트에서는 textarea 의 입력값도 동일하게 value 속성으로 처리한다!!
                    (시작태그와 종료태그 사이에 처리 X)
                */}

                <br/>

                <button type="submit" onClick={ insertMember }>등록</button>
            </form>

        </div>
    );
}

// 내보내기
export default ControlledComponent2;