const deleteTask = (tasksArray, taskID) => {
  const updatedTasksArray = tasksArray.slice();
  console.log(tasksArray);
  tasksArray.map((task) => {
    if (task.id === taskID) {
      const index = tasksArray.indexOf(task);
      updatedTasksArray.splice(index, 1);
      console.log(`Updated Array: ${updatedTasksArray}`);
    }
  });

  return updatedTasksArray;
};

export default deleteTask;
