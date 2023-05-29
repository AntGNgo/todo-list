const appendTodo = (task, date, priority, project, id, todos) => {
	const tBodyRef = document.getElementById('tbody');

	const newRow = tBodyRef.insertRow();

	newRow.classList.add('todo');
	newRow.setAttribute('id', id);
	const cellInput = newRow.insertCell();
	const inputCheckbox = document.createElement('input');
	inputCheckbox.setAttribute('type', 'checkbox');

	inputCheckbox.addEventListener('click', () => {
		newRow.classList.toggle('strike-out');
		todos.forEach((todo) => {
			if (parseInt(todo.id) === parseInt(id)) {
				todo.completed === false
					? (todo.completed = true)
					: (todo.completed = false);
			}
		});
	});

	cellInput.appendChild(inputCheckbox);

	const cellTitle = newRow.insertCell();
	const cellTitlePara = document.createElement('p');
	cellTitlePara.classList.add('todo-title');
	cellTitlePara.textContent = task;
	cellTitle.appendChild(cellTitlePara);

	const cellDate = newRow.insertCell();
	const cellDatePara = document.createElement('p');
	cellDatePara.classList.add('todo-duedate');
	cellDatePara.textContent = date;
	cellDate.appendChild(cellDatePara);

	const cellPriority = newRow.insertCell();
	const cellPriorityPara = document.createElement('p');
	cellPriorityPara.classList.add('todo-priority');
	cellPriorityPara.textContent = priority;
	cellPriority.appendChild(cellPriorityPara);

	const cellProject = newRow.insertCell();
	const cellProjectPara = document.createElement('p');
	cellProjectPara.classList.add('todo-project');
	cellProjectPara.textContent = project;
	cellProject.appendChild(cellProjectPara);

	const deleteCell = newRow.insertCell();
	const deleteBtn = document.createElement('button');
	deleteBtn.textContent = 'X';
	deleteBtn.setAttribute('id', id);
	deleteCell.appendChild(deleteBtn);

	// Event Listner to Delete Task
	deleteBtn.addEventListener('click', (e) => {
		todos.forEach((todo) => {
			if (parseInt(deleteBtn.id) === parseInt(todo.id)) {
				const index = todos.indexOf(todo);
				todos.splice(index, 1);
				newRow.remove();
			}
		});
	});
};

export default appendTodo;
