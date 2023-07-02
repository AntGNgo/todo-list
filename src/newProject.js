const newProject = (projectName) => {
  const views = document.getElementById("views");
  const projectsInput = document.getElementById("new-todo-project");
  if (projectName.trim() !== "") {
    const div = document.createElement("div");
    div.classList.add("li-container");

    const li = document.createElement("li");
    li.classList.add("project-item");
    li.setAttribute("id", projectName.toLowerCase());
    li.textContent = projectName;
    div.appendChild(li);
    views.appendChild(div);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "x";
    deleteBtn.setAttribute("id", `${projectName}-delete`);
    div.appendChild(deleteBtn);

    const option = document.createElement("option");
    option.setAttribute("value", projectName);
    option.textContent = projectName;
    projectsInput.appendChild(option);

    return projectName;
  }
};

export default newProject;
