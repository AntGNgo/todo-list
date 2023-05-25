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

const newTask = (task, date, priority) => {
	let taskToAdd = {
		task,
		date,
		priority,
		completed: false,
	};
	todos.push(taskToAdd);
};

newTask('Dance', '5/15/2222', 3);

todos.forEach((todo) => {
	console.log(todo);
});
