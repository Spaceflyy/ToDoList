const view = () => {
	const root = document.getElementById("sidebar");
	const form = document.getElementById("projectForm");
	const titleInput = document.getElementById("titleInput");
	// const taskSectionTitle = document.createElement("h1");
	// taskSectionTitle.textContent = "To Dos";

	const projectList = document.createElement("ul");
	const taskSection = document.getElementById("tasks");

	root.append(projectList);

	function updateProjects(projects) {
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
	}

	function updateTasks(tasks) {
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
	}

	const getTitleText = () => {
		return titleInput.value;
	};

	function bindTitleSubmit(handler) {
		form.addEventListener("submit", (event) => {
			event.preventDefault();
			handler(getTitleText());
			form.reset();
		});
	}

	function bindClick(handler) {
		root.addEventListener("click", (event) => {
			handler(event);
		});
	}

	return { updateTasks, bindClick, bindTitleSubmit, updateProjects };
};

export default view;
