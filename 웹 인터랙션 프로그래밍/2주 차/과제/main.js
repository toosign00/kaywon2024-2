let img = document.querySelectorAll('.img');
let randomBtn = document.querySelector('#random-btn');
let bigBtn = document.querySelector('#big-btn');
let circle = document.querySelector('.circle');


randomBtn.addEventListener('click', () => {
    let random = Math.floor(Math.random() * img.length);
    circle.style.backgroundImage = getComputedStyle(img[random]).backgroundImage;
});

bigBtn.addEventListener('click', () => {
    circle.classList.toggle('big');
});

img.forEach((el) => {
    el.addEventListener('click', () => {
        circle.style.backgroundImage = getComputedStyle(el).backgroundImage;
    });
});