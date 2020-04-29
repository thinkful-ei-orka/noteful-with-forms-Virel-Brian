'use strict';

//Render function that renders the given input

//API call function

/* function to display number of dogs

function takes in the JSON reponse and console logs it


*/
let numOfDogPics = 3;
function getDogPics(numOfDogPics) {
  fetch(`https://dog.ceo/api/breeds/image/random/${numOfDogPics}`)
    .then((r) => r.json())
    .then((data) => showDogs(data));
}

function showDogs(data) {
  console.log(data);
  console.log(data.message);
  let imgURL = data.message;
  console.log(imgURL);
  /*handleImgHTML(imgURL);*/
  data.message.forEach((element) => {
    console.log(element);

    $('.image-group').append(`<img src="${element}">`);
  });

  $('.image-group').removeClass('hidden');
  //   for (let i = 0; i < numOfDogPics; i++) {
  //     $('.image-group').replaceWith(`<img src="${imgURL[i]}">`);
  //   }
}

function waitForDogs() {
  $('form').submit((e) => {
    e.preventDefault();
    $('.image-group').html('');
    console.log(e.target[0].value);
    numOfDogPics = e.target[0].value;
    getDogPics(numOfDogPics);
  });
}

/*function handleImgHTML(imgURL) {
  for (let i = 0; i < numOfDogPics; i++) {
    $('.image-group').append(`<img src="${imgURL[i]}">`);
  }
  // html += `<img src="${imgURL}">`
}*/

function render() {
  console.log('Site is up! Input a number!');
  waitForDogs();
}

$(render);
