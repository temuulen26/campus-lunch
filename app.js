const menuData = {
  Monday: [
    {
      name: "Bibimbap",
      description: "Rice with vegetables and gochujang",
      price: 6000,
      vegetarian: true,
    },
    {
      name: "Chicken Rice",
      description: "Rice served with grilled chicken",
      price: 7000,
      vegetarian: false,
    },
    {
      name: "Tofu Bowl",
      description: "Tofu and vegetables over rice",
      price: 6500,
      vegetarian: true,
    },
  ],
  Tuesday: [
    {
      name: "Mushroom Pasta",
      description: "Creamy pasta with mushrooms",
      price: 7000,
      vegetarian: true,
    },
    {
      name: "Beef Noodles",
      description: "Noodles with sliced beef and vegetables",
      price: 7500,
      vegetarian: false,
    },
    {
      name: "Lentil Soup",
      description: "Warm lentil soup with vegetables",
      price: 6000,
      vegetarian: true,
    },
  ],
  Wednesday: [
    {
      name: "Vegetable Curry",
      description: "Mild curry with vegetables and rice",
      price: 6500,
      vegetarian: true,
    },
    {
      name: "Pork Rice Bowl",
      description: "Rice bowl with seasoned pork",
      price: 7500,
      vegetarian: false,
    },
    {
      name: "Egg Sandwich",
      description: "Egg and vegetable sandwich",
      price: 5500,
      vegetarian: true,
    },
  ],
};

const daySelector = document.querySelector("#day-selector");
const menuHeading = document.querySelector("#menu-heading");
const mealCount = document.querySelector("#meal-count");
const mealList = document.querySelector("#meal-list");

function formatPrice(price) {
  return `₩${price.toLocaleString("ko-KR")}`;
}

function renderMenu(day) {
  const meals = menuData[day];

  menuHeading.textContent = `${day}'s menu`;
  mealCount.textContent = `${meals.length} meals`;
  mealList.replaceChildren();

  meals.forEach((meal) => {
    const card = document.createElement("article");
    card.className = "meal-card";

    const name = document.createElement("h3");
    name.textContent = meal.name;

    const description = document.createElement("p");
    description.textContent = meal.description;

    const details = document.createElement("div");
    details.className = "meal-details";

    const price = document.createElement("p");
    price.className = "price";
    price.textContent = formatPrice(meal.price);
    details.append(price);

    if (meal.vegetarian) {
      const vegetarianLabel = document.createElement("span");
      vegetarianLabel.className = "vegetarian-label";
      vegetarianLabel.textContent = "Vegetarian";
      details.append(vegetarianLabel);
    }

    card.append(name, description, details);
    mealList.append(card);
  });
}

daySelector.addEventListener("change", (event) => {
  renderMenu(event.target.value);
});

renderMenu(daySelector.value);
