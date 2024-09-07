// const inputBox = document.querySelector("#input-box");
// const form = document.querySelector("#form");
// const list = document.querySelector("#list-container");
// const btn = document.querySelector("#btn");
// form.addEventListener("submit", (e) => {
// 	e.preventDefault();
// });

// btn.addEventListener("click", addTask);

// function addTask() {
// 	if (inputBox.value === "" || inputBox.value === null) {
// 		alert("error");
// 	} else {
// 		const li = document.createElement("li");
// 		li.innerHTML = inputBox.value;
// 		list.append(li);
// 		const span = document.createElement("span");
// 		span.innerHTML = "\u00d7";
// 		li.appendChild(span);
// 	}
// 	inputBox.value = "";
// 	saveData();
// }

// list.addEventListener("click", (e) => {
// if (e.target.tagName === "LI") {
// 	e.target.classList.toggle("checked");
// 	saveData();
// } else if (e.target.tagName === "SPAN") {
// 	e.target.parentElement.remove();
// 		saveData();
// 	}
// });
// function saveData() {
// 	localStorage.setItem("data", list.innerHTML);
// }
// function showTask() {
// 	list.innerHTML = localStorage.getItem("data");
// }
// showTask();

const inputBox = $("#input-box");
const form = $("#form");
const list = $("#list-container");
const btn = $("#btn");

$(form).submit((e) => {
	e.preventDefault();
});

function addTask() {
	if (inputBox.val() === "" || inputBox.val() === null) {
		errorSet("Please fill in the required field.");
	} else {
		errorSet("");
		const li = $("<li>");
		li.html(inputBox.val());
		list.append(li);
		const span = $("<span>").html("\u00d7");
		li.append(span);
	}
	inputBox.val("");
}

$(list).click((e) => {
	if (e.target.tagName === "LI") {
		e.target.classList.toggle("checked");
		saveData();
	} else if (e.target.tagName === "SPAN") {
		e.target.parentElement.remove();
	}
});

$(btn).click(addTask);

function errorSet(text) {
	$("#error").html(text);
}
