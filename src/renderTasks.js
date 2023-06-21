const renderTasks = (tasksArray, filter) => {
	const tasksDOMRef = document.getElementById('tasks');
	// TODO make option for filter
	if (!filter) {
		while (tasksDOMRef.hasChildNodes()) {
			tasksDOMRef.removeChild(tasksDOMRef.lastChild);
		}
		tasksArray.forEach((task) => {
			console.log(task.nameValue);
			const div = document.createElement('div');
			div.classList.add('task');

			const taskName = document.createElement('p');
			taskName.textContent = task.nameValue;
			div.appendChild(taskName);

			const taskDue = document.createElement('p');
			taskDue.textContent = task.dateValue;
			div.appendChild(taskDue);

			const taskPriority = document.createElement('p');
			taskPriority.textContent = task.priorityValue;
			div.appendChild(taskPriority);

			const taskProject = document.createElement('p');
			taskProject.textContent = task.projectValue;
			div.appendChild(taskProject);

			tasksDOMRef.appendChild(div);
		});
	}
};

export default renderTasks;
