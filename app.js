const newTodo = document.getElementById('new-todo-name');
const addTodoBtn = document.getElementById('add-todo-btn');
const newTodoDate = document.getElementById('new-todo-date');
const newPriority = document.getElementById('new-priority');

const projectsList = document.getElementById('projects-list');
const newProjectButton = document.getElementById('new-project-btn');
const newProjectName = document.getElementById('new-project-name');
const projectsDropDown = document.getElementById('project');

const views = ['today', 'week', 'someday'];

const activeView = document.getElementById('active-view');
const todayView = document.getElementById('today-view');
const weekView = document.getElementById('week-view');
const somedayView = document.getElementById('someday-view');

// Array of Task and Projects
const todos = [];
const projects = [];

// Task Class
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

// Add Todo when enter key is pressed on input
newTodo.addEventListener('keypress', (e) => {
	if (e.key === 'Enter') {
		if (e.target.value.trim() !== '') {
			createTask();
		}
	}
});

// Add Todo when add task button is clicked
addTodoBtn.addEventListener('click', () => {
	if (newTodo.value.trim() !== '') {
		createTask(newTodo);
	}
});

// Shared function for both new task enter options
const createTask = () => {
	let task = new Task(
		newTodo.value,
		newTodoDate.value,
		newPriority.value,
		projectsDropDown.value
	);
	task.pushToList(todos);
	newTodo.value = '';
	appendTodo(task.task, task.date, task.priority, task.project, task.id);
};

// Append to task to DOM
const appendTodo = (task, date, priority, project, id) => {
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

// Project Logic
newProjectButton.addEventListener('click', () => {
	newProjectName.classList.toggle('hidden');
});

newProjectName.addEventListener('keypress', (e) => {
	if (e.key === 'Enter' && e.target.value.trim() !== '') {
		projects.push(e.target.value);
		updateProjectsDropdown();
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
		item.classList.add('project');
		item.textContent = project;
		projectsList.appendChild(item);

		item.addEventListener('click', () => {
			activeView.textContent = project;
		});
	});
};

const updateProjectsDropdown = () => {
	while (projectsDropDown.hasChildNodes()) {
		projectsDropDown.removeChild(projectsDropDown.lastChild);
	}
	const option = document.createElement('option');
	option.setAttribute('value', 'none');
	option.textContent = 'None';
	projectsDropDown.appendChild(option);

	projects.forEach((project) => {
		const option = document.createElement('option');
		option.setAttribute('value', project);
		option.textContent = project;
		projectsDropDown.appendChild(option);
	});
};

// Views

todayView.addEventListener('click', () => {
	activeView.textContent = 'Today';
});

weekView.addEventListener('click', () => {
	activeView.textContent = 'This Week';
});

somedayView.addEventListener('click', () => {
	activeView.textContent = 'Someday';
});
