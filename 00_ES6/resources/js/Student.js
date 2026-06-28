// Student.js 파일 내부에는 Student 클래스 오직 하나만 정의할 예정!!
// > js 파일 하나 당 내보낼게 오로지 한개라면 export default 가능!!

class Student {

    // 생성자함수 - 일반속성 정의
    constructor(name, age, classRoom) {

        this.name = name;
        this.age = age;
        this.classRoom = classRoom;
    }

    // 메소드속성 정의
    toString() {

        return `${ this.name } 학생은 ${ this.age } 살이며 ${ this.classRoom } 에서 열공중입니다!!`;
    }

}

// export { Student };

export default Student;
// > export default 의 경우 {} 를 쓰지 않는다!!