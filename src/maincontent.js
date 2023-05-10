const contentContainer = document.createElement("div");
const taskContainer = document.createElement("div");
const sidebar = document.createElement("div");
const sidebarList = document.createElement("ul");
const allContainer = document.createElement("li");
const todayContainer = document.createElement("li");
const thisWeekContainer = document.createElement("li");
const all = document.createElement("p");
const today = document.createElement("p");
const thisWeek = document.createElement("p");

all.innerHTML = "All";
today.innerHTML = "Today";
thisWeek.innerHTML = "This Week";
taskContainer.innerHTML = "This is where all the tasks will go";
contentContainer.setAttribute("id", "mainContent");
sidebar.setAttribute("id", "sidebar");

allContainer.appendChild(all);
todayContainer.appendChild(today);
thisWeekContainer.appendChild(thisWeek);

sidebarList.appendChild(allContainer);
sidebarList.appendChild(todayContainer);
sidebarList.appendChild(thisWeekContainer);
sidebar.appendChild(sidebarList);
contentContainer.appendChild(sidebar);
contentContainer.appendChild(taskContainer);

export default contentContainer;
