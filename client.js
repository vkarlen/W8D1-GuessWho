console.log('Here are all the available people:', people);

$(document).ready(onReady);

function onReady() {
  // console.log('lets go');
  shuffleName();

  $(document).on('click', '.imgBlock', checkClick);
} // end onReady

function checkClick() {
  const personClicked = $(this).data('name');

  if (personClicked === $('#targetName').text()) {
    // alert('You did it!');
    $('#targetContainer').css('color', '#014701');
    $('#targetContainer').css('background-color', '#4eb34e');
    setTimeout(function () {
      $('#targetContainer').css('color', '');
      $('#targetContainer').css('background-color', '');
      shuffleName();
    }, 2000);
  } else {
    // alert('Try again!');
    $('#targetContainer').css('color', '#9c0000');
    $('#targetContainer').css('background-color', '#fd5959');
    setTimeout(function () {
      $('#targetContainer').css('color', '');
      $('#targetContainer').css('background-color', '');
    }, 2000);
  }
} // end checkClick

function randomNumber() {
  return Math.floor(Math.random() * (1 + (people.length - 1) - 0) + 0);
} // end randomNumber

function renderPhotos() {
  // empty DOM
  $('#imageContainer').empty();

  // loop through array and render each photo
  for (person of people) {
    $('#imageContainer').append(`
    <div class="imgBlock" data-name=${person.name}><img 
    src="https://github.com/${person.githubUsername}.png?size=165" 
    alt="Profile image of ${person.name}"></div>`);
  }
} // end renderPhotos

function shuffleName() {
  // empty DOM and display new search name
  $('#targetName').empty();
  $('#targetName').append(people[randomNumber()].name);

  // shuffle new order
  shuffleOrder();
} // end shuffleName

function shuffleOrder() {
  // run a for loop. on each loop, math.random() returns a number 0-i
  for (i = people.length - 1; i >= 0; i--) {
    // randomly select one index from the current array
    num = Math.floor(Math.random() * (i - 0 + 1) + 0);

    // shuffle index positions with new num
    let temp = people[i];
    people[i] = people[num];
    people[num] = temp;
  }

  // render new order
  renderPhotos();
} // end shuffleOrder
