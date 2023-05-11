import "./style.css";
import controller from "./controller";
import createMainElements from "./maincontent";

const header = document.createElement("div");
const title = document.createElement("h1");

title.innerHTML = "To Do List";
header.setAttribute("id", "header");
header.appendChild(title);

document.body.appendChild(header);
document.body.appendChild(createMainElements());

const newController = controller();

// newController.model.addProject("", "Test Project1", {
// 	Title: "Test Task",
// 	desc: "Test Desc",
// });
// newController.model.addProject("", "Test Project2", {
// 	Title: "Test Task",
// 	desc: "Test Desc",
// });
// newController.model.addProject("", "Test Project3", {
// 	Title: "Test Task",
// 	desc: "Test Desc",
// });
// newController.model.addProject("", "Test Project4", {
// 	Title: "Test Task",
// 	desc: "Test Desc",
// });
// newController.model.addProject("", "Test Project5", {
// 	Title: "Test Task",
// 	desc: "Test Desc",
// });
newController.model.addProject("", "Test Project6", {
	Title: "Test Task",
	desc: "Test Desc",
});
newController.view().updateProjects(newController.model.projectsList);
