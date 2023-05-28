const newTodo = document.getElementById('new-todo-name');
const newTodoDate = document.getElementById('new-todo-date');

// Array of Task Objects
const todos = [
	{
		task: 'Wash the Dishes',
		dueDate: '5/12/2023',
		priority: 0,
		completed: false,
	},
];

class Task {
	constructor(task, date, priority) {
		this.task = task;
		this.date = date;
		this.priority = priority;
		this.completed = false;
	}

	pushToList(todoList) {
		todoList.push(this);
	}
}

newTodo.addEventListener('keypress', (e) => {
	if (e.key === 'Enter') {
		if (e.target.value.trim() !== '') {
			console.log(newTodoDate.value);
			let task = new Task(e.target.value, newTodoDate.value, 0);
			console.log(newTodoDate.value);
			task.pushToList(todos);
			e.target.value = '';
			appendTodo(task.task, task.date);
		}
	}
});

// Append to DOM
const appendTodo = (task, date, priority) => {
	const tBodyRef = document.getElementById('tbody');

	const newRow = tBodyRef.insertRow();

	newRow.classList.add('todo');

	const cellInput = newRow.insertCell();
	const inputCheckbox = document.createElement('input');
	inputCheckbox.setAttribute('type', 'checkbox');

	cellInput.appendChild(inputCheckbox);

	const cellTitle = newRow.insertCell();
	const cellTitlePara = document.createElement('p');
	cellTitlePara.classList.add('todo-title');
	cellTitlePara.textContent = task;
	cellTitle.appendChild(cellTitlePara);

	const cellDate = newRow.insertCell();
	const cellDatePara = document.createElement('p');
	cellDatePara.classList.add('todo-duedate');
	console.log(`Passed value for date: ${date}`);
	cellDatePara.textContent = date;
	console.log(cellDatePara);
	cellDate.appendChild(cellDatePara);
};
