// 2.1.1 세미콜론
console('Hello, World!');
console('Hello, World!');
console('Hello, javascript!');
console('Hello!');
/* 세미콜론은 붙이지 않으면 일부 명령에서 가끔 에러가 발생, 혹시 모를 에러 발생을 방지하고, 통일성과 가독성을 위해 모든 명령 뒤에 세미콜론을 붙여준다. */

// 2.1.2 주석
// Hello, comment 출력 (한줄 주석)
console.log('Hello, comment!');
//console.log('Hello, comment!'); 코드가 작동하지 않도록 주석처리 가능

// 여러 줄 주석 (내용이 몇줄이든 상관없이 모두 주석 처리가 가능)
/* console.log('hello, world!');
console.log('Hello, javascirpt!'); */

// 2.1.3 들여쓰기
/* 자바스크립트는 들여쓰기에 제한이 없다.
보통 2칸, 스페이스로 4칸, 탭으로 4칸 공백을 둔다.*/
if (condition) {
  console.log('Hello, comment!');
}
