


const tasks = [
    {
        id: "1138465078061",
        completed: false,
        text: "Посмотреть новый урок по JavaScript"
    },
    {
        id: "1138465078062",
        completed: false,
        text: "Выполнить тест после урока"
    },
    {
        id: "1138465078063",
        completed: false,
        text: "Выполнить ДЗ после урока"
    }
];


function createTask(parent,task){
    let div1 = document.createElement('div'),
        div2 = document.createElement('div'),
        div3 = document.createElement('div'),
        form = document.createElement('form'),
        input = document.createElement('input'),
        label = document.createElement('label'),
        span = document.createElement('span'),
        btn = document.createElement('button');

    div1.className = 'task-item';
    div1.dataset.taskId = task.id;
    div2.className = 'task-item__main-container';
    div3.className = 'task-item__main-content';
    form.className = 'checkbox-form';
    input.className = 'checkbox-form__checkbox';
    input.type = 'checkbox';
    input.id = 'task-' + task.id;
    label.htmlFor = 'task-' + task.id;
    span.className = 'task-item__text';
    span.textContent = task.text;
    btn.className = 'task-item__delete-button default-button delete-button';
    btn.dataset.deleteTaskId = task.id;
    btn.textContent = 'Удалить';


    parent.append(div1);

    form.append(input, label);
    div3.append(form, span);
    div2.append(div3, btn);
    div1.append(div2);


}

let taskList = document.querySelector(".tasks-list");
for (let task of tasks)
    createTask(taskList, task);


// submit
let maxIdNumber = tasks.length;
console.log(maxIdNumber)

const createTaskBlock = document.querySelector('.create-task-block');
createTaskBlock.addEventListener('submit', (event)=>{
    event.preventDefault();

    let input = document.querySelector('.create-task-block__input');
    ++maxIdNumber;
    console.log(maxIdNumber)
    let task = {
        id: maxIdNumber,
        text: input.value
    }
    tasks.push(task);
    input.value = '';
    createTask(taskList,task)
    console.log()
});