import createSocial from "../components/Socials.js";
import createTestimonial from "../components/Testimonials.js";
import createHours from "../components/Hours.js";

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

const homePageInfo = await fetch("/.netlify/functions/homePageInfo").then((response) =>
  response.json());

createPage(homePageInfo);

const testimonials = await fetch("/.netlify/functions/testimonials").then((response) =>
  response.json());

createTestimonial(testimonials);

const hours = await fetch("/.netlify/functions/hours").then((response) =>
  response.json());

createHours(hours);

const social = await fetch("/.netlify/functions/socail").then((response) =>
  response.json());

createSocial(social);