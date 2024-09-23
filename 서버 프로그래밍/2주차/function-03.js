// 함수 선언과 동시에 실행
(function (a, b) {
    console.log(`두수의 합은 ${a + b}입니다.`);
})(100, 200);


// 함수 표현식
let hi = function () {
    return "안녕하세요";
}

console.log(hi());
