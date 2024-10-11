let likePizza = true;

const pizza = new Promise((resolve, reject) => {
    if (likePizza) {
        resolve("피자를 주문합니다.");
    } else {
        reject("피자를 주문하지 않습니다.");
    }
});

// Promise의 결과를 처리
pizza
    .then(result => {
        console.log(result); // Promise가 해결된 경우 출력
    })
    .catch(err => {
        console.log(err); // Promise가 거부된 경우 출력
    });
