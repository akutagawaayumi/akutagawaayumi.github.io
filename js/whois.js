'use strict'

async function whoisJson(requestURL) {
  const request = new Request(requestURL);
  const response = await fetch(request);
  const jsonIndex = await response.text();

  const index = JSON.parse(jsonIndex);
  whois(index);
  lifeof(index);
}

function whois(obj) {
  const yourname = obj.name;
  const email = obj.email;

  const author = document.querySelector('#whois span');
  author.textContent = yourname;
  author.addEventListener('click', function () {
    author.className = author.className === "name" ? "email" : "name";
    author.textContent = author.textContent === yourname ? email : yourname;
  });

  const date_of_birth = obj.date_of_birth;
  const datetime = obj.datetime;

  let thisYear = new Date().getFullYear();
  let thisMonth = new Date().getMonth();
  let thisDate = new Date().getDate();
  let thisAge = ((new Date() - new Date(datetime)) / 31557600000).toFixed(0);

  const birth = document.querySelector("#whois time");
  const age = document.querySelector("#whois .age");
  birth.textContent = date_of_birth;

  const birthday = new Date(date_of_birth);
  const week = birthday.getDay();
  const month = birthday.getMonth();
  const date = birthday.getDate();

  if (thisMonth === month & thisDate == date) {
    const whois = document.querySelector("#whois");
    const h3 = document.createElement("h3");
    h3.innerHTML = "It's My Birthday";
    whois.appendChild(h3);
  }

  birth.addEventListener('click', function () {
    let thisDay
    if (week == 0) {
      thisDay = "<small>日曜日</small> Sunday"
    } else if (week == 1) {
      thisDay = "<small>月曜日</small> Monday"
    } else if (week == 2) {
      thisDay = "<small>火曜日</small> Tuesday"
    } else if (week == 3) {
      thisDay = "<small>水曜日</small> Wednesday"
    } else if (week == 4) {
      thisDay = "<small>木曜日</small> Thursday"
    } else if (week == 5) {
      thisDay = "<small>金曜日</small> Friday"
    } else if (week == 6) {
      thisDay = "<small>土曜日</small> Saturday"
    }

    birth.innerHTML = birth.innerHTML === date_of_birth ? thisDay : date_of_birth;
  })

  function counter() {
    age.textContent = ((new Date() - new Date(datetime)) / 31557600000).toFixed(9);
  }

  function start() {
    setTimeout(() => { counter(); requestAnimationFrame(start); }, 1000 / 30);
  }

  start()

  const lifeof = document.querySelector('#lifeOf');
  for (let i = 0; i <= thisAge; i++) {
    const eachAge = document.createElement('li');
    eachAge.setAttribute('data-year', thisYear - i);
    lifeof.appendChild(eachAge);
    if (i == thisAge) {
      eachAge.innerHTML = `
      <p>
      <i>0</i>
      <u>${thisYear - i}</u>
      </p>
      `;

    } else {
      eachAge.innerHTML = `
      <p>
      <i>${thisAge - i - 1} ~ ${thisAge - i}</i>
      <u>${thisYear - i}</u>
      </p>
      `;
    }
  }
}

function lifeof(obj) {
  if (obj.lifeof == true) {
    const contentAll = obj.contents;

    for (const content of contentAll) {
      const yearOf = document.querySelector(`li[data-year="${content.year}"]`);
      const thisLife = document.createElement('p');
      thisLife.innerHTML = content.html;
      yearOf.appendChild(thisLife);
    }
  }
}
