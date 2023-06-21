const newTask = () => {
  const name = document.getElementById("new-todo-name");
  const date = document.getElementById("new-todo-date");
  const priority = document.getElementById("new-todo-priority");
  const project = document.getElementById("new-todo-project");

  const nameValue = name.value;
  const dateValue = date.value;
  const priorityValue = priority.value;
  const projectValue = project.value;

  return { nameValue, dateValue, priorityValue, projectValue };
};

export default newTask;
