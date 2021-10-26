function createContact() {
  const contact = document.createElement('div');
  contact.classList.add('contact');

  const phoneNumber = document.createElement('p');
  phoneNumber.textContent = '📞 999 999 9999';

  const address = document.createElement('p');
  address.textContent = '🏠 1052 Thomas Jefferson St, Washington DC 20007';

  const location = document.createElement('img');
  location.src = '/home/brirrito/the_odin_project/RestaurantPage/images/restaurantlocation.png';
  location.alt = 'Restaurant Location'

  contact.appendChild(phoneNumber);
  contact.appendChild(address);
  contact.appendChild(location);

  return contact;
}

function loadContact() {
  const main = document.getElementById('main')
  main.textContent = ''
  main.appendChild(createContact())
}

export default loadContact;