fetch("../data/testimonials.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    return createTestimonial(data);
  });

function formatDate(dateStr) {
  return Intl.DateTimeFormat("us-EN").format(new Date(dateStr));
}

function createTestimonial(obj) {
  const p = document.createElement("p");
  const h3 = document.createElement("h3");
  const text = document.createElement("div");
  const time = document.createElement("time");

  const testimonials = document.createElement("div");

  p.classList.add("testimonial-meta");
  testimonials.classList.add("testimonial");

  obj.forEach((item) => {
    p.textContent = `On ${formatDate(item.date)}, ${item.displayName} said:`;
    h3.textContent = item.title;
    text.textContent = item.body;

    testimonials.appendChild(p);
    testimonials.appendChild(h3);
    testimonials.appendChild(text);
  });

  const main = document.getElementsByTagName("main")[0];
  main.appendChild(testimonials);
}
