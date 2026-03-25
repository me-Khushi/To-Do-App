let input = document.querySelector("#inputbox");
let addBtn = document.querySelector("#add-btn");
let taskList = document.querySelector("#task-list");

addBtn.addEventListener("click", () => {
    let task = input.value;
    let li = document.createElement("li");
    if (task.trim() === "") {
        alert("Please enter a task");
        return;
    } else {
        li.textContent = task;
        taskList.appendChild(li);
        input.value = "";
    }
});

input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        console.log(e.key);
        addBtn.click();
    }
});