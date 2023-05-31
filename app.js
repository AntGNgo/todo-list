import Task from "./modules/taskClass.js";
// import viewUpdate from "./modules/viewUpdate.js";
import renderTodos from "./modules/renderTodos.js";

const newTodo = document.getElementById("new-todo-name");
const addTodoBtn = document.getElementById("add-todo-btn");
const newTodoDate = document.getElementById("new-todo-date");
const newPriority = document.getElementById("new-priority");

const projectsList = document.getElementById("projects-list");
const newProjectButton = document.getElementById("new-project-btn");
const newProjectName = document.getElementById("new-project-name");
const projectsDropDown = document.getElementById("project");

const views = ["all", "today", "week", "someday"];
const currentView = "all";

// Array of Task and Projects
const todos = [];
const projects = [];

//
const viewUpdate = (newView) => {
  const activeView = document.getElementById("active-view");
  const allView = document.getElementById("all-view");
  const todayView = document.getElementById("today-view");
  const weekView = document.getElementById("week-view");
  const somedayView = document.getElementById("someday-view");

  allView.addEventListener("click", () => {
    activeView.textContent = "All";
    console.log(todos);
    renderTodos(todos, Date.parse("2023-05-31"));
  });

  todayView.addEventListener("click", () => {
    activeView.textContent = "Today";
  });

  weekView.addEventListener("click", () => {
    activeView.textContent = "This Week";
  });

  somedayView.addEventListener("click", () => {
    activeView.textContent = "Someday";
  });

  if (newView) {
    activeView.textContent = newView;
  }
};
//

viewUpdate(currentView);

newTodo.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    if (e.target.value.trim() !== "") {
      createTask();
    }
  }
});

addTodoBtn.addEventListener("click", () => {
  if (newTodo.value.trim() !== "") {
    createTask(newTodo);
  }
});

// Shared function for both new task enter options
const createTask = () => {
  let task = new Task(
    newTodo.value,
    newTodoDate.value,
    newPriority.value,
    projectsDropDown.value
  );
  task.pushToList(todos);
  newTodo.value = "";
  renderTodos(todos);
  // appendTodo(task.task, task.date, task.priority, task.project, task.id, todos);
};

// Project Logic
newProjectButton.addEventListener("click", () => {
  newProjectName.classList.toggle("hidden");
});

newProjectName.addEventListener("keypress", (e) => {
  if (e.key === "Enter" && e.target.value.trim() !== "") {
    projects.push(e.target.value);
    updateProjectsDropdown();
    renderProjects();
    newProjectName.classList.toggle("hidden");
    e.target.value = "";
  }
});

const renderProjects = () => {
  while (projectsList.hasChildNodes()) {
    projectsList.removeChild(projectsList.lastChild);
  }
  projects.forEach((project) => {
    const item = document.createElement("li");
    item.classList.add("project");
    item.textContent = project;
    projectsList.appendChild(item);

    item.addEventListener("click", () => {
      viewUpdate(project);
      renderTodos(todos, project);
    });
  });
};

const updateProjectsDropdown = () => {
  while (projectsDropDown.hasChildNodes()) {
    projectsDropDown.removeChild(projectsDropDown.lastChild);
  }
  const option = document.createElement("option");
  option.setAttribute("value", "none");
  option.textContent = "None";
  projectsDropDown.appendChild(option);

  projects.forEach((project) => {
    const option = document.createElement("option");
    option.setAttribute("value", project);
    option.textContent = project;
    projectsDropDown.appendChild(option);
  });
};

// Get Today's Date and see whazzup
const today = new Date();
