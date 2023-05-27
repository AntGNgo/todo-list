const newTodo = document.getElementById('new-todo');

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
		todoList.forEach((todo) => {
			console.log(todo);
		});
	}
}

newTodo.addEventListener('keypress', (e) => {
	if (e.key === 'Enter') {
		let task = new Task(e.target.value, '2/2/2', 0);
		task.pushToList(todos);
		e.target.value = '';
		appendTodo(task.task);
	}
});

// Append to DOM
const appendTodo = (task, date, priority) => {
	const tBodyRef = document.getElementById('tbody');
	console.log(tBodyRef);

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
};

const tdCheckbox = document.createElement('td');
