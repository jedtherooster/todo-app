const taskInput = document.querySelector('#taskInput');
const taskList = document.querySelector('#taskList'); // ul element


function addTask() {
    if (taskInput.value === '') {
        alert("Please enter a task");
    } else {
        const newTask = document.createElement('li');

        const taskText = taskInput.value;

        console.log(taskInput.value);
        taskInput.value = '';

        newTask.appendChild(document.createTextNode(taskText));
        taskList.appendChild(newTask);
    }
}

taskList.addEventListener('click', removeTask);

function removeTask() {
    if (event.target && event.target.matches("li")) {
        // Now you can handle the event, e.g., remove the item
        event.target.remove();
        console.log(`${event.target} removed`);
    }

}