const todoElement = document.querySelector('.js-to-do-input');

const dateElement = document.querySelector('.js-date-input');

let  todoList = [];

renderHTML();

function renderHTML()  {
  let todoListHTML = '';

  todoList.forEach((todo, index) => {
    const {todoName, todoDate} = todo;

    const html = `
      <div><p>${todoName}</p></div>
      <div><p>${todoDate}</p></div>
      <button class="delete-button js-delete-button">Delete</button>
      `;

      todoListHTML += html;
  });
    
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;

  document.querySelectorAll('.js-delete-button').forEach((deleteButton, index) => {
    deleteButton.addEventListener('click', () => {
      deleteTodo(index);
    });
  });
}

function addTodo() {
  const todoName = todoElement.value;
  const todoDate = dateElement.value;

  todoList.push({todoName, todoDate});

  todoElement.value = '';
  dateElement.value = '';

  renderHTML();
}

function deleteTodo(index) {
  todoList.splice(index, 1);
  renderHTML();
}

document.querySelector('.js-add-button').addEventListener('click', () => {
  addTodo();
});