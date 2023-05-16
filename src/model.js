/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */
import PubSub from "pubsub-js";

const model = () => {
	const projectsList = [
		{
			id: 0,
			title: "Test Project 1",
			taskList: [{ id: 0, title: "Test Task1", desc: "Test desc" }],
		},
		{
			id: 1,
			title: "Test Project 2",
			taskList: [
				{ id: 0, title: "Test Task1 ", desc: "Test desc " },
				{ id: 0, title: "Test Task1 ", desc: "Test desc " },
				{ id: 0, title: "Test Task1 ", desc: "Test desc " },
			],
		},
	];

	const project = (id, title, taskList) => {
		return { id, title, taskList };
	};

	const task = (title, desc, dueDate, priority) => {
		return { title, desc, dueDate, priority };
	};

	const addProject = (id, title, taskList = []) => {
		id =
			projectsList.length > 0 ? projectsList[projectsList.length - 1].id + 1 : 0;

		const newProject = project(id, title, taskList);
		projectsList.push(newProject);
		PubSub.publish("ListUpdated", projectsList);
	};

	const deleteProject = (id) => {
		const index = projectsList.findIndex((proj) => {
			return proj.id === Number(id);
		});
		projectsList.splice(index, 1);
		PubSub.publish("ListUpdated", projectsList);
	};

	const addTask = (projectId, title, desc, dueDate, priority) => {
		const newTask = task(title, desc, dueDate, priority);
		projectsList[projectId].taskList.push(newTask);
	};

	const getProjectTasks = (projId) => {
		const index = projectsList.findIndex((proj) => {
			return proj.id === Number(projId);
		});
		return projectsList[index].taskList;
	};

	return { projectsList, addProject, getProjectTasks, addTask, deleteProject };
};

export default model();
