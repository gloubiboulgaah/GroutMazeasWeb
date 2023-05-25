const changeBtn = document.getElementById('boutton_poppi');
const image = document.getElementById('poppi');

changeBtn.addEventListener('click', function() {
  if (image.src.includes('../images/poppi.jpg')) {
    image.src = '../images/surf.png';
    image.alt = 'Image 2';
  } else {
    image.src = '../images/poppi.jpg';
    image.alt = 'Image 1';
  }
});
