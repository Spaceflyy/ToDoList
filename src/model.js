/* eslint-disable import/no-extraneous-dependencies */
import PubSub from "pubsub-js";

const model = () => {
	const currentProject = null;
	const projectsList = [
		// {
		// 	id: 0,
		// 	title: "Test Project 1",
		// 	taskList: [{ id: 0, title: "Test Task1", desc: "Test desc" }],
		// },
		// {
		// 	id: 1,
		// 	title: "Test Project 2",
		// 	taskList: [
		// 		{ id: 0, title: "Test Task1", desc: "Test desc" },
		// 		{ id: 0, title: "Test Task1", desc: "Test desc" },
		// 		{ id: 0, title: "Test Task1", desc: "Test desc" },
		// 	],
		// },
	];

	const project = (id, title, taskList) => {
		return { id, title, taskList };
	};

	function addProject(id, title, taskList = []) {
		id =
			projectsList.length > 0 ? projectsList[projectsList.length - 1].id + 1 : 0;

		const newProject = project(id, title, taskList);
		projectsList.push(newProject);
		PubSub.publish("ListUpdated", projectsList);
	}

	const getProjectTasks = (projId) => {
		return projectsList[projId].taskList;
	};

	return { projectsList, addProject, getProjectTasks };
};

export default model();
