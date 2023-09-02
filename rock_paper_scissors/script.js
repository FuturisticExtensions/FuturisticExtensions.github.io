function winorlose() {
    if (Math.floor(Math.random() * 2) === 1) {
        document.getElementById('winorlose').innerHTML = 'You Win!';
    } else {
        document.getElementById('winorlose').innerHTML = 'You Lose!';
    }
}