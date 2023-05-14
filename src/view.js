/* eslint-disable no-unused-expressions */
const view = () => {
	const root = document.getElementById("sidebar");
	const form = document.getElementById("projectForm");
	const titleInput = document.getElementById("titleInput");
	const taskSection = document.getElementById("tasks");
	const projectList = document.getElementById("projectList");
	const closeButton = document.getElementById("closeButton");

	const updateProjects = (projects) => {
		while (projectList.firstChild) {
			projectList.removeChild(projectList.firstChild);
		}
		if (projects.length === 0) {
			const empty = document.createElement("li");
			empty.setAttribute("id", "addProjectBtn");

			empty.textContent = "+";
			projectList.append(empty);
		} else {
			projects.forEach((element) => {
				const proj = document.createElement("li");
				proj.classList.add("project");
				proj.setAttribute("data-project-id", element.id);
				proj.textContent = element.title;
				projectList.append(proj);
			});
		}
	};

	const updateTasks = (tasks) => {
		while (taskSection.firstChild) {
			taskSection.removeChild(taskSection.firstChild);
		}
		if (tasks.length === 0) {
			const empty = document.createElement("h1");
			empty.textContent = "There's nothing here, Create a new task!";
			// empty.setAttribute("id", "addProjectBtn");
			// empty.textContent = "+";
			taskSection.append(empty);
		} else {
			tasks.forEach((element) => {
				const task = document.createElement("li");
				task.classList.add("task");
				task.setAttribute("data-project-id", element.id);
				task.textContent = element.title;
				taskSection.append(task);
			});
		}
	};

	const showModal = () => {
		const modal = document.querySelector(".modal");
		modal.style.display === "block"
			? (modal.style.display = "none")
			: (modal.style.display = "block");
	};

	const getTitleText = () => {
		return titleInput.value;
	};

	const bindTitleSubmit = (handler) => {
		form.addEventListener("submit", (event) => {
			event.preventDefault();
			handler(getTitleText());
			form.reset();
		});
	};

	function bindClick(handler) {
		root.addEventListener("click", (event) => {
			handler(event);
		});

		closeButton.addEventListener("click", (event) => {
			handler(event);
		});
	}

	return { showModal, updateTasks, bindClick, bindTitleSubmit, updateProjects };
};

export default view;
