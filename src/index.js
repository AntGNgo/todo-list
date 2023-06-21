import "./newProjectBtn";
import newTask from "./newTask";

const addTodoBtn = document.getElementById("add-todo-btn");
const todos = [];

addTodoBtn.addEventListener("click", () => {
  const task = newTask();
  todos.push(task);
  console.log(todos);
});
