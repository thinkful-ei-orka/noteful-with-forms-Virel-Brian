'use strict';
let breed = '';

function getDogPics(breed) {
  fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then((r) => r.json())
    .then((data) => showBreed(data))
    .catch((error) => console.log(error.message));
}

function showBreed(data) {
  console.log(data);
  console.log(data.message);
  let imgURL = data.message;
  console.log(imgURL);
  $('.random-image').html(`<img src="${imgURL}">`);
}

function waitForBreed() {
  $('form').submit((e) => {
    e.preventDefault();
    // $('.random-image').html('');
    console.log(e.currentTarget[0].value);
    breed = e.currentTarget[0].value;
    getDogPics(breed);
  });
}

function render() {
  console.log('Site is up! Input a breed!');
  waitForBreed();
}

$(render);
