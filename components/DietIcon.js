import getDietarySymbol from "../utils/getDietarySymbol.js";

export default function createDietaryIcon({ category }) {
  const dietarySymbol = getDietarySymbol(category);
  const li = document.createElement("li");
  const icon = document.createElement("abbr");

  icon.classList.add("diet-icon");

  icon.title =
    category === "glutenFree"
      ? "Gluten Free"
      : category.charAt(0).toUpperCase() + category.slice(1);
  icon.textContent = dietarySymbol;
  li.appendChild(icon);
  return li;
}
