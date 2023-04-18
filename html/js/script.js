
function logar(){
  let login = document.getElementById('login').value;
  let senha = document.getElementById('senha').value;

  if(login == "admin" && senha == 123){
     alert('sucesso');
     location.href = "menu.html";

  } else {
     alert('Usuario ou senha incorreto');
  }
}

const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");
const eraseBtn = document.querySelector("#erase-button");

//Funções
const saveTodo = (text) => {
  const todo = document.createElement("div");
  todo.classList.add("todo");

  const todoTitle = document.createElement("h3");
  todoTitle.innerText = text;
  todo.appendChild(todoTitle);

  const editBtn = document.createElement("button");
  editBtn.classList.add("edit-todo");
  editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
  todo.appendChild(editBtn);

  const deletBtn = document.createElement("button");
  deletBtn.classList.add("remove-todo");
  deletBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  todo.appendChild (deletBtn);

  todoList.appendChild(todo);

  todoInput.value = "";
  todoInput.focus();

}

//Eventos
todoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputValue = todoInput.value;

  if(inputValue){
   saveTodo(inputValue);
  }
});

document.addEventListener("click", (e) => {
  const targetEl = e.target
  const parentEl = targetEl.closest("div");

  if(targetEl.classList.contains("remove-todo")){
      parentEl.remove();
  }

  

});