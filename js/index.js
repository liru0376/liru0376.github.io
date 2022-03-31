function button1CLicked() {
  document.getElementById('button-1').classList.toggle('was-clicked');
}

function button2CLicked() {
  document.getElementById('button-2').classList.toggle('was-clicked');
}

console.log('loaded');
function windowLoaded() {
  console.log('loaded');

  document.getElementById('button-1').addEventListener('click', button1CLicked);
  document.getElementById('button-2').addEventListener('mouseover', button2CLicked);





/**
  * mouseover
  * mousedown
  * mouseup
  */


}

window.onload = windowLoaded;
