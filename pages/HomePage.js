import createSocial from "../components/Socials.js";
import createTestimonial from "../components/Testimonials.js";
import createHours from "../components/Hours.js";

fetch("../data/pages.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const { home } = data;
    createPage(home);
  })
  .then(() => {
    fetch("../data/testimonials.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return createTestimonial(data);
      });
  })
  .then(() => {
    fetch("../data/info.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        createHours(data);
      });
  })
  .then(() => {
    fetch("../data/info.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const { social } = data;
        createSocial(social);
      });
  });

async function createPage(page) {
  const main = await document.createElement("main");
  const header = await document.createElement("h1");
  const intro = await document.createElement("div");
  const strapline = await document.createElement("p");

  main.classList.add(`${page.title.toLowerCase()}-page`);
  header.classList.add("section-title");
  intro.classList.add("section-intro");
  strapline.classList.add("section-strapline");

  header.textContent = "contentfullbelly";
  intro.textContent = page.description;
  strapline.textContent = "All the things, On your plate.";

  main.appendChild(header);
  main.appendChild(strapline);
  main.appendChild(intro);

  const root = await document.getElementsByClassName("page")[0];
  return root.appendChild(main);
}
