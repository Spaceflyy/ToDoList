import "./style.css";
import view from "./view";
import model from "./model";
import createMainElements from "./maincontent";

const header = document.createElement("div");
const title = document.createElement("h1");

title.innerHTML = "To Do List";
header.setAttribute("id", "header");
header.appendChild(title);

document.body.appendChild(header);
document.body.appendChild(createMainElements());

const controller = (() => {
	const viewable = view();

	const handleEvent = (event) => {
		console.log(event.target.textContent);
	};

	viewable.handleClick(handleEvent);
	viewable.updateProjects(model.projectsList);
})(model, view);
