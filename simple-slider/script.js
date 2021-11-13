let offset = 0;
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.next').addEventListener('click', function() {
  offset = offset + 600;
  if (offset > 3000) {
    offset = 0;
  }
  sliderLine.style.left = -offset + 'px';

});

document.querySelector('.prev').addEventListener('click', function() {
  offset = offset - 600;
  if (offset < 0) {
    offset = 3000;
  }
  sliderLine.style.left = -offset + 'px';

});