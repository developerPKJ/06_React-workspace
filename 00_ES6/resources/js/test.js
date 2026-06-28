// 1 ~ 100 까지의 정수의 총 합을 구해서 출력하는 JS 프로그램
let sum = 0;

for(let i = 1; i <= 100; i++) {

    sum += i;
}

console.log(`1 부터 100 까지의 총 합은 ${ sum } 입니다.`);

/*
    * node.js
    - 브라우저 없이도 JavaScript 코드를 실행시킬 수 있는 실행 환경
      (Java 로 따지면 JVM 내지 JRE 같은 존재)
    - 터미널 (명령 프롬프트) 에서 .js 파일을 실행시킬 수 있다!!
*/