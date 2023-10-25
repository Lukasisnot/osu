const point = document.getElementById("point");
const startBtn = document.getElementById("startBtn");
let gameInterval;

startBtn.onclick = () => {
    startGameInterval(point);
    hideElement(startBtn);
}

const hideElement = (element) => {
    element.style.display = "none";
}

const moveElement = (element, x, y) => {
    element.style.left = `${x}px`;
    element.style.top = `${y}px`;
}

const getRandNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const startGameInterval = (element) => {
    clearInterval(gameInterval);
    gameInterval = setInterval(() => {
    moveElement(element, getRandNum(50, 1300), getRandNum(50, 600));
}, 20)
}