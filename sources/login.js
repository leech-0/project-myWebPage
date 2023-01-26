const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-input");
const greeting = document.querySelector("#greeting");
const USERNAME_KEY = "username";
function loginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  loginForm.classList.add("hidden");
  greeting.classList.remove("hidden");
  greeting.innerText = `Hello, ${username}`;
}

if (localStorage.getItem(USERNAME_KEY) === null) {
  loginForm.classList.remove("hidden");
  loginForm.addEventListener("submit", loginSubmit);
} else {
  greeting.classList.remove("hidden");
  greeting.innerText = `Hello, ${localStorage.getItem(USERNAME_KEY)}`;
}
