"use strict";

/*
Below the add to do function and the delete function
*/
(function () {
  function createTodoNode(todo) {
    // create a new list element and add it to the todo item class
    const node = document.createElement("li");

    node.classList.add("todo-item");
    // create the closing buttons
    node.innerHTML = `
      <button class="done-state">
        <div class="done-state-filler"></div>
      </button>
      <div class="todo-name"></div>
      <button class="delete-todo">✖</button>
    `;

    node.querySelector(".todo-name").textContent = todo.value;

    const doneButton = node.querySelector("button.done-state");
    const deleteButton = node.querySelector("button.delete-todo");

    node.setAttribute("data-completed", todo.isComplete);

    doneButton.addEventListener("click", () => {
      const currentlyCompleted = JSON.parse(
        node.getAttribute("data-completed") || "false"
      );
      node.setAttribute("data-completed", !currentlyCompleted);

      todo.isComplete = !currentlyCompleted;
      todoService.updateTodo(todo);
    });

    deleteButton.addEventListener("click", () => {
      node.parentNode.removeChild(node);
      todoService.removeTodo(todo.id);
    });

    return node;
  }
  window.todoView = {
    createTodoNode,
  };
})();
