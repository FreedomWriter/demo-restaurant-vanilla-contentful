fetch("../data/info.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    createHours(data);
  });

function createHours(info) {
  const container = document.createElement("div");
  const h2 = document.createElement("h2");

  container.classList.add("hours");
  h2.classList.add("section-title");

  info.hours.forEach((day) => {
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
