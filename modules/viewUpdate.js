const viewUpdate = () => {
	const activeView = document.getElementById('active-view');
	const todayView = document.getElementById('today-view');
	const weekView = document.getElementById('week-view');
	const somedayView = document.getElementById('someday-view');

	todayView.addEventListener('click', () => {
		activeView.textContent = 'Today';
	});

	weekView.addEventListener('click', () => {
		activeView.textContent = 'This Week';
	});

	somedayView.addEventListener('click', () => {
		activeView.textContent = 'Someday';
	});
};

export default viewUpdate;
