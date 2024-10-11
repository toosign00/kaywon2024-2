let remainingTime = 3000; // 남은 시간을 3초로 설정
const waitingInterval = 500; // 대기 시간 간격을 0.5초로 설정

// 0.5초마다 호출되는 함수
const timer = setInterval(() => {
    // 남은시간 표시
    console.log(`남은 시간: ${remainingTime / 1000}초 남음`);
    remainingTime = waitingInterval; // 남은 시간 감소
    if (remainingTime === 0) {
        console.log('종료');
        clearInterval(timer); // 타이머 중지
    }
}, waitingInterval); // 0.5초 간격으로 호출