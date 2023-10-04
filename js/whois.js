'use strict'

const date_of_birth = document.querySelector('#data time').getAttribute("datetime")

function counter() {
    const age = document.querySelector("#age");
    age.textContent = ((new Date() - new Date(date_of_birth)) / 31557600000).toFixed(9);
}

function start() {
    setTimeout(() => {
        counter();
        requestAnimationFrame(start);
    }, 1000 / 30);
}
start()
