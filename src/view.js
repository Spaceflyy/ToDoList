/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */
import del from "./icons/delete.svg";
import edt from "./icons/edit.svg";

const view = () => {
	const root = document.getElementById("mainContent");
	const projectform = document.getElementById("projectForm");
	const taskForm = document.getElementById("taskForm");
	const titleInput = document.getElementById("titleInput");
	const taskSection = document.getElementById("taskList");
	const projectList = document.getElementById("projectList");
	const projCloseButton = document.getElementById("projCloseButton");
	const taskCloseButton = document.getElementById("taskCloseButton");
	const addTaskBtn = document.getElementById("addTaskBtn");
	const taskTitleInput = document.getElementById("taskTitleInput");
	const taskDescInput = document.getElementById("descInput");
	const taskDateInput = document.getElementById("dueInput");
	const taskPriInput = document.getElementById("priInput");

	const createImg = (name, image, idName) => {
		name = new Image();
		name.src = image;
		name.setAttribute("id", idName);
		return name;
	};

	const showModal = (thisModal) => {
		const modal = document.querySelector(thisModal);

		modal.style.display === "flex"
			? (modal.style.display = "none")
			: (modal.style.display = "flex");
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

	const bindTitleSubmit = (handler) => {
		projectform.addEventListener("submit", (event) => {
			event.preventDefault();
			handler(getTitleText());
			projectform.reset();
		});
	};

	const bindTaskSubmit = (handler) => {
		taskForm.addEventListener("submit", (event) => {
			event.preventDefault();
			handler(getTaskInfo());
			taskForm.reset();
		});
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
				proj.append(createImg("editIcon", edt, "projEdt"));
				proj.append(createImg("delIcon", del, "projDel"));
				projectList.append(proj);
				projectList.append(addProjBtn);
			});
		}
	};

	const updateTasks = (proj) => {
		while (taskSection.firstChild) {
			taskSection.removeChild(taskSection.firstChild);
		}

		const title = document.querySelector("#taskContainer h2");
		title.textContent = proj.title;
		if (proj.taskList.length === 0) {
			const empty = document.createElement("h3");
			empty.textContent = "There's nothing here, Create a new task!";
			taskSection.append(empty);
		} else {
			proj.taskList.forEach((element) => {
				const task = document.createElement("li");
				const check = document.createElement("input");
				const Tastitle = document.createElement("p");
				const description = document.createElement("p");
				const date = document.createElement("p");
				const pri = document.createElement("p");
				Tastitle.innerText = element.title;
				description.innerText = element.desc;
				date.innerText = element.dueDate;
				pri.innerText = element.priority;

				check.setAttribute("type", "checkbox");
				task.classList.add("task");
				task.setAttribute("data-task-id", element.id);
				task.append(check);
				task.append(Tastitle);
				task.append(description);
				task.append(date);
				task.append(pri);
				task.append(createImg("editIcon", edt, "taskEdt"));
				task.append(createImg("delIcon", del, "taskDel"));
				taskSection.append(task);
			});
		}
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
	};
};

export default view;
