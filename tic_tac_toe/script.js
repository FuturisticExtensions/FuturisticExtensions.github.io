let turn = 'x';
let isGameOver = false;
document.getElementsByClassName('gameOverBox')[0].innerHTML = 'It\'s ' + turn.toUpperCase() + '\'s turn';

function box(number) {
    if (!isGameOver) {
        if (turn === 'x' && document.getElementsByClassName(number)[0].innerHTML === '')  {
            document.getElementsByClassName(number)[0].innerHTML = 'X';
            turn = 'o';
            document.getElementsByClassName('gameOverBox')[0].innerHTML = 'It\'s ' + turn.toUpperCase() + '\'s turn';
        } else if (turn === 'o' && document.getElementsByClassName(number)[0].innerHTML === '') {
            document.getElementsByClassName(number)[0].innerHTML = 'O';
            turn = 'x';
            document.getElementsByClassName('gameOverBox')[0].innerHTML = 'It\'s ' + turn.toUpperCase() + '\'s turn';
        }
    
        checkForWinner();
    }
}

function checkForWinner() {
    if (document.getElementsByClassName('1')[0].innerHTML === 'X' || document.getElementsByClassName('1')[0].innerHTML === 'O') {
        if (document.getElementsByClassName('2')[0].innerHTML === 'X' || document.getElementsByClassName('2')[0].innerHTML === 'O') {
            if (document.getElementsByClassName('3')[0].innerHTML === 'X' || document.getElementsByClassName('3')[0].innerHTML === 'O') {
                if (document.getElementsByClassName('4')[0].innerHTML === 'X' || document.getElementsByClassName('4')[0].innerHTML === 'O') {
                    if (document.getElementsByClassName('5')[0].innerHTML === 'X' || document.getElementsByClassName('5')[0].innerHTML === 'O') {
                        if (document.getElementsByClassName('6')[0].innerHTML === 'X' || document.getElementsByClassName('6')[0].innerHTML === 'O') {
                            if (document.getElementsByClassName('7')[0].innerHTML === 'X' || document.getElementsByClassName('7')[0].innerHTML === 'O') {
                                if (document.getElementsByClassName('8')[0].innerHTML === 'X' || document.getElementsByClassName('8')[0].innerHTML === 'O') {
                                    if (document.getElementsByClassName('9')[0].innerHTML === 'X' || document.getElementsByClassName('9')[0].innerHTML === 'O') {
                                        gameOver();
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    if (document.getElementsByClassName('1')[0].innerHTML === 'X' && document.getElementsByClassName('2')[0].innerHTML === 'X' && document.getElementsByClassName('3')[0].innerHTML === 'X' || document.getElementsByClassName('1')[0].innerHTML === 'O' && document.getElementsByClassName('2')[0].innerHTML === 'O' && document.getElementsByClassName('3')[0].innerHTML === 'O') {
        gameOver();
    }
    if (document.getElementsByClassName('4')[0].innerHTML === 'X' && document.getElementsByClassName('5')[0].innerHTML === 'X' && document.getElementsByClassName('6')[0].innerHTML === 'X' || document.getElementsByClassName('4')[0].innerHTML === 'O' && document.getElementsByClassName('5')[0].innerHTML === 'O' && document.getElementsByClassName('6')[0].innerHTML === 'O') {
        gameOver();
    }
    if (document.getElementsByClassName('7')[0].innerHTML === 'X' && document.getElementsByClassName('8')[0].innerHTML === 'X' && document.getElementsByClassName('9')[0].innerHTML === 'X' || document.getElementsByClassName('7')[0].innerHTML === 'O' && document.getElementsByClassName('8')[0].innerHTML === 'O' && document.getElementsByClassName('9')[0].innerHTML === 'O') {
        gameOver();
    }
    if (document.getElementsByClassName('1')[0].innerHTML === 'X' && document.getElementsByClassName('4')[0].innerHTML === 'X' && document.getElementsByClassName('7')[0].innerHTML === 'X' || document.getElementsByClassName('1')[0].innerHTML === 'O' && document.getElementsByClassName('4')[0].innerHTML === 'O' && document.getElementsByClassName('7')[0].innerHTML === 'O') {
        gameOver();
    }
    if (document.getElementsByClassName('2')[0].innerHTML === 'X' && document.getElementsByClassName('5')[0].innerHTML === 'X' && document.getElementsByClassName('8')[0].innerHTML === 'X' || document.getElementsByClassName('2')[0].innerHTML === 'O' && document.getElementsByClassName('5')[0].innerHTML === 'O' && document.getElementsByClassName('8')[0].innerHTML === 'O') {
        gameOver();
    }
    if (document.getElementsByClassName('3')[0].innerHTML === 'X' && document.getElementsByClassName('6')[0].innerHTML === 'X' && document.getElementsByClassName('9')[0].innerHTML === 'X' || document.getElementsByClassName('3')[0].innerHTML === 'O' && document.getElementsByClassName('6')[0].innerHTML === 'O' && document.getElementsByClassName('9')[0].innerHTML === 'O') {
        gameOver();
    }
    if (document.getElementsByClassName('1')[0].innerHTML === 'X' && document.getElementsByClassName('5')[0].innerHTML === 'X' && document.getElementsByClassName('9')[0].innerHTML === 'X' || document.getElementsByClassName('1')[0].innerHTML === 'O' && document.getElementsByClassName('5')[0].innerHTML === 'O' && document.getElementsByClassName('9')[0].innerHTML === 'O') {
        gameOver();
    }
    if (document.getElementsByClassName('7')[0].innerHTML === 'X' && document.getElementsByClassName('5')[0].innerHTML === 'X' && document.getElementsByClassName('3')[0].innerHTML === 'X' || document.getElementsByClassName('7')[0].innerHTML === 'O' && document.getElementsByClassName('5')[0].innerHTML === 'O' && document.getElementsByClassName('3')[0].innerHTML === 'O') {
        gameOver();
    }
}

function gameOver() {
    document.getElementsByClassName('gameOverBox')[0].innerHTML = 'Game Over!' + '<br>' + '<a href="index.html">Click Here To Restart</a>';
    isGameOver = true;
}