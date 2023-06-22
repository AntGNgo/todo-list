const newProject = (projectName) => {
  const views = document.getElementById("views");
  const projectsInput = document.getElementById("new-todo-project");
  if (projectName.trim() !== "") {
    const li = document.createElement("li");
    li.setAttribute("id", projectName.toLowerCase());
    li.textContent = projectName;
    console.log(li);
    views.appendChild(li);

    const option = document.createElement("option");
    option.setAttribute("value", projectName);
    option.textContent = projectName;
    projectsInput.appendChild(option);

    return projectName;
  }
};

export default newProject;
