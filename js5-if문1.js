// 조건문 - if 문 : 조건식이 참이면 문장을 실행, 거짓이면 문장 실행 안하고 점프하고 끝

/*
if() 문장
if() {
    문장
}
어떤 걸 써도 괜찮음
*/

let userId = 'whj001'

if (userId === 'whj001') { // userId 가 'whj001' 와 타입까지 같다면

    /* console.log(userId+'방문해 주셔서 감사합니다.') */
    console.log(`${userId}방문해 주셔서 감사합니다.`)
    // `방문~` 출력

} else {
    console.log(`잘못된 아이디입니다`)
}
// else : 유저 아이디가 'whj001' 가 아니면 `잘못~` 출력