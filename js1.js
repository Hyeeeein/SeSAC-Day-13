// 객체는 참조타입

let a = 1;
let b = 2;
let c = {
    name: 'lee',
    age: 30,
    address: 'busan'
}

let d = a;
console.log(a)
let e = c;

// a 를 10 으로 바꾸고 d 를 출력해보면 1 이 됨 a 의 값만 바꼈기 때문에 d 는 a 의 원래 값을 출력
a = 10
console.log(a)
console.log(d)

let f = c;
console.log(f)

// 객체 c 의 프로퍼티를 50 으로 바꾸고 f 를 출력해보면 f 의 값도 함께 바껴있음 
c.age = 50;

console.log(c)
console.log(f)