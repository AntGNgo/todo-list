const viewUpdate = (newView) => {
  const activeView = document.getElementById("active-view");
  const allView = document.getElementById("all-view");
  const todayView = document.getElementById("today-view");
  const weekView = document.getElementById("week-view");
  const somedayView = document.getElementById("someday-view");

  allView.addEventListener("click", () => {
    activeView.textContent = "All";
  });

  todayView.addEventListener("click", () => {
    activeView.textContent = "Today";
  });

  weekView.addEventListener("click", () => {
    activeView.textContent = "This Week";
  });

  somedayView.addEventListener("click", () => {
    activeView.textContent = "Someday";
  });

  if (newView) {
    activeView.textContent = newView;
  }
};

export default viewUpdate;
