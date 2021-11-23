export default function createHours(hours) {
  const container = document.createElement("div");
  const h2 = document.createElement("h2");

  container.classList.add("hours");
  h2.classList.add("section-title");

  hours.forEach((day) => {
    const p = document.createElement("p");
    p.textContent = day;
    container.appendChild(p);
  });

  h2.textContent = "Opening Hours";
  h2.appendChild(container);

  const main = document.getElementsByTagName("main")[0];
  main.appendChild(h2);
  main.appendChild(container);
}
