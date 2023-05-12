const model = () => {
	const currentProject = null;
	const projectsList = [];

	function addProject(id = 0, title, tasks) {
		id =
			projectsList.length > 0 ? projectsList[projectsList.length - 1].id + 1 : 0;
		const newProject = { id, title, tasks };
		projectsList.push(newProject);
	}

	return { projectsList, addProject };
};

export default model();
