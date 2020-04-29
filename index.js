'use strict';

//Render function that renders the given input

//API call function

/* function to display number of dogs

function takes in the JSON reponse and console logs it


*/
let numOfDogPics = 3;
function getDogPics(num) {
  fetch(`https://dog.ceo/api/breeds/image/random/${num}`)
    .then((r) => r.json())
    .then((data) => showDogs(data));
}

function showDogs(data) {
  console.log(data);
  console.log(data.message);
  let imgURL = data.message;
  console.log(imgURL);
  handleImgHTML(imgURL);
}

function waitForDogs() {
  $('form').submit((e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    getDogPics(numOfDogPics);
  });
}

function handleImgHTML(imgURL) {
  for (let i = 0; i < numOfDogPics; i++) {
    $('.image-group').append(`<img src="${imgURL[i]}">`);
  }
  // html += `<img src="${imgURL}">`
}

function render() {
  console.log('Site is up! Input a number!');
  waitForDogs();
}

$(render);
