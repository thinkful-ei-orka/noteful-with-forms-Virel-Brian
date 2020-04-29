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
    .then((data) => showDogs(data))
    .catch((error) => alert('Something went wrong!'));
}

function showDogs(data) {
  console.log(data);
  console.log(data.message);
  let imgURL = data.message[0];
  handleImgHTML();
}

function waitForDogs() {
  $('form').submit((e) => {
    e.preventDefault();
    numOfDogPics = e;

    getDogPics(numOfDogPics);
  });
}

function handleImgHTML() {
  for (let i = 0; i < numOfDogPics; i++) {
    $('.image-group').append(`<img src="${imgURL[i]}">`);
  }
}

$(function () {
  console.log('Site is up! Input a number!');
  waitForDogs();
});
