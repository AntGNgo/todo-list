const deleteTask = (tasksArray, taskID) => {
  const updatedTasksArray = tasksArray.slice();
  tasksArray.map((task) => {
    if (task.id === parseInt(taskID)) {
      const index = tasksArray.indexOf(task);
      updatedTasksArray.splice(index, 1);
    }
  });

  return updatedTasksArray;
};

export default deleteTask;
