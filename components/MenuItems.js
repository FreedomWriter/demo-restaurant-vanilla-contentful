import createDietaryIcon from "./DietIcon.js";

export default async function createMenuItems(menuItem) {
  const section = await document.createElement("section");
  const header = await document.createElement("div");
  const title = await document.createElement("h2");
  const price = await document.createElement("div");
  const dietaryUL = await document.createElement("ul");
  const description = await document.createElement("p");

  // transform each true entry in `dietary`
  // into an `li` with an icon as a child
  for (const category in menuItem.dietary) {
    if (menuItem.dietary[category]) {
      const icon = createDietaryIcon({
        category,
      });
      dietaryUL.appendChild(icon);
    }
  }

  section.classList.add("menu-item");
  header.classList.add("menu-item-header");
  title.classList.add("menu-item-title");
  price.classList.add("menu-item-price");
  dietaryUL.classList.add("menu-item-diet");
  description.classList.add("menu-item-description");

  title.textContent = menuItem.title;
  price.textContent = menuItem.price;
  description.textContent = menuItem.description;

  const figure = await document.createElement("figure");
  const img = await document.createElement("img");
  const figcaption = await document.createElement("figcaption");
  const a = await document.createElement("a");

  section.appendChild(header);
  header.appendChild(title);
  header.appendChild(price);
  section.appendChild(description);

  if (menuItem.photo.imageUrl) {
    img.setAttribute("src", menuItem.photo.imageUrl);
    img.setAttribute("alt", menuItem.photo.caption);
    a.setAttribute("href", menuItem.photo.attribution.url);

    figcaption.textContent = `${menuItem.photo.caption} - `;
    a.textContent = "Photo credit";

    figcaption.appendChild(a);
    figure.appendChild(img);
    figure.appendChild(figcaption);

    section.appendChild(figure);
  }

  // if there are no dietary icons
  // do not append an empty `ul`
  if (dietaryUL.hasChildNodes()) {
    header.appendChild(dietaryUL);
  }

  const menuPage = await document.getElementsByTagName("main")[0];
  menuPage.appendChild(section);
}
