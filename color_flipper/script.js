function newColor() {
    random = Math.floor(Math.random() * 5) + 1;
    if (random === 1) {
        document.body.style.backgroundColor = 'red';
        document.getElementById('bgColor').innerHTML = 'Red';
    }
    if (random === 2) {
        document.body.style.backgroundColor = 'orange';
        document.getElementById('bgColor').innerHTML = 'Orange';
    }
    if (random === 3) {
        document.body.style.backgroundColor = 'yellow';
        document.getElementById('bgColor').innerHTML = 'Yellow';
    }
    if (random === 4) {
        document.body.style.backgroundColor = 'lime';
        document.getElementById('bgColor').innerHTML = 'Green';
    }
    if (random === 5) {
        document.body.style.backgroundColor = 'dodgerBlue';
        document.getElementById('bgColor').innerHTML = 'Blue';
    }
}