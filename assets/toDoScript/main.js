const list = document.querySelector(".todos");
const todoForm = document.querySelector(".create-todo-form");
const todoInput = todoForm.querySelector("input");

todoService.loadTodos().then((todos) => {
    for (const todo of todos) {
        list.appendChild(todoView.createTodoNode(todo));
    }
});

todoForm.addEventListener("submit", (e) => {
    e.preventDefault();

    todoService.addTodo(todoInput.value).then((newTodo) => {
        todoInput.value = "";

        list.appendChild(todoView.createTodoNode(newTodo));
    });
});
