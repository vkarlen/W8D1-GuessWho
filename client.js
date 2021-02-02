console.log('Here are all the available people:', people);

$(document).ready(onReady);

function onReady() {
  // console.log('lets go');
  shuffleName();

  for (person of people) {
    $('#imageContainer').append(`
    <div class="imgBlock" data-name=${person.name}><img 
    src="https://github.com/${person.githubUsername}.png?size=250" 
    alt="Profile image of ${person.name}"></div>`);
  }

  $('.imgBlock').on('click', checkClick);
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (1 + (people.length - 1) - 0) + 0);
}

function checkClick() {
  const personClicked = $(this).data('name');

  if (personClicked === $('#targetName').text()) {
    alert('You did it!');
    shuffleName();
  } else {
    alert('Try again!');
  }
}

function shuffleName() {
  $('#targetName').empty();
  $('#targetName').append(people[randomNumber()].name);
}
