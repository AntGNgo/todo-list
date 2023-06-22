const renderTasks = (tasksArray, filter) => {
  const tasksDOMRef = document.getElementById("tasks");
  // TODO make option for filter
  if (!filter) {
    while (tasksDOMRef.hasChildNodes()) {
      tasksDOMRef.removeChild(tasksDOMRef.lastChild);
    }
    tasksArray.forEach((task) => {
      if (task.nameValue.trim() !== "") {
        console.log(task.nameValue);
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

        tasksDOMRef.appendChild(div);
      }
    });
  }
};

export default renderTasks;
