import deleteTask from "./deleteTask";

const tasksDOMRef = document.getElementById("tasks");
const render = (task) => {
  if (task.nameValue.trim() !== "") {
    const div = document.createElement("div");
    div.classList.add("task");

    const taskName = document.createElement("p");
    taskName.textContent = task.nameValue;
    div.appendChild(taskName);

    const taskDue = document.createElement("p");
    taskDue.textContent = task.dateValue;
    if (task.dateValue.trim() === "") {
      taskDue.textContent = "-";
    }
    div.appendChild(taskDue);

    const taskPriority = document.createElement("p");
    taskPriority.textContent = task.priorityValue;
    if (task.priorityValue.trim() === "") {
      taskPriority.textContent = "-";
    }
    div.appendChild(taskPriority);

    const taskProject = document.createElement("p");
    taskProject.textContent = task.projectValue;
    if (task.projectValue.trim() === "") {
      taskProject.textContent = "-";
    }

    div.appendChild(taskProject);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    // set unique identifiers for deleting a task possible use an id
    deleteBtn.classList.add("delete-btn");
    deleteBtn.setAttribute("id", task.id);
    div.appendChild(deleteBtn);

    div.addEventListener("click", () => {
      div.classList.toggle("completed");
    });

    tasksDOMRef.appendChild(div);
  }
};
const renderTasks = (tasksArray, filter) => {
  while (tasksDOMRef.hasChildNodes()) {
    tasksDOMRef.removeChild(tasksDOMRef.lastChild);
  }

  if (!filter) {
    tasksArray.forEach((task) => {
      render(task);
    });
  } else {
    tasksArray.forEach((task) => {
      if (task.projectValue === filter) {
        render(task);
      }
    });
  }
};

export default renderTasks;
