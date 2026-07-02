import axios from "axios";
// > axios 라이브러리로 부터 axios 함수를 가지고 오겠다. (import)

// import { useState } from "react";
// import { useEffect } from "react";
import { useState, useEffect } from "react";

function AxiosComponent1() {

    // 실행할 구문

    // tr 요소들이 담겨있는 배열을 나타내는 State 형 변수 셋팅
    // (State 형식의 배열)
    const [dataList, setDataList] = useState([]);
    /*
        내부적으로
        const dataList = [];
        const setDataList = () => {}; // dataList 에 대한 setter 함수
    */

    /*
        * State 의 setter 함수 호출 구문이 then() 안에서 일어나기 때문에
          이 컴포넌트가 계속 호출되면서 (재렌더링에 의해) 무한 반복이 일어나는 상황!!

        - 이 AxiosComponent1 컴포넌트가 
          "맨 처음 (최초) 에 렌더링 될 때 (로딩 될 때, mount 될 때) 딱 한번만 실행할 구문" 안쪽에서
          axios 를 요청해주면 된다!!

        순수 자바스크립트에서는
        window.onload = () => { 이 함수 };

        jQuery 에서는
        jQuery.ready(function() { 이 함수 }); 또는
        $.ready(function() { 이 함수 }); 또는
        $(() => { 이 함수 });

        - 즉, 기존의 window.onload 또는 $(function() {}) 역할을 하는 리액트 구문을 이용하자!!

        * 이 역할을 해주는 React 구문 : uesEffect() 내장 함수 (훅)
        - 컴포넌트가 마운트 (제일 처음 렌더링, 로딩) 될 때
          딱 한번만 실행할 구문을 정의해 두는 훅

        [ 표현법 ]
        
        // 당연히 import 해야함!!
        import { useEffect } from "react";

        // 컴포넌트 함수 안쪽에서
        useEffect(() => {
        
            이 컴포넌트가 맨 처음 렌더링될 때 딱 한번 실행할 구문;

        }, [값 변경을 감지할 변수명, 변수명, ...]);

        - 첫번째 인자인 함수는 실행할 구문을 적는 부분
        - 두번째 인자인 배열은 변경을 감지할 변수들을 나열하는 부분
          > 해당 컴포넌트가 최초로 단 한번 로딩될 때에만 구문을 실행하고 싶다면 [] (빈 배열) 을 제시
          > 배열 내부에 변수명들을 나열한 경우에는
            최초로 단 한번 이 컴포넌트가 로딩될 때 함수가 한번 실행 후,
            그 이후로 그 변수값들이 변동될 때 마다 함수가 매번 다시 실행되는 구조
    */

    useEffect(() => {

        // 여기서 axios 요청을 딱 한번만 한다!!
        // > 여기서 작성된 코드들은 추후 setter 함수에 의해 이 컴포넌트가 다시 렌더링 되더라도
        //   (이 컴포넌트 함수가 다시 호출되더라도) 두번 다신 실행되지 않음!! (딱 한번만 실행됨)

        /*
            * axios 라이브러리 사용법
            - JSON 데이터 요청 후 응답 받기

            [ 표현법 ]
            // 당연히 axios 함수를 import 해서 써야함!!
            import axios from "axios";
            
            axios({
                url : "요청할url주소",
                method : "요청전송방식(get/post)",
                data : {키 : 밸류, 키 : 밸류, ...} 또는 // post 방식일 경우 - url 주소의 body 에 담겠다.
                params : {키 : 밸류, 키 : 밸류, ...} // get 방식일 경우 - url 주소의 header 에 담겠다.
            }).then((응답정보) => {
                
                위의 요청 성공 시 실행할 구문;

                단, 매개변수로는 응답에 대한 전반적인 정보가 다 들어있음!!
                (응답데이터만 들어가 있는게 아님)

                매개변수로 응답정보가 객체형식으로 통으로 넘어오고,
                그 중, 응답 데이터는 data 라는 속성에 들어가 있음!!
                (즉, 응답데이터만 뽑아내려면 응답정보.data 로 뽑아내야 한다)
                
            }).catch(() => {
                
                위의 요청 실패 시 실행할 구문;
            
            }).finally(() => {
            
                요청 성공이든 실패든 간에 무조건 실행할 구문;
            });

            - url 속성은 반드시 써야 함!! 생략 불가!!
            - method 속성은 생략 시 기본값이 "get"
            - 요청 시 전달값이 딱히 없으면 data 또는 params 속성 생략 가능
        */
        
        // > https://my-json-server.typicode.com/typicode/demo/posts
        //   로 부터 제공되는 JSON 데이터를 그대로 받아올 예정

        axios({
            url : "https://my-json-server.typicode.com/typicode/demo/posts",
            method : "get"
        }).then((response) => {

            // console.log("ajax 통신 성공!");

            // console.log(response);
            // > {config : ~~~, data : ~~~, status : ~~~, ...} : 응답정보가 객체형식으로 담겨옴

            // console.log(response.data); // [{}, {}, {}]
            // > 그 중 data 속성에 응답데이터가 담겨있음!!

            // 이 조회해온 응답 데이터를 tbody 컴포넌트 내부에 출력하기!!
            // > 조회해온 데이터를 tr 요소로 각각 하나씩 재가공하여 배열에 차곡차곡 담아 둘 것!!

            // tr 요소들을 담을 배열 셋팅
            /*
            const trArr = []; // [<tr></tr>, <tr></tr>, <tr></tr>]

            for(let i = 0; i < response.data.length; i++) {

                // console.log(response.data[i]);

                trArr.push(
                    <tr key={ i }>
                        <td>{ response.data[i].id }</td>
                        <td>{ response.data[i].title }</td>
                    </tr>
                );
            }
            */

            const trArr = response.data.map((item, index) => {

                return (
                    <tr key={ index }>
                        <td>{ item.id }</td>
                        <td>{ item.title }</td>
                    </tr>
                );
            });

            // > trArr is not defined
            //   분명히 trArr 이라는 변수를 위에서 선언했음에도 불구하고, 변수가 없다고 오류 발생!!
            // > 왜? axios() 가 먼저 호출된 것은 맞으나, 비동기식 요청이기 때문에
            //       응답처리가 다 끝나기 전에 return 구문이 먼저 실행된 것!!

            // 해결방법)
            // State 를 쓴다.
            setDataList(trArr);
            // > 단, State 변수값이 변경되고, 재렌더링 되는 과정에서
            //   이 AxiosComponent1 함수가 계속 반복적으로 호출된다!!
            // > axios 요청도 계속 반복적으로 날려지게 된다!!
            // > setter 함수가 딱 한번만 실행되도록 유도해야 한다!!


        }).catch(() => {

            console.log("ajax 통신 실패!");

        }).finally(() => {

            console.log("ajax 통신 성공이든 실패든 간에 실행!");
        });

    }, []);

    // return 구문
    return (
        <div>
            <h4>JSON 샘플 무료 데이터 1</h4>

            <table border="1">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>title</th>
                    </tr>
                </thead>
                <tbody>
                    { dataList }
                </tbody>
            </table>
        </div>
    );
}

// 내보내기
export default AxiosComponent1;