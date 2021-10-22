import createMenuItems from "../components/MenuItems.js";

function createPage(page) {
  const main = document.createElement("main");
  const header = document.createElement("h1");
  const intro = document.createElement("div");

  main.classList.add(`${page.title.toLowerCase()}-page`);
  header.classList.add("section-title");
  intro.classList.add("section-intro");
  header.textContent = page.title;
  intro.textContent = page.description;
  main.appendChild(header);
  main.appendChild(intro);

  const root = document.getElementsByClassName("page")[0];
  root.appendChild(main);
}

fetch("../data/pages.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const { menu } = data;
    createPage(menu);
  })
  .then(() => {
    fetch("../data/menu.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        data.forEach((item) => createMenuItems(item));
      });
  });
