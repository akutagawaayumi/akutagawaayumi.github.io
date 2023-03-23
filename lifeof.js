name = "Ayumi Akutagawa";
year = 1987;
month = "10";
mstand = "OCT";
date = "06";
time = "00:00:00";

const birthday = `${year}-${month}-${date}T${time}`;

let now = new Date();
let today = now.getFullYear();

const age = document.querySelector("#age")
const lifeOf = document.querySelector('#lifeOf');

document.addEventListener('readystatechange', event => {

  if (event.target.readyState === 'loading') {
    // 文書の読み込み中に実行する
  }

  else if (event.target.readyState === 'interactive') {
    document.querySelector("#day").innerHTML = date
    document.querySelector("#month").innerHTML = mstand
    document.querySelector("#year").innerHTML = year
    document.querySelector("#name").innerHTML = name

    function counter() {
      age.textContent = `${((new Date() - new Date(birthday)) / 31557600000).toFixed(9)}`
    }
    
    function start() {
      setTimeout(() => {
        counter(); requestAnimationFrame(start);
      }, 1000 / 30);
    }

    start();
  }

  else if (event.target.readyState === 'complete') {

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

  }
});
