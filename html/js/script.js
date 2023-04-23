
let dados = JSON.parse(localStorage.getItem('pokemons')) ?? [];

const todoList = document.querySelector("#todo-list");

const saveList = (text) => {

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

  deletBtn.addEventListener("click", (e) => {
    const targetEl = e.target
    const parentEl = targetEl.closest("div");

    if (targetEl.classList.contains("remove-todo")) {
      parentEl.remove();

    }

    if (text) {

      dados.splice(text, 1);
      localStorage.removeItem('pokemons');
      let data = JSON.stringify(dados);
      localStorage.setItem('pokemons', data);
    }

  });

  todo.appendChild(deletBtn);

  todoList.appendChild(todo);

}
dados.forEach((value) => {
  if (value) {
    saveList(value);
  }
});

function logar() {
  let login = document.getElementById('login').value;
  let senha = document.getElementById('senha').value;

  if (login == "admin" && senha == 123) {
    alert('sucesso');
    location.href = "criar.html";

  } else {
    alert('Usuario ou senha incorreto');
  }
}

const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
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
  todo.appendChild(deletBtn);


  deletBtn.addEventListener("click", (e) => {
    const targetEl = e.target
    const parentEl = targetEl.closest("div");

    if (targetEl.classList.contains("remove-todo")) {
      parentEl.remove();

    }

    if (text) {
      dados.splice(text, 1);
      localStorage.removeItem('pokemons');
      let data = JSON.stringify(dados);
      localStorage.setItem('pokemons', data);
    }

  });

  todoList.appendChild(todo);

  todoInput.value = "";
  todoInput.focus();

  dados.push(text);
  data = JSON.stringify(dados);
  localStorage.setItem('pokemons', data);


}

//Eventos

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputValue = todoInput.value;

  if (inputValue) {
    saveTodo(inputValue);
  }
});


