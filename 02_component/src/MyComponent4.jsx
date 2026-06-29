// 클래스형 컴포넌트 만들기
// > 클래스명이 곧 컴포넌트명이 됨
// > 반드시 Component 라는 클래스(리액트 라이브러리에서 제공) 를 상속받아야 함
// (클래스형 컴포넌트를 만들기 위해 리액트에서 제공하는 클래스)
import { Component } from "react";

class MyComponent4 extends Component {

    // 메소드 속성 정의 : render 라는 메소드 속성을 정의함
    render() {
        // 실행할 구문
        // 인라인 스타일 방식으로 적용할 스타일 객체 생성
        const styleObj = {
            color: "red",
            backgroundColor: "yellow",
            fontWeight: "lighter",
            textDecoration: "line-through",
        }

        // 클래스형 컴포넌트는 내부적으로 props 객체를 갖고 있음
        // console.log(props);
        // props는 속성으로써 갖고 있음, 변수X -> this.props로 작성
        console.log(this.props);

        // 주로 구문을 줄이기 위해 각각의 속성값을 변수로 대입 후 출력해 씀
        // let boardTitle = this.props.boardTitle;
        // let boardContent = this.props.boardContent;

        let { boardTitle, boardContent } = this.props;
        // 구조분해할당 적용 가능

        // this.props.boardTitle = "게시판 제목 변경";
        // > props는 읽기 전용(read only) 속성이므로 값을 변경할 수 없음

        // return 구문 - JSX 형식으로 화면 구성
        return (
            <div>
                <h2 style={styleObj}>
                    * 클래스형 컴포넌트
                    <br />
                    <h3>{boardTitle}</h3>
                    <h4>{boardContent}</h4>
                </h2>
            </div>
        );
    }

}

// 내보내는 구문
export default MyComponent4
