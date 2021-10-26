function createMenu() {
  const menu = document.createElement('div');
  menu.classList.add('menu'); 

  menu.appendChild(
    createMenuItem(
      'Everyday Breads',
      'Baguette / Country Sourdough / Whole Wheat Sourdough / Seeded Wheat Sourdough / Quinoa-Turmeric Sourdough / Pain de Mie / Tomato Rosemary Focaccia'
    )
  );

   menu.appendChild(
     createMenuItem(
       'Cupcakes',
       'Unicorn & Rainbow / Vanilla Satin / Dirty Chai / Chocolate Doom'
     )
   );

   menu.appendChild(
     createMenuItem(
       'Pies',
       'Apple Doublecrust / Chocolate Oat Caramel / Peach Cream / Key Lime'
     )
   );

   menu.appendChild(
     createMenuItem(
       'Cakes',
       'German Chocolate / Lemon / Vanilla Latte / Vegan Oreo'
     )
   );

   menu.appendChild(
     createMenuItem(
       'Other Goodies',
       'Phig Newton / Rice Krispie Treat / Raspberry Crunch Bar'
     )
   );

   menu.appendChild(
     createMenuItem(
       'Breakfast',
       'Whole Quiche / Hippie Granola with Fruit / Hippie Granola without Fruit'
     )
   );

   return menu;
}

function createMenuItem(category, items) {
  const menuItem = document.createElement('div');
  menuItem.classList.add('menu-item');

  const categoryName = document.createElement('h2');
  categoryName.textContent = category;

  const itemDescription = document.createElement('p');
  itemDescription.textContent = items;

  menuItem.appendChild(categoryName);
  menuItem.appendChild(itemDescription);

  return menuItem;
}

function loadMenu() {
  const main = document.getElementById('main');
  main.textContent = '';
  main.appendChild(createMenu());
}

export default loadMenu;