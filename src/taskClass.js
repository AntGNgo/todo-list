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

export default Task;
