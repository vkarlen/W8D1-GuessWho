console.log('Here are all the available people:', people);

$(document).ready(onReady);

function onReady() {
  // console.log('lets go');
  shuffleName();
  // console.log(people);
  // console.log(shufflePhotos(people));
  // console.log(people);
  // console.log(shufflePhotos(people));

  for (person of people) {
    $('#imageContainer').append(`
    <div class="imgBlock" data-name=${person.name}><img 
    src="https://github.com/${person.githubUsername}.png?size=150" 
    alt="Profile image of ${person.name}"></div>`);
  }

  $('.imgBlock').on('click', checkClick);
}

function randomNumber() {
  return Math.floor(Math.random() * (1 + (people.length - 1) - 0) + 0);
}

function checkClick() {
  const personClicked = $(this).data('name');

  if (personClicked === $('#targetName').text()) {
    //alert('You did it!');
    $('#targetContainer').css('color', '#014701');
    $('#targetContainer').css('background-color', '#4eb34e');
    setTimeout(function () {
      $('#targetContainer').css('color', '');
      $('#targetContainer').css('background-color', '');
      shuffleName();
    }, 1500);
    // 3 seconds was just way too long so i lowered it to 1.5
  } else {
    //alert('Try again!');
    'color', 'red';
    console.log('no');
    $('#targetContainer').css('color', '#9c0000');
    $('#targetContainer').css('background-color', '#fd5959');
    setTimeout(function () {
      $('#targetContainer').css('color', '');
      $('#targetContainer').css('background-color', '');
    }, 1500);
  }
}

function shuffleName() {
  $('#targetName').empty();
  $('#targetName').append(people[randomNumber()].name);
}

function shufflePhotos(array) {
  // make an array out of the indexes of the array
  const newOrder = [];

  // run a for loop. on each loop, math.random() returns a number 0-i
  for (i = oldOrder.length - 1; i >= 0; i--) {
    // randomly select one index from the current array
    num = Math.floor(Math.random() * (i - 0 + 1) + 0);

    // push the photo info at that index to the a new array
    newOrder.push(oldOrder[num]);

    // remove pushed photo info
    oldOrder.splice(num, 1);
  }

  return newOrder;
}
