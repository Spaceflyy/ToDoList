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

	const handleAddProject = (projectTitle) => {
		model.addProject(0, projectTitle);
	};

	const handleAddTask = (task) => {
		model.addTask(task);
	};

	const handleClick = (event) => {
		const { target } = event;

		if (target.classList.contains("project")) {
			model.setCurrentProject(target.getAttribute("data-project-id"));
			viewable.updateTasks(
				model.getProjectTasks(target.getAttribute("data-project-id"))
			);
		}

		if (
			target.getAttribute("id") === "addProjectBtn" ||
			target.getAttribute("id") === "projCloseButton"
		) {
			viewable.showModal(".projModalBg");
		}

		if (
			target.getAttribute("id") === "addTaskBtn" ||
			target.getAttribute("id") === "taskCloseButton"
		) {
			viewable.showModal(".taskModalBg");
		}

		if (target.getAttribute("id") === "projDel") {
			model.deleteProject(target.parentElement.getAttribute("data-project-id"));
		}
	};

	PubSub.subscribe("ListUpdated", (msg, data) => {
		viewable.updateProjects(data);
	});

	PubSub.subscribe("tasksUpdated", (msg, data) => {
		viewable.updateTasks(data);
	});

	viewable.bindClick(handleClick);
	viewable.bindTitleSubmit(handleAddProject);
	viewable.bindTaskSubmit(handleAddTask);
})(model, view);