/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */
import PubSub from "pubsub-js";
import { parseISO, isThisWeek, isThisMonth } from "date-fns";

const model = () => {
	let currentProject = 0;

	let projectsList = [
		{
			id: 0,
			title: "All",
			taskList: [],
		},
		{
			id: 1,
			title: "This Week",
			taskList: [],
		},
		{
			id: 2,
			title: "This Month",
			taskList: [],
		},
		{
			id: 3,
			title: "Test Project 1",
			taskList: [
				{
					id: 0,
					projectId: 3,
					title: "Test Task 1",
					desc: "Project 1 ",
					dueDate: "2023-05-06",
					priority: "High",
					completed: false,
				},
				{
					id: 1,
					projectId: 3,
					title: "Test Task 2",
					desc: "Project 1 ",
					dueDate: "2023-05-06",
					priority: "High",
					completed: false,
				},
				{
					id: 2,
					projectId: 3,
					title: "Test Task 3",
					desc: "Project 1 ",
					dueDate: "2023-05-06",
					priority: "High",
					completed: false,
				},
			],
		},
		{
			id: 4,
			title: "Test Project 2",
			taskList: [
				{
					projectId: 4,
					id: 0,
					title: "Test Task 1",
					desc: "Project 2 ",
					dueDate: "2023-05-06",
					priority: "High",
					completed: false,
				},
				{
					projectId: 4,
					id: 1,
					title: "Test Task 2",
					desc: "Project 2 ",
					dueDate: "2023-05-06",
					priority: "High",
					completed: false,
				},
				{
					projectId: 4,
					id: 2,
					title: "Test Task 3",
					desc: "Project 2 ",
					dueDate: "2023-06-04",
					priority: "High",
					completed: false,
				},
			],
		},
	];

	const updateStorage = () => {
		localStorage.setItem("projects", JSON.stringify(projectsList));
	};

	const getFromStorage = () => {
		const items = localStorage.getItem("projects");

		return JSON.parse(items);
	};

	if (!(localStorage.getItem("projects") === null)) {
		window.onload = projectsList = getFromStorage();
	}

	const getAllProjectTasks = () => {
		const allTasks = [];

		projectsList.forEach((project) => {
			if (!(project.id === 0 || project.id === 1 || project.id === 2)) {
				if (project.taskList.length > 0) {
					project.taskList.forEach((task) => {
						allTasks.push(task);
					});
				}
			}
		});

		return allTasks;
	};

	const getWeekTasks = (allTasks) => {
		const weekTasks = [];

		allTasks = getAllProjectTasks();

		allTasks.forEach((task) => {
			if (isThisWeek(parseISO(task.dueDate), { weekStartsOn: 1 })) {
				weekTasks.push(task);
			}
		});
		return weekTasks;
	};

	const getMonthTasks = (allTasks) => {
		const monthTasks = [];

		allTasks = getAllProjectTasks();

		allTasks.forEach((task) => {
			if (isThisMonth(parseISO(task.dueDate))) {
				monthTasks.push(task);
			}
		});
		return monthTasks;
	};

	const project = (id, title, taskList) => {
		return { id, title, taskList };
	};

	const task = (
		id,
		projectId,
		title,
		desc,
		dueDate,
		priority,
		completed = false
	) => {
		return { id, projectId, title, desc, dueDate, priority, completed };
	};

	const getClickedProject = (projId) => {
		const projectFound = projectsList.find((proj) => {
			return proj.id === Number(projId);
		});

		return projectFound;
	};

	const setCurrentProject = (projId) => {
		const index = projectsList
			.map((el) => {
				return el.id;
			})
			.indexOf(Number(projId));
		currentProject = index;
	};

	const getCurrentProject = () => {
		return currentProject;
	};

	const setPermanentTasks = () => {
		projectsList[0].taskList = [];
		projectsList[0].taskList = getAllProjectTasks();
		projectsList[1].taskList = [];
		projectsList[1].taskList = getWeekTasks();
		projectsList[2].taskList = [];
		projectsList[2].taskList = getMonthTasks();
	};

	const toggleCompleted = (projId, taskId) => {
		const foundTask = projectsList[projId].taskList.find((T) => {
			return T.id === Number(taskId);
		});

		if (foundTask.completed) {
			foundTask.completed = false;
		} else {
			foundTask.completed = true;
		}

		PubSub.publish("tasksUpdated", projectsList[getCurrentProject()]);
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
		const projectId = getCurrentProject();
		const newTask = task(
			id,
			projectId,
			freshTask[0],
			freshTask[1],
			freshTask[2],
			freshTask[3]
		);

		projectsList[getCurrentProject()].taskList.push(newTask);
		setPermanentTasks();
		PubSub.publish("tasksUpdated", projectsList[getCurrentProject()]);
	};

	const deleteProject = (id) => {
		const index = projectsList.findIndex((proj) => {
			return proj.id === Number(id);
		});

		projectsList.splice(index, 1);

		if (!(currentProject === 0)) {
			currentProject -= 1;
		}
		for (let i = 0; i < projectsList.length; i += 1) {
			projectsList[i].id = i;
		}

		if (projectsList[getCurrentProject()] === undefined) {
			PubSub.publish("tasksUpdated", undefined);
		} else {
			setPermanentTasks();
			PubSub.publish("tasksUpdated", projectsList[getCurrentProject()]);
		}

		PubSub.publish("ListUpdated", projectsList);
	};

	const deleteTask = (projectid, id) => {
		const index = projectsList[projectid].taskList.findIndex((taskid) => {
			return taskid.id === Number(id);
		});

		projectsList[projectid].taskList.splice(index, 1);
		setPermanentTasks();
		PubSub.publish("tasksUpdated", projectsList[getCurrentProject()]);
	};

	const updateTask = (updatedTask) => {
		const currentProjTasks = projectsList[currentProject].taskList;
		const [newTitle, newDesc, newDate, newPri] = updatedTask;

		currentProjTasks[0].title = newTitle;
		currentProjTasks[0].desc = newDesc;
		currentProjTasks[0].dueDate = newDate;
		currentProjTasks[0].priority = newPri;

		PubSub.publish("tasksUpdated", projectsList[getCurrentProject()]);
	};

	const updateProject = (id, newtitle) => {
		projectsList[id].title = newtitle;
		PubSub.publish("ListUpdated", projectsList);
	};

	return {
		getCurrentProject,
		projectsList,
		addProject,
		updateTask,
		addTask,
		deleteProject,
		setCurrentProject,
		deleteTask,
		updateProject,
		getClickedProject,
		getAllProjectTasks,
		toggleCompleted,
		getWeekTasks,
		getMonthTasks,
		setPermanentTasks,
		getFromStorage,
		updateStorage,
	};
};

export default model();
