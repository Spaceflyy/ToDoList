/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */
import PubSub from "pubsub-js";

const model = () => {
	let currentProject = 0;
	const projectsList = [
		{
			id: 0,
			title: "Test Project 1",
			taskList: [{ id: 0, title: "Test Task1", desc: "Test desc" }],
		},
		{
			id: 1,
			title: "Test Project 2",
			taskList: [],
		},
	];

	const project = (id, title, taskList) => {
		return { id, title, taskList };
	};

	const task = (title, desc, dueDate, priority) => {
		return { title, desc, dueDate, priority };
	};

	const setCurrentProject = (projId) => {
		const index = projectsList.findIndex((proj) => {
			return proj.id === Number(projId);
		});

		currentProject = index;
	};

	const getCurrentProject = () => {
		return currentProject;
	};

	const addProject = (id, title, taskList = []) => {
		id =
			projectsList.length > 0 ? projectsList[projectsList.length - 1].id + 1 : 0;

		const newProject = project(id, title, taskList);
		projectsList.push(newProject);
		PubSub.publish("ListUpdated", projectsList);
	};

	const addTask = (freshTask) => {
		const newTask = task(freshTask[0], freshTask[1], freshTask[2], freshTask[3]);
		projectsList[currentProject].taskList.push(newTask);
		PubSub.publish("tasksUpdated", projectsList[currentProject].taskList);
	};

	const deleteProject = (id) => {
		const index = projectsList.findIndex((proj) => {
			return proj.id === Number(id);
		});
		projectsList.splice(index, 1);
		PubSub.publish("ListUpdated", projectsList);
	};

	const getProjectTasks = (projId) => {
		const index = projectsList.findIndex((proj) => {
			return proj.id === Number(projId);
		});
		return projectsList[index].taskList;
	};

	return {
		getCurrentProject,
		projectsList,
		addProject,
		getProjectTasks,
		addTask,
		deleteProject,
		setCurrentProject,
	};
};

export default model();
