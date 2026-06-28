// 안녕하세요 버튼이 클릭되었을 때 실행할 함수
// > sayHello 라는 함수를 바깥에서도 가져다 쓸 수 있도록 내보내겠다. (export)
/*
export function sayHello(name) {

    alert(`Hello! ${ name }!`);
}

// 안녕히계세요 버튼이 클릭되었을 때 실행할 함수
// > sayBye 라는 함수를 바깥에서도 쓸 수 있도록 내보내겠다. (export)
export function sayBye(name) {

    alert(`Bye! ${ name }!`);
}

// 함수 뿐만 아니라 일반적인 변수 또한 내보내기 가능!!
export let num = 1;
*/

// 한번에 내보내기
function sayHello(name) {

    alert(`Hello! ${ name }!`);
}

function sayBye(name) {

    alert(`Bye! ${ name }!`);
}

let num = 1;

// export { sayHello, sayBye, num };
// > 한번에 내보내더라도 외부에서는 각각 import 해서 쓸 수 있다!!

// 만약 내보낼 함수나 변수의 이름이 너무 길 경우..
export { sayHello as hi, sayBye as bye, num as n };
// > as 키워드를 이용하여 내보낼 함수나 변수의 이름을 짧게 줄여서 (별칭) 내보낼 수 있다!!
