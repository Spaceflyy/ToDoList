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

	const handleClick = (event) => {
		const { target } = event;
		if (target.classList.contains("project")) {
			viewable.updateTasks(
				model.getProjectTasks(target.getAttribute("data-project-id"))
			);
		}

		if (
			target.getAttribute("id") === "addProjectBtn" ||
			target.getAttribute("id") === "closeButton"
		) {
			viewable.showModal();
		}

		if (target.getAttribute("id") === "projDel") {
			model.deleteProject(target.parentElement.getAttribute("data-project-id"));
		}
	};

	PubSub.subscribe("ListUpdated", (msg, data) => {
		viewable.updateProjects(data);
	});

	viewable.bindClick(handleClick);
	viewable.bindTitleSubmit(handleAddProject);
})(model, view);
