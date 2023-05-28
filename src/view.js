/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */
import { format } from "date-fns";
import del from "./icons/delete.svg";
import edt from "./icons/edit.svg";

let projToEdit;

const view = () => {
	const root = document.getElementById("mainContent");
	const projectForm = document.getElementById("projectForm");
	const taskForm = document.getElementById("taskForm");
	const titleInput = document.getElementById("titleInput");
	const taskSection = document.getElementById("taskList");
	const projectList = document.getElementById("projectList");
	const projCloseButton = document.getElementById("projCloseButton");
	const taskCloseButton = document.getElementById("taskCloseButton");
	const taskTitleInput = document.getElementById("taskTitleInput");
	const taskDescInput = document.getElementById("descInput");
	const taskDateInput = document.getElementById("dueInput");
	const taskPriInput = document.getElementById("priInput");
	const addTaskBtn = document.getElementById("addTaskBtn");
	const taskEditBtn = document.getElementById("taskEdit");
	const projectSubmitBtn = document.getElementById("projectSubmit");
	const projectEditBtn = document.getElementById("projectEdit");
	const taskSectionTitle = document.querySelector("#taskContainer h2");

	const createImg = (name, image, idName, className) => {
		name = new Image();
		name.src = image;
		name.setAttribute("id", idName);
		if (className !== undefined) {
			name.classList.add(className);
		}
		return name;
	};

	const showModal = (data, formToShow) => {
		const modal = document.querySelector(".projModalBg");
		const taskAddBtn = document.getElementById("taskSubmit");
		const title = document.querySelector("#modalTitle");
		const projModalTitle = document.querySelector("#projModalTitle");

		modal.style.display === "flex"
			? (modal.style.display = "none")
			: (modal.style.display = "flex");

		if (formToShow === "projectForm") {
			projectForm.reset();
			projModalTitle.textContent = "Add Project";
			projectForm.style.display = "block";
			taskForm.style.display = "none";
			projectSubmitBtn.style.display = "block";
			projectEditBtn.style.display = "none";
		}

		if (formToShow === "taskForm") {
			taskForm.reset();
			title.textContent = "Add Task";
			projectForm.style.display = "none";
			taskForm.style.display = "block";
			taskEditBtn.style.display = "none";
			taskAddBtn.style.display = "block";
		}

		if (formToShow === "taskEdit") {
			taskTitleInput.value = data.title;
			taskDescInput.value = data.desc;
			taskDateInput.value = data.dueDate;
			taskPriInput.value = data.priority;
			title.textContent = "Edit Task";
			projectForm.style.display = "none";
			taskForm.style.display = "block";
			taskEditBtn.style.display = "block";
			taskAddBtn.style.display = "none";
		}

		if (formToShow === "projEdit") {
			projModalTitle.textContent = "Edit Project";
			projectForm.style.display = "block";
			taskForm.style.display = "none";
			titleInput.value = data.title;
			projToEdit = data.id;
			projectSubmitBtn.style.display = "none";
			projectEditBtn.style.display = "block";
		}
	};

	const getProjToEdit = () => {
		return projToEdit;
	};

	const getTitleText = () => {
		return titleInput.value;
	};

	const getTaskInfo = () => {
		const task = [
			taskTitleInput.value,
			taskDescInput.value,
			taskDateInput.value,
			taskPriInput.value,
		];
		return task;
	};

	const updateProjects = (projects) => {
		while (projectList.firstChild) {
			projectList.removeChild(projectList.firstChild);
		}
		const addProjBtn = document.createElement("li");
		addProjBtn.setAttribute("id", "addProjectBtn");
		addProjBtn.textContent = "+";

		if (projects.length === 0) {
			const empty = document.createElement("p");
			empty.textContent = "There's nothing here! Add a Project!";
			projectList.append(empty);
			projectList.append(addProjBtn);
		} else {
			projects.forEach((element) => {
				const proj = document.createElement("li");
				proj.classList.add("project");
				proj.setAttribute("data-project-id", element.id);
				proj.textContent = element.title;
				proj.append(createImg("editIcon", edt, "projEdt", "icon"));
				proj.append(createImg("delIcon", del, "projDel", "icon"));

				projectList.append(proj);
				projectList.append(addProjBtn);
			});
		}
	};

	const setActiveProject = (currentProj) => {
		const projects = Array.from(document.querySelectorAll(".project"));

		projects.forEach((project) => {
			project.classList.remove("active");
			if (currentProj.id === Number(project.getAttribute("data-project-id"))) {
				project.classList.add("active");
				taskSectionTitle.textContent = currentProj.title;
			}
		});
	};

	const clearTasks = () => {
		while (taskSection.firstChild) {
			taskSection.removeChild(taskSection.firstChild);
		}
	};

	const updateTasks = (tasks) => {
		const empty = document.createElement("h3");
		const tasksDOMElements = document.querySelectorAll(".task");

		if (tasks === undefined) {
			clearTasks();
			taskSectionTitle.textContent = "Please select a project to view tasks";
			empty.textContent = "Please select a project to view tasks";
			taskSection.append(empty);
			addTaskBtn.style.display = "none";
			return;
		}

		if (tasks.length === 0) {
			clearTasks();
			empty.textContent = "There's nothing here, Create a new task!";
			taskSection.append(empty);
			addTaskBtn.style.display = "block";
		}

		if (tasks.length > 0) {
			clearTasks();
			tasks.forEach((element) => {
				const task = document.createElement("li");
				const check = document.createElement("input");
				const Tasktitle = document.createElement("p");
				const description = document.createElement("p");
				const date = document.createElement("p");
				const pri = document.createElement("p");
				Tasktitle.innerText = element.title;

				description.innerText = element.desc;
				date.innerText = format(new Date(element.dueDate), "dd/MM/yyyy");
				pri.innerText = element.priority;

				tasksDOMElements.forEach((taskElement) => {
					if (
						element.completed === true &&
						element.id === Number(taskElement.getAttribute("data-task-id"))
					) {
						check.checked = true;
						task.classList.add("taskCompleted");
					}
				});

				check.setAttribute("type", "checkbox");
				task.classList.add("task");
				task.setAttribute("data-task-id", element.id);
				task.append(check);
				task.append(Tasktitle);
				task.append(description);
				task.append(date);
				task.append(pri);
				task.append(createImg("editIcon", edt, "taskEdt", "icon"));
				task.append(createImg("delIcon", del, "taskDel", "icon"));
				taskSection.append(task);
			});
		}
	};

	const bindTitleSubmit = (handler) => {
		projectForm.addEventListener("submit", (event) => {
			event.preventDefault();
			handler(getTitleText());
			projectForm.reset();
		});
	};

	const bindTaskEdit = (handler) => {
		taskEditBtn.addEventListener("click", () => {
			handler(getTaskInfo());
			taskForm.reset();
			showModal("", "projEdit");
		});
	};

	const bindProjectEdit = (handler) => {
		projectEditBtn.addEventListener("click", () => {
			handler(getTitleText());
			// showModal("", "projectForm");
		});
	};

	const bindTaskSubmit = (handler) => {
		taskForm.addEventListener("submit", (event) => {
			event.preventDefault();
			handler(getTaskInfo());
			taskForm.reset();
		});
	};

	function bindClick(handler) {
		root.addEventListener("click", (event) => {
			handler(event);
		});

		projCloseButton.addEventListener("click", (event) => {
			handler(event);
		});

		taskCloseButton.addEventListener("click", (event) => {
			handler(event);
		});
	}

	return {
		showModal,
		updateTasks,
		bindClick,
		bindTitleSubmit,
		bindTaskSubmit,
		updateProjects,
		setActiveProject,
		bindTaskEdit,
		bindProjectEdit,
		getProjToEdit,
	};
};

export default view;
