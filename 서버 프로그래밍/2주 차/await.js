async function init() {
    try {
        const response = await fetch('https://api.github.com/users/toosign00');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const user = await response.json();
        console.log(user);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

init();