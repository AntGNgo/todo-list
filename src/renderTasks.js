const renderTasks = (tasksArray, filter) => {
	const tBody = document.getElementById('tbody');
	// TODO make option for filter
	if (!filter) {
		const newRow = tBody.insertRow();
		const newCell = newRow.insertCell();
		const newText = document.createTextNode('Hello Row');
		newCell.appendChild(newText);
	}
};

export default renderTasks;
