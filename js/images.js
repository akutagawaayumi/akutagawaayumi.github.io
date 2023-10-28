'use strict'

function shuffle(arrays) {
  const array = arrays.slice();
  for (let i = array.length - 1; i >= 0; i--) {
    const shuffleArr = Math.floor(Math.random() * (i + 1));
    [array[i], array[shuffleArr]] = [array[shuffleArr], array[i]];
  }
  return array;
}

document.addEventListener('DOMContentLoaded', function () {
  const src = shuffle(images)
  const icons = document.querySelectorAll('#android, #ios, #ogImg, #twitterImg');
  for (const icon of icons) {
    icon.href = src[0]
  }

  function randomImg(randomArray) {
    var random =
      randomArray[Math.floor(Math.random() * randomArray.length)];
    return random;
  }
  
  const whois = document.querySelector("#whois")
  function randomBG() {
    whois.style.backgroundImage = `url(${randomImg(images)})`
  }
  
  window.setInterval(function () {
    randomBG();
  }, 2500);

  randomBG();
});
