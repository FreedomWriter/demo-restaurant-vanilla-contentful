fetch("../data/pages.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const { home } = data;
    createPage(home);
  });

function createPage(page) {
  const main = document.createElement("main");
  const header = document.createElement("h1");
  const intro = document.createElement("div");
  const strapline = document.createElement("p");
  const h2 = document.createElement("h2");

  main.classList.add(`${page.title}-page`);
  header.classList.add("section-title");
  intro.classList.add("section-intro");
  strapline.classList.add("section-strapline");
  h2.classList.add("section-title");

  header.textContent = "contentfullbelly";
  intro.textContent = page.description;
  strapline.textContent = "All the things, On your plate.";
  h2.textContent = "Our diners say nice things";

  main.appendChild(header);
  main.appendChild(strapline);
  main.appendChild(intro);
  main.appendChild(h2);

  const root = document.getElementsByClassName("page")[0];
  root.appendChild(main);
}
