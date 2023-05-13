/* eslint-disable no-unused-vars */
import "./style.css";
import PubSub from "pubsub-js";
import view from "./view";
import model from "./model";
import createMainElements from "./maincontent";

const header = document.createElement("div");
const title = document.createElement("h1");

title.innerHTML = "To Do List";
header.setAttribute("id", "header");
header.appendChild(title);

// /temp place for modal move when finished

const form = document.createElement("form");
form.setAttribute("id", "projectForm");
const modal = document.createElement("div");
modal.classList.add("modal");

const projectTitleLabel = document.createElement("label");
const projectTitleInput = document.createElement("input");
const submitBtn = document.createElement("input");
submitBtn.setAttribute("type", "submit");
const cancelBtn = document.createElement("button");
cancelBtn.setAttribute("type", "button");
cancelBtn.textContent = "Cancel";

projectTitleInput.setAttribute("required", "");
projectTitleLabel.textContent = "Title:";
projectTitleInput.setAttribute("type", "text");
projectTitleInput.setAttribute("id", "titleInput");
projectTitleLabel.appendChild(projectTitleInput);
form.appendChild(projectTitleLabel);
form.appendChild(cancelBtn);
form.appendChild(submitBtn);
modal.appendChild(form);

// /temp place for modal move when finished
document.body.appendChild(header);
document.body.appendChild(modal);
document.body.appendChild(createMainElements());

const controller = (() => {
	const viewable = view();

	viewable.updateProjects(model.projectsList);

	const handleAddProject = (projectTitle) => {
		model.addProject(0, projectTitle);
	};

	const handleClick = (event) => {
		if (event.target.classList.value === "project") {
			viewable.updateTasks(
				model.getProjectTasks(event.target.getAttribute("data-project-id"))
			);
		}
	};

	PubSub.subscribe("ListUpdated", (msg, data) => {
		viewable.updateProjects(data);
	});

	viewable.bindClick(handleClick);
	viewable.bindTitleSubmit(handleAddProject);
})(model, view);
