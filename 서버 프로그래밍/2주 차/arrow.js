// 화살표 함수
let hello = () => {
    return "반갑다";
}
console.log(hello());

// 화살표 함수를 좀 더 간단하게 
let hi = () => "안녕하세요";
console.log(hi());

// 매개변수가 있는 화살표 함수
// 함수 표현식
let sum = function (a, b) {
    return a + b;
}
console.log(sum(100, 200));


// 화살표 함수
let sum2 = (a, b) => {
    return a + b;
}
console.log(sum2(100, 200));

// 화살표 함수를 좀 더 간단하게
let sum3 = (a, b) => a + b;
console.log(sum2(100, 200));