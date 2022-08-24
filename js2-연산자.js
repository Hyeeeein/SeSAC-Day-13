let num1 = 20;
let num2 = 3;

console.log(num1 + num2)

// 단항연산자
num2 = -num2; // -3
num2 = +num2; // +(-3)
console.log(num2)

// 증가연산자
let num3 = 10;
console.log(++num3); //11
console.log(++num3); //12
console.log(--num3); //11
console.log(num3++); //11
console.log(num3++); //12
console.log(num3); //13

let a = 1;
let b = ++a; //2 , a=2 가 됨 a 에 선행 연산 처리됐기 때문
let c = a++ + 2;

console.log(a)
console.log(b)
console.log(c)
console.clear() // 콘솔 삭제

//대입연산자 : a += 10 -> a = a + 10 따라서 console.log(a) 의 값은 a+10 그리고 다음 연산을 할 때는 증가 연산자나 감소 연산자처럼 출력된 값을 a 값으로 사용
let value1 = 1;
value1 *= 10;
console.log(value1)
value1 *= 10;
console.log(value1)
value1 %= 10;
console.log(value1)
// 연습
let prac = 9;
prac += 3;
console.log(prac) // 9+3=12 
prac -= 5;
console.log(prac) // 12-5=7
prac *= 10;
console.log(prac) // 7*10=70
prac /= 2;
console.log(prac) // 70/2=35
prac %= 4;
console.log(prac) // 35%4=3






