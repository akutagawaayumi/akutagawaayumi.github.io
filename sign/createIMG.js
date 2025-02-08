'use strict'

const createBtn = document.querySelector("#saveImg");

function chengeMain() {
  document.querySelectorAll("main").forEach((eachMain) => {
    if (eachMain.hidden == false) {
      eachMain.hidden = true;
    } else {
      eachMain.hidden = false;
    };
  }, false);
};

const close = () => {
  createBtn.value = "Create IMG";
  chengeMain();
};

const open = () => {
  createBtn.value = "Close";
  let yourImg = document.querySelector("#sketch canvas").toDataURL()
  const yourSign = document.querySelector("#yourSign")
  yourSign.src = yourImg;
  chengeMain();
};

let sign = false;
createBtn.addEventListener("click", event => {
  sign ? close() : open()
  sign = !sign;
})
