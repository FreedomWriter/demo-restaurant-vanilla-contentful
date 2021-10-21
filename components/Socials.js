fetch("../data/info.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const { social } = data;
    createSocial(social);
  });

function createSocial(social) {
  const h2 = document.createElement("h2");
  const ul = document.createElement("ul");

  h2.classList.add("section-title");

  h2.textContent = "We're ever so social";

  const main = document.getElementsByTagName("main")[0];
  main.appendChild(h2);

  social.forEach((item) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.setAttribute("href", item.url);

    a.textContent = item.displayName;
    li.innerText = item.channel + " : ";

    li.appendChild(a);
    ul.appendChild(li);
  });

  // if there are no socials
  // do not append an empty `ul`
  if (ul.hasChildNodes()) {
    main.appendChild(ul);
  }
}
