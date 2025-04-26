const input = document.getElementById("taskInput");
const list = document.getElementById("taskList"); // Get the ul element

// Function to load tasks from local storage and display them
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    list.innerHTML = ""; // Clear current list

    if (tasks.length === 0) {
        // Display a message if the list is empty
        const message = document.createElement("p");
        message.textContent = "To-do list is empty!";
        list.appendChild(message); // Append message to the list container
        return; // Exit the function
    }


    tasks.forEach((task, i) => {
        const li = document.createElement("li");
        li.classList.add('todo-item'); // Add class for styling

        // Create a span for the task text for better styling control
        const taskText = document.createElement('span');
        taskText.textContent = task;
        taskText.classList.add('task-text'); // Add class for styling

        // Create the delete button
        const del = document.createElement("button");
        del.textContent = "❌"; // Emoji for delete
        del.classList.add('delete-btn'); // Add class for styling
        del.setAttribute('aria-label', `Delete task: ${task}`); // Accessibility
        del.onclick = () => removeTask(i); // Keep existing functionality

        // Append elements to the list item
        li.appendChild(taskText);
        li.appendChild(del);

        // Append the list item to the task list
        list.appendChild(li);
    });
}

// Function to add a new task
function addTask() {
    const task = input.value.trim(); // Get task text and remove whitespace
    if (task) { // Check if task is not empty
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.push(task); // Add new task to the array
        localStorage.setItem("tasks", JSON.stringify(tasks)); // Save updated array
        input.value = ""; // Clear the input field
        loadTasks(); // Reload and display tasks
    }
}

// Function to remove a task by index
function removeTask(index) {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.splice(index, 1); // Remove task at the specified index
    localStorage.setItem("tasks", JSON.stringify(tasks)); // Save updated array
    loadTasks(); // Reload and display tasks
}

// Load tasks when the page finishes loading
window.onload = loadTasks;

// Optional: Allow adding task by pressing Enter key in the input field
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault(); // Prevent default form submission
    addTask(); // Call the addTask function
  }
});