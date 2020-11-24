"use strict";

(function () {
  let appId = 123456;

  function loadTodos() {
    return fetch(
      `https://f73webapi.azurewebsites.net/api/items/App/${appId}`
    ).then((response) => {
      if (!response.ok) {
        throw new Error("Data could not load.");
      }
      return response.json();
    });
  }

  function addTodo(todo) {
    return fetch("https://f73webapi.azurewebsites.net/api/items", {
      method: "POST",
      body: JSON.stringify({
        AppId: appId,
        Key: todo,
        Value: todo,
        isComplete: false,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      if (!response.ok) {
        throw new Error("To-do task could not be saved.");
      }
      return response.json();
    });
  }

  function removeTodo(id) {
    return fetch(`https://f73webapi.azurewebsites.net/api/items/${id}`, {
      method: "DELETE",
    }).then((response) => {
      if (!response.ok) {
        throw new Error("To-do could not be saved.");
      }
    });
  }

  function updateTodo(todo) {
    return fetch(`https://f73webapi.azurewebsites.net/api/items/${todo.id}`, {
      method: "PUT",
      body: JSON.stringify(todo),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      if (!response.ok) {
        throw new Error("To-Do could not be updated.");
      }
    });
  }
  window.todoService = {
    loadTodos,
    addTodo,
    removeTodo,
    updateTodo,
  };
})();
