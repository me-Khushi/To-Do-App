let input = document.querySelector("#inputbox");
let addBtn = document.querySelector("#add-btn");
let taskList = document.querySelector("#task-list");

addBtn.addEventListener("click", () => {
    let task = input.value;
    if (task.trim() === "") {
        alert("Please enter a task");
        return;
    }
    let li = document.createElement("li");
    let span = document.createElement("span");
    span.textContent = task;

    let deleteBtn = document.createElement("button");

    let img = document.createElement("img");
    img.src = "close.png";
    img.alt = "Delete";
    deleteBtn.appendChild(img);
    deleteBtn.classList.add("delete-btn");

    deleteBtn.addEventListener("click", () => {
        taskList.removeChild(li);
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    input.value = "";
});

taskList.addEventListener("click", (e) => {
    if (e.target.tagName === "SPAN") {
        e.target.classList.toggle("completed");
    }
});

input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        addBtn.click();
    }
});
