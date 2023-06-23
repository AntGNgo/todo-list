import "./newProjectBtn";
import newTask from "./newTask";
import renderTasks from "./renderTasks";
import newProject from "./newProject";

const addTodoBtn = document.getElementById("add-todo-btn");
const newProjectName = document.getElementById("new-project-name");
const todos = [];
const projects = [];
const filter = "";

addTodoBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const task = newTask();
  if (Object.keys(task).length !== 0) {
    todos.push(task);
    renderTasks(todos);
  }
});

newProjectName.addEventListener("keypress", (e) => {
  if (e.key === "Enter" && newProjectName.value.trim() !== "") {
    const project = newProject(newProjectName.value.trim());
    projects.push(project);

    const projectBtn = document.getElementById(
      newProjectName.value.trim().toLowerCase()
    );
    projectBtn.addEventListener("click", () => {
      renderTasks(todos, project);
    });
    newProjectName.value = "";
    newProjectName.classList.toggle("hidden");
  }
});
