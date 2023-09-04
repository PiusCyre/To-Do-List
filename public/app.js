"use strict";

const addTaskBtn = document.querySelector("#add-task-btn");

const todoInput = document.querySelector("#todo-input");

const todoList = document.querySelector("#todo-list");

const noItem = document.querySelector("#no-item");

//console.log(todoList);

// add a task
function addTask() {
  const taskText = todoInput.value.trim();

  if (taskText !== "") {
    const taskItem = createTaskItem(taskText);
    todoList.appendChild(taskItem);
    todoInput.value = "";
  }
}
// create new items
function createTaskItem(taskText) {
  const taskItem = document.createElement("li");
  taskItem.classList.add(
    "flex",
    "justify-between",
    "gap-3",
    "m-4",
    "px-4",
    "py-2",
    "items-center",
    "bg-white",
    "rounded-lg",
    "text-orange-400"
  );

  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  // checkBox.classList.toggle("hover:cursor-pointer", "caret-orange-400");

  const taskTextSpan = document.createElement("span");
  taskTextSpan.textContent = taskText;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add(
    "bg-orange-400",
    "rounded-2xl",
    "px-3",
    "font-bold",
    "uppercase",
    "py-2",
    "hover:shadow-md",
    "hover:bg-orange-500",
    "transition-all",
    "duration-800",
    "hover:shadow-orange-100",
    "text-white"
  );
  deleteBtn.addEventListener("click", deleteTask);

  // ! appendix
  taskItem.appendChild(checkBox);
  taskItem.appendChild(taskTextSpan);
  taskItem.appendChild(deleteBtn);

  if (taskItem) {
    noItem.style.display = "none";
  } else {
    noItem.style.display = "block";
    // noItem.textContent = "All Previous Tasks Completed";
  }

  return taskItem;
}
//delete tasks
const deleteTask = (e) => {
  const taskItem = e.target.parentNode;
  todoList.removeChild(taskItem);

  if (todoList.childElementCount === 0) {
    noItem.style.display = "block";
    noItem.textContent = "All Previous Tasks Completed...";
  }
};
//cross out items
const toggleTask = (e) => {
  const taskItem = e.target.parentNode;
  taskItem.classList.toggle(
    "line-through",
    "opacity-70",
    "decoration-orange-400",
    "bg-orange-400",
    "transition-colors",
    "duration-1000",
    "ease-in-out"
  );
};
//event listeners
addTaskBtn.addEventListener("click", addTask);

todoInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});

todoList.addEventListener("change", toggleTask);

const timeNdAffection = document.getElementById("time");

const showDate = () => {
  const date = new Date();
  timeNdAffection.textContent = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;
};

setInterval(showDate, 1000);

//exempli gratia of tasks
