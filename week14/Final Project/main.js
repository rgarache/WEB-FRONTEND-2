const menu = [
  {
    id: 1,
    title: "El Nicafit",
    category: "breakfast",
    price: 4.91,
    img: "./image/item-1.webp",
    desc: `Eslaquit maintains that healthy eating does not mean starving yourself or restricting food consumption, but rather that you mainly take care of the way food is prepared. `,
  },
  {
    id: 2,
    title: "Baho",
    category: "lunch",
    price: 6.45,
    img: "./image/item-2.jpg",
    desc: `It is beef (cecina and brisket) marinated, exposed to the sun for three days and later cooked with yucca, green and ripe plantains, tomato and onion. `,
  },
  {
    id: 3,
    title: "Sopa borracha",
    category: "shakes",
    price: 6.99,
    img: "./image/item-3.jpg",
    desc: `To prepare a drunken soup, you need a one-kilo marquesote de pinol, a Nicaraguan cake prepared with eggs, finely ground pinol, sugar, and grated lemon peel.`,
  },
  {
    id: 4,

    title: "Nica Burro",
    category: "breakfast",
    price: 2.55,
    img: "./image/item-4.jpg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "Indio Viejo",
    category: "lunch",
    price: 6.95,
    img: "./image/item-5.jpg",
    desc: `All Nicaraguans enjoy it, it is accompanied with rice and in some regions the tortilla, ripe plantain or green banana is the ideal food. `,
  },
  {
    id: 6,
    title: "Tres Leches",
    category: "shakes",
    price: 18.99,
    img: "./image/item-6.jpg",
    desc: `Delicious typical Nicaraguan dessert whose name is due to its 3 dairy ingredients.`,
  },
  {
    id: 7,
    title: "Frutas y Granola",
    category: "breakfast",
    price: 5.30,
    img: "./image/item-7.jpg",
    desc: `All fruits are excellent sources of vitamins, minerals and fiber. `,
  },
  {
    id: 8,
    title: "Carne Tapada",
    category: "lunch",
    price: 12.99,
    img: "./image/item-8.jpg",
    desc: `Carne tapada is the name of this special meat and vegetable stew that goes very well with tortillas and rice.`,
  },
  {
    id: 9,
    title: "Buñuelos dulces de maíz",
    category: "shakes",
    price: 16.99,
    img: "./image/item-9.jpg",
    desc: `They are made with a dough of corn mixed with cheese and bathed in a syrup made with rapadura (piloncillo), cinnamon and other spices. Calientitos are more flavorful and some recipes substitute corn with yucca.`,
  },
  {
    id: 10,
    title: "Churrasco con chimichurri",
    category: "dinner",
    price: 22.99,
    img: "./image/item-10.jpg",
    desc: `Understood as a cut of any type of grilled meat, it is a typical food of many Latin American countries such as Argentina, Brazil, Chile, Uruguay, Bolivia, Venezuela, Mexico and Nicaragua.`,
  },
];

const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

window.addEventListener("DOMContentLoaded", function () {
  diplayMenuItems(menu);
  displayMenuButtons();
});

function diplayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  

  sectionCenter.innerHTML = displayMenu;
}
function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        diplayMenuItems(menu);
      } else {
        diplayMenuItems(menuCategory);
      }
    });
  });
}