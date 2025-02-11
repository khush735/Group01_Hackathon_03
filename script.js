// Select elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Function to create a new task item
function createTask(taskText) {
    // Create the list item
    const li = document.createElement("li");
    li.classList.add("task-item");

    // Create a span to hold the task text
    const span = document.createElement("span");
    span.textContent = taskText;
    li.appendChild(span);

    // Create a button to remove the task
    const removeBtn = document.createElement("button");
    removeBtn.classList.add("remove");
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener("click", function () {
        li.remove(); // Remove the task from the list
    });
    li.appendChild(removeBtn);

    // Add event listener to toggle completion of the task
    li.addEventListener("click", function () {
        li.classList.toggle("completed");
    });

    // Append the list item to the task list
    taskList.appendChild(li);
}

// Event listener for the Add Task button
addTaskBtn.addEventListener("click", function () {
    const taskText = taskInput.value.trim();

    if (taskText) {
        createTask(taskText); // Create the task
        taskInput.value = ""; // Clear input field
    } else {
        alert("Please enter a task!");
    }
});

// Optional: Allow Enter key to add tasks
taskInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addTaskBtn.click(); // Trigger the Add Task button click event
    }
});
