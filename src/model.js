const model = () => {
	const currentProject = null;
	const projectsList = [];

	const addProject = (id, title, tasks) => {
		id =
			projectsList.length > 0 ? projectsList[projectsList.length - 1].id + 1 : 0;
		const newProject = { id, title, tasks };
		projectsList.push(newProject);
	};

	const removeProject = () => {};

	return { projectsList, addProject, removeProject };
};

export default model();
