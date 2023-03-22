yourname = "Ayumi Akutagawa";
day = 06;
month = "OCT";
year = 1987;
birthday = "1987-10-06T00:00:00"

let now = new Date();
let today = now.getFullYear();

const yourage = document.querySelector("#age")
const lifeOf = document.querySelector('#lifeOf');

function counter() {
  yourage.textContent = `${((new Date() - new Date(birthday)) / 31557600000).toFixed(9)}`
}
function start() {
  setTimeout(() => { counter(); requestAnimationFrame(start); }, 1000 / 30);
}

start();

for (let i = 1; i <= today - year; i++) {
  const ageof = document.createElement('li');

  const thisyear = document.createElement('u');
  thisyear.innerHTML = year + i;


  const thisage = document.createElement("b");
  thisage.innerHTML = i-1 + " - " + i + " years old";

  lifeOf.appendChild(ageof);
  ageof.appendChild(thisyear);
  ageof.appendChild(thisage);
}

document.querySelector("#day").innerHTML = day
document.querySelector("#month").innerHTML = month
document.querySelector("#year").innerHTML = year
document.querySelector("#name").innerHTML = yourname
