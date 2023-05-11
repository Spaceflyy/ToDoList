const createMainElements = () => {
	const contentContainer = document.createElement("div");
	const taskContainer = document.createElement("div");
	const sidebar = document.createElement("div");
	const sidebarList = document.createElement("ul");
	const allContainer = document.createElement("li");
	const todayContainer = document.createElement("li");
	const thisWeekContainer = document.createElement("li");
	const all = document.createElement("p");
	const today = document.createElement("p");
	const thisWeek = document.createElement("p");
	const divider = document.createElement("div");
	const projectContainer = document.createElement("div");
	projectContainer.setAttribute("id", "projectContainer");
	taskContainer.setAttribute("id", "tasks");

	all.innerHTML = "All";
	today.innerHTML = "Today";
	thisWeek.innerHTML = "This Week";
	taskContainer.innerHTML = "This is where all the tasks will go";
	contentContainer.setAttribute("id", "mainContent");
	sidebar.setAttribute("id", "sidebar");
	divider.classList.add("line");

	allContainer.appendChild(all);
	todayContainer.appendChild(today);
	thisWeekContainer.appendChild(thisWeek);

	sidebarList.appendChild(allContainer);
	sidebarList.appendChild(todayContainer);
	sidebarList.appendChild(thisWeekContainer);
	sidebar.appendChild(sidebarList);
	sidebar.appendChild(divider);
	sidebar.appendChild(projectContainer);
	contentContainer.appendChild(sidebar);
	contentContainer.appendChild(taskContainer);

	return contentContainer;
};
export default createMainElements;
