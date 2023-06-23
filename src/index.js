import "./newProjectBtn";
import newTask from "./newTask";
import renderTasks from "./renderTasks";
import newProject from "./newProject";
import deleteTask from "./deleteTask";

const addTodoBtn = document.getElementById("add-todo-btn");
const newProjectName = document.getElementById("new-project-name");

let todos = [];
const projects = [];
const filter = "";

addTodoBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const task = newTask();
  if (Object.keys(task).length !== 0) {
    todos.push(task);
    renderTasks(todos);

    const deleteBtns = document.getElementsByClassName("delete-btn");

    for (let i = 0; i < deleteBtns.length; i++) {
      deleteBtns[i].addEventListener("click", () => {
        todos = deleteTask(todos, deleteBtns[i].id);
        renderTasks(todos);
      });
    }
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
