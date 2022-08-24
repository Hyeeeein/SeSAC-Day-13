// 관계 연산자
// 암묵적 형변환 : 따옴표 안은 모두 문자열로 인식 따라서 '10'도 문자열.
// 하지만 안의 값은 똑같기 때문에 똑같다고 인식
let a = 10; //number
let b = '10'; //string

let c = a == b;
console.log(c) // true 출력, 둘 다 문자열이기 때문에 true 로 출력?

let num1 = 100;
let num2 = '100';
let num3 = num1 != num2;
console.log(num3); // num1 과 num2 는 각각 number, string 이기 때문에 달라야 하지만 암묵적 형변환으로 인해 같다고 인식 따라서 != 두 식의 값이 다르면 참으로 나오는 것이기 때문에 값은 false 로 나옴


// 논리 연산자
let v1 = 10, v2 = 20, v3 = 30, v4 = 40, result;
result = !(v1 > v2);
// 10>20 -> 값은 false 이지만 !(not) 처리를 해뒀기 때문에 true
result = v1 > v2 && v2 <= v3;
// 논리곱 false 가 나옴 하나가 false 이기 때문에
result = v1 > v2 || v2 <= v3 || v3 <= v4;
// 논리합 true 가 나옴 하나가 true 이기 때문에
console.log(result);


// 삼항연산자, 조건부 연산자 : 주어진 조건의 참과 거짓에 따라 값을 선택
// 조건 ? 참 : 거짓 => 조건이 참이면 참에 들어있는 값 출력, 거짓이면 거짓에 들어있는 값 출력
result = v1 > v2 ? 'A' : 'B'; // B