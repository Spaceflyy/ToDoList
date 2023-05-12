const view = () => {
	const root = document.getElementById("sidebar");
	// const taskSectionTitle = document.createElement("h1");
	// taskSectionTitle.textContent = "To Dos";

	const projectList = document.createElement("ul");

	root.append(projectList);

	function updateProjects(projects) {
		while (projectList.firstChild) {
			projectList.removeChild(projectList.firstChild);
		}
		if (projects.length === 0) {
			const empty = document.createElement("p");
			empty.textContent = "Nothing here... Create a new project";
			projectList.append(empty);
		} else {
			projects.forEach((element) => {
				const proj = document.createElement("li");
				proj.textContent = element.title;
				projectList.append(proj);
			});
		}
	}

	function handleClick(handler) {
		root.addEventListener("click", (event) => {
			handler(event);
		});
	}

	return { handleClick, updateProjects };
};

export default view;
