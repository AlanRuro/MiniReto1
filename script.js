const track = document.querySelector('.carousel-inner');
const aButton = document.querySelector('#button-a');
const bButton = document.querySelector('#button-b');

aButton.addEventListener('click', e => {
  const currentSlide = track.querySelector('.active');
  const currentImg = currentSlide.querySelector('.img-fluid');
  //window.location.href = 'https://listado.mercadolibre.com.mx/' + currentSlide.id
  window.open('https://listado.mercadolibre.com.mx/' + currentImg.alt);
});

bButton.addEventListener('click', e => {
  const currentSlide = track.querySelector('.active');
  const currentImg = currentSlide.querySelector('.img-fluid');
  window.open('https://es.wikipedia.org/wiki/' + currentImg.alt);
});

function loadHtml() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.write(this.responseText);
  };
  xhttp.open("GET", "aboutMe.html");
  xhttp.send();
}