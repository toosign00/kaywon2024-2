// 익명함수 생성 후 곧바로 호출
(function() {
    console.log(this);
})();

// 화살표 함수 생성 후 곧바로 호출
(() => {
    console.log(this);
})();