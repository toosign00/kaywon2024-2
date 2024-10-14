let speedControl = document.querySelector('#speedControl');
let rainbowColors = document.querySelectorAll('.rainbow-color');
let sun = document.querySelector('.sun');

speedControl.addEventListener('input', () => {
    let value = speedControl.value;
    let reversedSpeed = (parseInt(speedControl.max) - parseInt(value)) + parseInt(speedControl.min);
    console.log(reversedSpeed);
    // range의 value 값을 반대로 바꾸는 방법은 gpt 활용
    rainbowColors.forEach((color) => {
        color.style.animationDuration = `${reversedSpeed}s`;
    });
    sun.style.animationDuration = `${reversedSpeed}s`;
});

sun.addEventListener('click', () => {
    sun.classList.toggle('big');
});