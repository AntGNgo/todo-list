const renderTasks = (tasksArray, filter) => {
  const tBody = document.getElementById("tbody");
  // TODO make option for filter
  if (!filter) {
    while (tBody.hasChildNodes()) {
      tBody.removeChild(tBody.lastChild);
    }
    tasksArray.forEach((task) => {
      const newRow = tBody.insertRow();
      const taskNameCell = newRow.insertCell();
      let textContent = document.createTextNode(task.nameValue);
      taskNameCell.appendChild(textContent);

      const taskDueCell = newRow.insertCell();
      textContent = document.createTextNode(task.dateValue);
      taskDueCell.appendChild(textContent);

      const taskPriorityCell = newRow.insertCell();
      textContent = document.createTextNode(task.priorityValue);
      taskPriorityCell.appendChild(textContent);

      const taskProjectCell = newRow.insertCell();
      textContent = document.createTextNode(task.projectValue);
      taskProjectCell.appendChild(textContent);
    });
  }
};

export default renderTasks;
