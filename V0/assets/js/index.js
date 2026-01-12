const button = document.querySelector("button");
const podcastList = document.querySelector(".podcast-list");
let isTileView = true;

const podcasts = [
  "Podcast 1",
  "Podcast 2",
  "Podcast 3",
  "Podcast 4"
];

function renderTileView() {
  podcastList.replaceChildren();

  podcasts.forEach(name => {
    const a = document.createElement("a");
    a.href = "podcast.html";
    a.classList.add("podcast-tile");

    const img = document.createElement("img");
    img.src = "../assets/img/logo.webp";
    img.alt = `${name} logo`;

    const h3 = document.createElement("h3");
    h3.textContent = name;

    a.append(img, h3);
    podcastList.appendChild(a);
  });

  button.textContent = "List view";
  isTileView = true;
}

function renderListView() {
  podcastList.replaceChildren();

  const ul = document.createElement("ul");

  podcasts.forEach((name, index) => {
    const li = document.createElement("li");
    const a = document.createElement("a");

    a.href = "podcast.html";
    a.textContent = `${name} – ${10 + index} episodes`;

    li.appendChild(a);
    ul.appendChild(li);
  });

  podcastList.appendChild(ul);

  button.textContent = "Tile view";
  isTileView = false;
}

button.addEventListener("click", () => {
  isTileView ? renderListView() : renderTileView();
});
renderTileView();
