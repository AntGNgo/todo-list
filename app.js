const newTodo = document.getElementById("new-todo");

// Array of Task Objects
const todos = [
  {
    task: "Wash the Dishes",
    dueDate: "5/12/2023",
    priority: 0,
    completed: false,
  },
];

// const newTask = (task, date, priority) => {
//   let taskToAdd = {
//     task,
//     date,
//     priority,
//     completed: false,
//   };
//   todos.push(taskToAdd);
// };

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

let task = new Task("Cook", "2/2/2", 3);

task.pushToList(todos);

const tr = document.createElement("tr");
tr.classList.add("todo");

const tdCheckbox = document.createElement("td");
