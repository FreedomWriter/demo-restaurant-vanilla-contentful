import formatDate from "../utils/formatDate.js";

export default async function createTestimonial(obj) {
  const p = await document.createElement("p");
  const h3 = await document.createElement("h3");
  const text = await document.createElement("div");
  const h2 = await document.createElement("h2");

  const testimonials = document.createElement("div");

  h2.classList.add("section-title");
  p.classList.add("testimonial-meta");
  testimonials.classList.add("testimonial");

  h2.textContent = "Our diners say nice things";

  obj.forEach((item) => {
    p.textContent = `On ${formatDate(item.date)}, ${item.displayName} said:`;
    h3.textContent = item.title;
    text.textContent = item.body;

    testimonials.appendChild(p);
    testimonials.appendChild(h3);
    testimonials.appendChild(text);
  });
  const main = await document.getElementsByClassName("home-page")[0];

  console.log(main);
  main.appendChild(h2);
  main.appendChild(testimonials);
}
