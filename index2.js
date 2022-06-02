


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


let taskList = document.querySelector('.tasks-list');
let div1 = document.createElement('div'),
    div2 = document.createElement('div'),
    div3 = document.createElement('div'),
    form1 = document.createElement('form'),
    input1 = document.createElement('input'),
    label1 = document.createElement('label'),
    span1 = document.createElement('span'),
    btn1 = document.createElement('button');

for (let task of tasks){
div1.className = 'task-item';
div1.dataset.taskId = task.id;
div2.className = 'task-item__main-container';
div3.className = 'item__main-content';
form1.className = 'checkbox-form';
input1.className = 'checkbox-form__checkbox';
input1.type = 'checkbox';
input1.id = 'task-' + task.id;
label1.htmlFor = 'task-' + task.id;
span1.className = 'task-item__text';
span1.innerText = task.text;
btn1.className = 'task-item__delete-button default-button delete-button';
btn1.dataset.deleteTaskId = task.id;
btn1.textContent = 'Удалить';


taskList.append(div1)


div1.append(div2);
div2.append(div3, btn1);
div3.append(form1, span1);
form1.append(input1, label1);
}