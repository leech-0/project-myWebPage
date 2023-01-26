const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
let todos = [];

todoForm.addEventListener("submit", todoFormSubmit);

function todoFormSubmit(event) {
  event.preventDefault();
  const todoObject = {
    text: todoInput.value,
    id: Date.now(),
  };
  todoListWriter(todoObject);
  todos.push(todoObject);
  saveTodos();
}

function todoListWriter(todoObject) {
  const li = document.createElement("li");
  const checkButton = document.createElement("button");
  const deleteButton = document.createElement("button");
  const span = document.createElement("span");
  todoList.appendChild(li);
  li.appendChild(checkButton);
  li.appendChild(span);
  li.appendChild(deleteButton);
  li.id = todoObject.id;
  span.innerText = todoObject.text;
  checkButton.innerText = "V";
  deleteButton.innerText = "X";
  todoInput.value = "";
  deleteButton.addEventListener("click", listDelete);
}

function listDelete(event) {
  const deleteList = event.target.parentElement;
  todos = todos.filter((temp) => temp.id !== parseInt(deleteList.id));
  deleteList.remove();
  saveTodos();
}

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

const checkStorage = localStorage.getItem("todos");
if (checkStorage !== null) {
  const parsedTodos = JSON.parse(checkStorage);
  todos = parsedTodos;
  parsedTodos.forEach(todoListWriter);
}
