birthday = "1987-10-06"

function counter() {
    age.textContent = `${((new Date() - new Date(birthday)) / 31557600000).toFixed(9)}`
}
function start() {
    setTimeout(() => { counter(); requestAnimationFrame(start); }, 1000 / 30);
}

const age = document.getElementById("age")
start();
