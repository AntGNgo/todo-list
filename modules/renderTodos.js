const renderTodos = (todos, projectFilter) => {
	console.log(todos);
	// Clear DOM
	const tBodyRef = document.getElementById('tbody');
	while (tBodyRef.hasChildNodes()) {
		tBodyRef.removeChild(tBodyRef.lastChild);
	}

	const renderMethod = (todo) => {
		const newRow = tBodyRef.insertRow();

		newRow.classList.add('todo');
		newRow.setAttribute('id', todo.id);
		const cellInput = newRow.insertCell();
		const inputCheckbox = document.createElement('input');
		inputCheckbox.setAttribute('type', 'checkbox');

		inputCheckbox.addEventListener('click', () => {
			newRow.classList.toggle('strike-out');
			todos.forEach((item) => {
				if (parseInt(item.id) === parseInt(id)) {
					item.completed === false
						? (item.completed = true)
						: (item.completed = false);
				}
			});
		});

		cellInput.appendChild(inputCheckbox);

		const cellTitle = newRow.insertCell();
		const cellTitlePara = document.createElement('p');
		cellTitlePara.classList.add('todo-title');
		cellTitlePara.textContent = todo.task;
		cellTitle.appendChild(cellTitlePara);

		const cellDate = newRow.insertCell();
		const cellDatePara = document.createElement('p');
		cellDatePara.classList.add('todo-duedate');
		cellDatePara.textContent = todo.date;
		cellDate.appendChild(cellDatePara);

		const cellPriority = newRow.insertCell();
		const cellPriorityPara = document.createElement('p');
		cellPriorityPara.classList.add('todo-priority');
		cellPriorityPara.textContent = todo.priority;
		cellPriority.appendChild(cellPriorityPara);

		const cellProject = newRow.insertCell();
		const cellProjectPara = document.createElement('p');
		cellProjectPara.classList.add('todo-project');
		cellProjectPara.textContent = todo.project;
		cellProject.appendChild(cellProjectPara);

		const deleteCell = newRow.insertCell();
		const deleteBtn = document.createElement('button');
		deleteBtn.textContent = 'X';
		deleteBtn.setAttribute('id', todo.id);
		deleteCell.appendChild(deleteBtn);

		// Event Listner to Delete Task
		deleteBtn.addEventListener('click', (e) => {
			todos.forEach((item) => {
				if (parseInt(deleteBtn.id) === parseInt(item.id)) {
					const index = todos.indexOf(item);
					todos.splice(index, 1);
					newRow.remove();
				}
			});
		});
	};

	// Iterate over the todo list and append to DOM
	if (!projectFilter) {
		todos.forEach((todo) => {
			renderMethod(todo);
		});
	} else {
		todos.forEach((todo) => {
			if (todo.project === projectFilter) {
				renderMethod(todo);
			}
		});
	}
};

export default renderTodos;
