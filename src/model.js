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
			taskList: [
				{ id: 0, title: "Test Task1", desc: "Test desc" },
				{ id: 0, title: "Test Task1", desc: "Test desc" },
				{ id: 0, title: "Test Task1", desc: "Test desc" },
			],
		},
	];

	const project = (id, title, taskList) => {
		return { id, title, taskList };
	};

	const task = (id, title, desc, dueDate, priority, completed = false) => {
		return { id, title, desc, dueDate, priority, completed };
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
		currentProject = projectsList.length - 1;
		PubSub.publish("tasksUpdated", projectsList[getCurrentProject()]);
		PubSub.publish("ListUpdated", projectsList);
	};

	const addTask = (freshTask) => {
		const id =
			projectsList[getCurrentProject()].taskList.length > 0
				? projectsList[getCurrentProject()].taskList[
						projectsList[getCurrentProject()].taskList.length - 1
				  ].id + 1
				: 0;

		const newTask = task(
			id,
			freshTask[0],
			freshTask[1],
			freshTask[2],
			freshTask[3]
		);
		projectsList[getCurrentProject()].taskList.push(newTask);

		PubSub.publish("tasksUpdated", projectsList[getCurrentProject()]);
	};

	const deleteProject = (id) => {
		const index = projectsList.findIndex((proj) => {
			return proj.id === Number(id);
		});
		projectsList.splice(index, 1);
		currentProject -= 1;
		PubSub.publish("ListUpdated", projectsList);
		PubSub.publish("tasksUpdated", projectsList[getCurrentProject()]);
	};

	const deleteTask = (id) => {
		const index = projectsList[getCurrentProject()].taskList.findIndex(
			(taskid) => {
				return taskid.id === Number(id);
			}
		);

		projectsList[getCurrentProject()].taskList.splice(index, 1);
		PubSub.publish("tasksUpdated", projectsList[getCurrentProject()]);
	};

	return {
		getCurrentProject,
		projectsList,
		addProject,

		addTask,
		deleteProject,
		setCurrentProject,
		deleteTask,
	};
};

export default model();