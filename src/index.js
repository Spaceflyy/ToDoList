/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
import "./style.css";
import PubSub from "pubsub-js";
import view from "./view";
import model from "./model";

const header = document.createElement("div");
const title = document.createElement("h1");

title.innerHTML = "To Do List";
header.setAttribute("id", "header");
header.appendChild(title);

const controller = (() => {
	const viewable = view();

	viewable.updateProjects(model.projectsList);
	viewable.updateTasks(model.projectsList[model.getCurrentProject()]);
	viewable.setActiveProject(model.getCurrentProject());

	const handleAddProject = (projectTitle) => {
		model.addProject(0, projectTitle);
	};

	const handleAddTask = (task) => {
		model.addTask(task);
	};

	const handleEditTask = (updateTask) => {
		model.updateTask(updateTask);
	};
	const handleEditProject = (newTitle) => {
		model.updateProject(viewable.getProjToEdit(), newTitle);
	};
	const handleClick = (event) => {
		const { target } = event;

		if (target.classList.contains("project")) {
			model.setCurrentProject(target.getAttribute("data-project-id"));
			viewable.setActiveProject(model.getCurrentProject());
			viewable.updateTasks(model.projectsList[model.getCurrentProject()]);
		}
		if (target.getAttribute("id") === "taskEdt") {
			viewable.showModal(
				model.projectsList[model.getCurrentProject()].taskList[
					target.parentElement.getAttribute("data-task-id")
				],
				"taskEdit"
			);
		}

		if (target.getAttribute("id") === "projEdt") {
			const clickedProject = target.parentElement.getAttribute("data-project-id");
			viewable.showModal(model.projectsList[clickedProject], "projEdit");
		}

		if (
			target.getAttribute("id") === "addProjectBtn" ||
			target.getAttribute("id") === "projCloseButton"
		) {
			viewable.showModal("", "projectForm");
		}

		if (
			target.getAttribute("id") === "addTaskBtn" ||
			target.getAttribute("id") === "taskCloseButton"
		) {
			viewable.showModal("", "taskForm");
		}

		if (target.getAttribute("id") === "projDel") {
			model.deleteProject(target.parentElement.getAttribute("data-project-id"));
		}

		if (target.getAttribute("id") === "taskDel") {
			model.deleteTask(target.parentElement.getAttribute("data-task-id"));
		}
	};

	PubSub.subscribe("ListUpdated", (msg, data) => {
		viewable.updateProjects(data);
		viewable.setActiveProject(model.getCurrentProject());
	});

	PubSub.subscribe("tasksUpdated", (msg, data) => {
		viewable.updateTasks(data);
		viewable.setActiveProject(model.getCurrentProject());
	});
	viewable.bindProjectEdit(handleEditProject);
	viewable.bindTaskEdit(handleEditTask);
	viewable.bindClick(handleClick);
	viewable.bindTitleSubmit(handleAddProject);
	viewable.bindTaskSubmit(handleAddTask);
})(model, view);
