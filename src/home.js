function createHome() {
  const home = document.createElement('div');
  home.classList.add('home');

  const bakeryImage = document.createElement('img');
  bakeryImage.src = '/home/brirrito/the_odin_project/RestaurantPage/bakery.jpg';
  bakeryImage.alt = 'bakery';

  home.appendChild(createParagraph('Flour, butter, sugar.'));
  home.appendChild(bakeryImage);

  return home;
}

function createParagraph(text) {
  const paragraph = document.createElement('p');
  paragraph.textContent = text;
  return paragraph;
}

function loadHome() {
  const main = document.getElementById('main');
  main.textContent = '';
  main.appendChild(createHome());
}

export default loadHome();