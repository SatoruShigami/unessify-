const button = document.getElementById("viewToggle");
const podcastList = document.getElementById("podcastList");

let isTileView = true;

button.addEventListener("click", () => {
  podcastList.classList.toggle("list-view");

  isTileView = !isTileView;
  button.textContent = isTileView ? "List view" : "Tile view";
});
