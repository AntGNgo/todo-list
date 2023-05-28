const newTodo = document.getElementById('new-todo-name');
const addTodoBtn = document.getElementById('add-todo-btn');
const newTodoDate = document.getElementById('new-todo-date');
const newPriority = document.getElementById('new-priority');

// Array of Task Objects
const todos = [];
const projects = [];

class Task {
	constructor(task, date, priority, project) {
		this.task = task;
		this.date = date;
		this.priority = priority;
		this.completed = false;
		this.id = Math.floor(Math.random() * 5000);
		this.project = project;
	}

	pushToList(todoList) {
		todoList.push(this);
	}
}

newTodo.addEventListener('keypress', (e) => {
	if (e.key === 'Enter') {
		if (e.target.value.trim() !== '') {
			// let task = new Task(e.target.value, newTodoDate.value, newPriority.value);
			// task.pushToList(todos);
			// e.target.value = '';
			// appendTodo(task.task, task.date, task.priority, task.id);
			createTask();
		}
	}
});

addTodoBtn.addEventListener('click', () => {
	createTask(newTodo);
});

const createTask = () => {
	let task = new Task(newTodo.value, newTodoDate.value, newPriority.value);
	task.pushToList(todos);
	newTodo.value = '';
	appendTodo(task.task, task.date, task.priority, task.id);
};

// Append to DOM
const appendTodo = (task, date, priority, id) => {
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
				console.log('run');
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
	console.log(cellDatePara);
	cellDate.appendChild(cellDatePara);

	const cellPriority = newRow.insertCell();
	const cellPriorityPara = document.createElement('p');
	cellPriorityPara.classList.add('todo-priority');
	cellPriorityPara.textContent = priority;
	cellPriority.appendChild(cellPriorityPara);

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

// Project Logic
const projectsList = document.getElementById('projects-list');
const newProjectButton = document.getElementById('new-project-btn');
const newProjectName = document.getElementById('new-project-name');

newProjectButton.addEventListener('click', () => {
	newProjectName.classList.toggle('hidden');
});

newProjectName.addEventListener('keypress', (e) => {
	if (e.key === 'Enter' && e.target.value.trim() !== '') {
		projects.push(e.target.value);
		renderProjects();
		newProjectName.classList.toggle('hidden');
	}
});

const renderProjects = () => {
	while (projectsList.hasChildNodes()) {
		projectsList.removeChild(projectsList.lastChild);
	}
	projects.forEach((project) => {
		const item = document.createElement('li');
		item.textContent = project;
		projectsList.appendChild(item);
	});
};
