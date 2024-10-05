// Array to store tasks
let tasks = [];

// Function to add a task
function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();
    
    if (taskText) {
        tasks.push(taskText);
        renderTasks(); // Render tasks on the page
        taskInput.value = ''; // Clear input
    }
}

// Function to render tasks
function renderTasks() {
    const taskContainer = document.getElementById('task-container');
    taskContainer.innerHTML = ''; // Clear previous tasks
    
    tasks.forEach((task, index) => {
        const taskItem = document.createElement('div');
        taskItem.innerText = task;
        taskItem.className = 'task-item';
        
        // Create a button to delete the task
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.onclick = () => removeTask(index);
        
        taskItem.appendChild(deleteButton);
        taskContainer.appendChild(taskItem);
    });
}

// Function to remove a task
function removeTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}
