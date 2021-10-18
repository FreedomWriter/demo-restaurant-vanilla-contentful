import createPage from "./createPage.js";

fetch("../data/pages.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const { menu } = data;
    createPage(menu);
  });
