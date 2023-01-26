const navInput = document.querySelector("#nav-form input");
const navForm = document.querySelector("#nav-form");
const navContainer = document.querySelector("#nav-container");
let urlLinks = [];

function saveUrl() {
  localStorage.setItem("urls", JSON.stringify(urlLinks));
}
function navDeleteAction(event) {
  event.preventDefault();
  const deleteCell = event.target.parentElement;
  urlLinks = urlLinks.filter((temp) => temp.id !== parseInt(deleteCell.id));
  deleteCell.remove();
  saveUrl();
}

function paintUrl(urlObject) {
  const navCell = document.createElement("a");
  const navDelete = document.createElement("div");
  const navInicial = document.createElement("div");
  navContainer.appendChild(navCell);
  navCell.appendChild(navDelete);
  navCell.appendChild(navInicial);
  navCell.classList.add("nav-cell");
  navDelete.classList.add("nav-delete");
  navInicial.classList.add("nav-inicial");
  navCell.id = urlObject.id;
  navCell.href = urlObject.text;
  navInicial.innerText = urlObject.Inicial;
  navDelete.innerText = "X";
  navDelete.addEventListener("click", navDeleteAction);
}

function navFormSubmit(event) {
  event.preventDefault();
  const url = navInput.value;
  navInput.value = "";
  const urlObject = {
    text: url,
    id: Date.now(),
    Inicial: url.substr(12, 1),
  };
  urlLinks.push(urlObject);
  paintUrl(urlObject);
  saveUrl();
}

navForm.addEventListener("submit", navFormSubmit);

const savedUrls = localStorage.getItem("urls");
if (savedUrls !== null) {
  const parsedUrls = JSON.parse(savedUrls);
  urlLinks = parsedUrls;
  parsedUrls.forEach(paintUrl);
}
