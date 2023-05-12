import "./style.css";
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

	const handleAddProject = (projectTitle) => {
		model.addProject(undefined, projectTitle);
		viewable.updateProjects(model.projectsList);
	};

	viewable.bindClick(handleAddProject);
})(model, view);
