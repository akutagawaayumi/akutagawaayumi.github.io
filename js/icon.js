'use strict'

let images = [
  "https://lh3.googleusercontent.com/pw/ADCreHcTzRz_3OCIF4aWaJjG23HDYGDAuZPqt7pdee4RYjGETu4eeJGElYvTE6FRZAHvpLIHzAKYrHnEdhNNKv0SgWTewS-z9vRMZB6MG5nL8grhWRDZ4nd9bL9d3yQEikC0FJO7jTD5dXbA3npJzpFqBTId=w1081-h811-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/ADCreHc4Y-DTC_gjTO8Z5Qjrbt6uVGsI5Ne816r0ediakmsXuxvTgrFzMe1u14nRb_BmiwJDEvYiFgWaQM4vuTKZXMZBy66spCwhwflOwEb-gUrnSiF0B2OLUlLpe7-Q2xo1dLnanAlXRIlA3Z1GiD1E7n14=w1081-h811-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/ADCreHdMcP_1ZepU6846ewq-ZbuwUuR9R3ad6HNBbLcZD3ve4YkCv7Yqix2tWdfrTPYOKJtyuGV6GCKrRd3td8g9nZH-3D4FFbBWVFqxAdOoehlwWquhfxNcklwlUKActz9tM6Lf61QlqqmJJ_3DCWQhZjZw=w608-h811-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/ADCreHd6im08Bx8u7-D-rFOj-_1tjQ29SwWVlJUzpH8C60CVmDP0RW1bE_k4sLEtp0N7yCH_LknQMJ_EWlIB7wL5e4wNRbgXw57oO3cZl1XUmx3JLANgB6kB0Df640oqwCm_Mf8Ly_V6OJyOhPyuMz9GsU7E=w608-h811-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/ADCreHc4qfMjB7mRrEGEGTLXeRKW3LNvvj8z_l7-h4oukmFDl1YgyTxUYgLhQ5xn8xgtw-2eJvsmDCzok0gExONTK-EGZErW6iiNE1GA-AgrV6pA4qmYA0aYAkeKeunkWlRX5LipMkm5fn-3AQG8C4GM_rZ8=w608-h811-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/ADCreHeIlJldZTdkg6Gsxb_x-6gPM8v6Ztj3Ktipeqxc0s6ZmKAznJll_snec_PonC2i1jrqwIFIP-2_4stCojW_XgB8BttWeyueT5JQxLvDIgsX9E95OevdTC6U7Wkhaqb6k4jggxG4wAIU5QSd26nxUcTE=w1081-h811-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/ADCreHcClrkHWsaoC0ypfTXUbUC7pM3M2tFDW726bWuF59vCfLpfRJqm4EwHk_3Z8_atgpnT7VWdTYXUwPnQZCIUZ4ljBMOhPa2VXq8oS2OEVz00JBYYbLRZ5B2AMpALQ1d90-ordmttABlte64gQwA8n77l=w608-h811-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/ADCreHeYCYrk0O_TOgt3L0JS6duqqYGJkG4VsvULptW4pPEOYQpdP9UCycXuJ6NOlo1yIZw-hJe8J7gVFnBK_wbMrSISkAhaMjdJ_xuIIVozgcPJ4H7jy-yzN1i-3HLP9Y-5YsvSe_bFpURNFIgyAux-MQ9p=w608-h811-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/ADCreHcNXIu-LdS3ygKRp5txQcnORl0QOHnFz67veRPZrf8IEx6datqYdeBLf91JKUszdQ5wznn0H4bhYPBhrzKC5LbnN3ia_i4-URhdU8_2VOwR1W08Ybu_4Ybjd3Tdvf9XMcRQtcxAyIWuw-_QZFXLHwcG=w608-h811-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/ADCreHfGoogOU_HYaihdbMzGQMyncki8AKQ2liOU-Z2vewf7hfE4f1yHWOthjcSgZXPKZf46aqzv2sORS0H6V21BRXzgrJw5sHKziGIDCi80C6s5OaNMDbMckd7KVyAE_AHNOMZ_CUC0BfEQwvXTbOyaS_Xs=w608-h811-s-no-gm?authuser=0",
]

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
  document.body.style.backgroundImage = `url(${src[0]})`
});
