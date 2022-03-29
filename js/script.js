const para = document.querySelector('p');

para.addEventListerner('click', updateName);

function updateName () {
  const name = prompt('Enter a new name');
  para.textContent = `Player 1: ${name}`;
}
