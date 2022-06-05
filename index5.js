


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
for (let task of tasks){
    createTask(taskList, task);
}



const createTaskBlock = document.querySelector('.create-task-block');
createTaskBlock.addEventListener('submit', (event)=> {

    event.preventDefault();

    let uniqId = Date.now().toString();
    let input = document.querySelector('.create-task-block__input');
    let task = {
        id: uniqId,
        text: input.value
    }

    function createSpanErr (message) {

        const errBlock = document.querySelector('.create-task-block');
        const span = document.createElement('span');
        span.className = 'error-message-block';
        errBlock.append(span);
        span.textContent = message;


    }

    function checkIfExistSpanErr(){
        if(document.querySelector('.error-message-block')){
            document.querySelector('.create-task-block').lastChild.remove();
        }
    }

    function inputValidation (){
        let validationFlag;
        checkIfExistSpanErr();
        if (input.value.toString().trim() === '')
        {
            createSpanErr('Название задачи не должно быть пустым');
            validationFlag = true;
        }
        if( tasks.find(task => task.text === input.value.trim() )) {
            createSpanErr('Задача с таким названием уже существует');
            validationFlag = true;
        }
        return validationFlag;
    }
    if (!inputValidation()){
        tasks.push(task);
        input.value = '';
        createTask(taskList, task)
    }


});
// remove



let divModal = document.createElement('div'),
    div2 = document.createElement('div'),
    h3 = document.createElement("h3"),
    div3 = document.createElement('div'),
    btnRemove = document.createElement('button'),
    btnCancel = document.createElement('button');

divModal.className = 'modal-overlay modal-overlay_hidden';
div2.className = 'delete-modal';
h3.className = 'delete-modal__question';
h3.textContent = 'Вы действительно хотите удалить эту задачу?';
div3.className = 'delete-modal__buttons';
btnCancel.className = 'delete-modal__button delete-modal__cancel-button';
btnCancel.textContent = 'Отмена';
btnRemove.textContent = 'Удалить';
btnRemove.className = 'delete-modal__button delete-modal__confirm-button';

divModal.append(div2);
div2.append(h3, div3);
div3.append(btnRemove, btnCancel);
document.body.append(divModal);

const allDeleteBtn = document.querySelectorAll('.tasks-list');
allDeleteBtn.forEach((button)=>{
    button.addEventListener('click', (event)=>{

        const {target} = event;
        console.log(target)
        console.log(target.parentNode.parentNode.parentNode)
       // target.parentNode.parentNode.parentNode.removeChild(target.parentNode.parentNode)


        // const taskId = target.getAttribute('data-delete-task-id');
        //
        // const taskToDel = tasks.find(task => task.id === taskId)
        //
        // console.log(taskToDel)


    })
})





