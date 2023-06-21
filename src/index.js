import "./newProjectBtn";
import newTask from "./newTask";
import renderTasks from "./renderTasks";

const addTodoBtn = document.getElementById("add-todo-btn");
const todos = [];
const projects = [];
const filter = "";

addTodoBtn.addEventListener("click", () => {
  const task = newTask();
  todos.push(task);

  //   If you render tasks here, if you're filtering by projects, it will reset the view to all tasks.
  renderTasks(todos);
});
