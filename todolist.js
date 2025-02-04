document.getElementById('todo-form').addEventListener('submit', addTask);

function addTask(event) {
    event.preventDefault();

    const taskInput = document.getElementById('task').value;
    const deadlineInput = document.getElementById('deadline').value;

    if (taskInput === "" || deadlineInput === "") return;

    //task element
    const taskItem = document.createElement('li');

    const taskText = document.createTextNode(taskInput);
    const deadlineText = document.createElement('span');
    
    deadlineText.textContent = "Due: " + new Date(deadlineInput).toLocaleString();
    taskItem.appendChild(taskText);
    taskItem.appendChild(deadlineText);

    //task buttons container
    const buttonsDiv = document.createElement('div');
    buttonsDiv.classList.add('task-buttons');

    //complete button
    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.classList.add('complete-btn');
    completeButton.addEventListener('click', () => {
        taskItem.classList.toggle('completed');
    });
    
    //delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-btn');
    deleteButton.addEventListener('click', () => {
        taskItem.remove();
    });
    
    //alert button
    const alertButton = document.createElement('button');
    alertButton.textContent = 'Alert';
    alertButton.classList.add('alert-btn');
    alertButton.addEventListener('click', () => {
        const taskTime = new Date(deadlineInput).getTime();
        const currentTime = new Date().getTime();
        const timeDifference = taskTime - currentTime;

        if (timeDifference > 0) {
            setTimeout(function () {
                alert(`Task "${taskInput}" is due now!`);
            }, timeDifference);
        } else {
            alert('Task is already overdue!');
        }
    });

    buttonsDiv.appendChild(completeButton);
    buttonsDiv.appendChild(deleteButton);
    buttonsDiv.appendChild(alertButton);

    taskItem.appendChild(buttonsDiv);
    document.getElementById('task-list').appendChild(taskItem);

    // Clear form inputs
    document.getElementById('task').value = '';
    document.getElementById('deadline').value = '';
}
