let a = 10;
let b = 20;
let result = (a - b);

// 연산자의 결합 법칙:  ( ) 입력해서 우선순위 만들어 놓기

// 문자열 제어하기
// + 연산자는 피연산자가 모두 문자열이면 문자열로 연결
let c = 'hello ' + 'world'; // hello world
let d = '1' + '2'; // 12

// 피연산자 중 하나가 문자열이거나 문자열로 변환할 수 있는 객체라면 다른 피연산자를 문자열로 바꾼 다음 연결
let e = 10 + ' little indians'; // 10 little indians
let f = 1 + {}; // 1[object Object]
let g = true + (new Date()); // trueWed Jun 01 2022 18:38:09 GMT+0900 (GMT+09:00)

console.log(g)

