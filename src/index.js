import "./style.css";
import contentContainer from "./maincontent";
const header = document.createElement("div");
const title = document.createElement("h1");
title.innerHTML = "To Do List";
header.setAttribute("id", "header");
header.appendChild(title);

document.body.appendChild(header);
document.body.appendChild(contentContainer);
