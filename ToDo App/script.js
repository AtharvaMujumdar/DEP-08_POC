const date = new Date();
const options = { day: '2-digit', month: 'long', year: 'numeric' };
const formattedDate = date.toLocaleDateString('en-GB', options);

document.querySelector('#date-time').textContent = formattedDate;

const addTask = (input, deadline) => {
    
    const taskSection = document.createElement('section');
    taskSection.className = 'task'; 
    
    const taskContent = document.createElement('span');
    taskContent.className = 'task-content';
    taskContent.textContent = input;

   
    const taskDeadline = document.createElement('span');
    taskDeadline.className = 'task-deadline';
    taskDeadline.textContent = `Deadline: ${deadline}`;

   
    const deleteButton = document.createElement('button');
    deleteButton.className = 'button delete-button';
    deleteButton.textContent = '-';

    deleteButton.addEventListener('click', (e) => {
        e.preventDefault();
        let array = JSON.parse(localStorage.getItem("taskArray")) || [];
        array = array.filter(task => task.input !== input); 
        localStorage.setItem("taskArray", JSON.stringify(array));
        taskSection.remove(); 
    });

   
    taskSection.appendChild(taskContent);
    taskSection.appendChild(taskDeadline);
    taskSection.appendChild(deleteButton);

    
    document.querySelector('#all-task').appendChild(taskSection);
};

document.querySelector('#plus-button').addEventListener('click', (e) => {
    e.preventDefault();
    const input = document.querySelector('#task-input').value;
    const deadline = document.querySelector('#deadline-input').value;
    if (input === "" || deadline === "") return; 
    document.querySelector('#task-input').value = "";
    document.querySelector('#deadline-input').value = "";
    
    let array = JSON.parse(localStorage.getItem("taskArray")) || [];
    array.push({ input, deadline });
    localStorage.setItem("taskArray", JSON.stringify(array));

    addTask(input, deadline);
});

let array = JSON.parse(localStorage.getItem("taskArray")) || [];
if (array.length !== 0) {
    array.forEach(task => {
        addTask(task.input, task.deadline);
    });
}



