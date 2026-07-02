import axios from "axios";

import { useState, useEffect } from "react";

function AxiosComponent2() {

    // 실행할 구문
    // 응답데이터를 tr 요소로 감싼 배열을 담을 State 형 변수
    const [dataList, setDataList] = useState([]);

    // 무한반복을 방지하기 위해 useEffect 훅으로 axios 요청 구문 감싸기
    useEffect(() => {

        // axios 로 요청
        axios({
            url : "https://my-json-server.typicode.com/typicode/demo/comments",
            method : "get"
        }).then((response) => {

            // console.log(response.data); // [{}, {}]

            // 이 조회된 데이터들을 tr 요소로 재가공해서 배열에 차곡차곡 담기
            const trArr = response.data.map((item, index) => {

                return (
                    <tr key={ index }>
                        <td>{ item.id }</td>
                        <td>{ item.body }</td>
                        <td>{ item.postId }</td>
                    </tr>
                );
            });

            setDataList(trArr);
            // > setter 함수를 단 한번만 실행될 수 있도록 
            //   axios 요청 구문을 useEffect 훅으로 감싸준다!!

        }).catch(() => {

            console.log("ajax 통신 실패!");
        });

    }, []);

    // return 구문
    return (
        <div>
            <h4>JSON 샘플 무료 데이터 2</h4>

            <table border="1">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>body</th>
                        <th>postId</th>
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
export default AxiosComponent2;