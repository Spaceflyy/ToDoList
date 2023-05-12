const view = () => {
	const root = document.getElementById("sidebar");
	const form = document.getElementById("projectForm");
	const titleInput = document.getElementById("titleInput");
	// const taskSectionTitle = document.createElement("h1");
	// taskSectionTitle.textContent = "To Dos";

	const projectList = document.createElement("ul");

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
				proj.textContent = element.title;
				projectList.append(proj);
			});
		}
	}

	const getTitleText = () => {
		return titleInput.value;
	};

	function bindClick(handler) {
		form.addEventListener("submit", (event) => {
			event.preventDefault();
			handler(getTitleText());
			form.reset();
		});
	}

	return { bindClick, updateProjects };
};

export default view;
