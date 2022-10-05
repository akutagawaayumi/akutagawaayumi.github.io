yourname = "Ayumi Akutagawa";

day = 06;
month = "OCT";
year = 1987;


let now = new Date();
let today = now.getFullYear();

const lifeOf = document.getElementById('lifeOf');
const you = document.createDocumentFragment();

for (let yourage = 1; yourage < today - year; yourage++) {
    const the = document.createElement('li');

    const thisyear = document.createElement('u');
    thisyear.innerHTML = year + yourage;

    const thisage = document.createElement("i");
    thisage.innerHTML = yourage + " years old";

    you.appendChild(the);
    the.appendChild(thisyear);
    the.appendChild(thisage);
}

lifeOf.appendChild(you);

document.getElementById("name").innerHTML = yourname
document.getElementById("day").innerHTML = day
document.getElementById("month").innerHTML = month
document.getElementById("year").innerHTML = year
