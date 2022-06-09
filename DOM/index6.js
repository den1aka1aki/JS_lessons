let darkFlag = false;

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

    if(darkFlag){
        div1.style.color = '#ffffff'
        btn.style.border = '1px solid #ffffff'

    }
    else{
        div1.style.color = 'initial'
        btn.style.border = 'none'
    }



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
        completed: false,
        text: input.value

    }


    function createSpanErr(message) {

        const errBlock = document.querySelector('.create-task-block');
        const span = document.createElement('span');
        span.className = 'error-message-block';
        errBlock.append(span);
        span.textContent = message;


    }

    function checkIfExistSpanErr() {
        if (document.querySelector('.error-message-block')) {
            document.querySelector('.create-task-block').lastChild.remove();
        }
    }

        function inputValidation() {
            let validationFlag;
            checkIfExistSpanErr();
            if (input.value.toString().trim() === '') {
                createSpanErr('Название задачи не должно быть пустым');
                validationFlag = true;
            }
            if (tasks.find(task => task.text === input.value.trim())) {
                createSpanErr('Задача с таким названием уже существует');
                validationFlag = true;
            }
            return validationFlag;
        }

        if (!inputValidation()) {
            tasks.push(task);
            input.value = '';
            createTask(taskList, task)

        }


    });

    let divModal = document.createElement('div'),
        div4 = document.createElement('div'),
        h3 = document.createElement("h3"),
        div5 = document.createElement('div'),
        btnRemove = document.createElement('button'),
        btnCancel = document.createElement('button');


    divModal.className = 'modal-overlay modal-overlay_hidden';
    div4.className = 'delete-modal';
    h3.className = 'delete-modal__question';
    h3.textContent = 'Вы действительно хотите удалить эту задачу?';
    div5.className = 'delete-modal__buttons';
    btnCancel.className = 'delete-modal__button delete-modal__cancel-button';
    btnCancel.textContent = 'Отмена';
    btnRemove.textContent = 'Удалить';
    btnRemove.className = 'delete-modal__button delete-modal__confirm-button';


    divModal.append(div4);
    div4.append(h3, div5);
    div5.append(btnRemove, btnCancel);
    document.body.append(divModal);

//////////// функция по удалению строки ДОМа и ячейки массива
    function delRow(delBtn) {
        //   delBtn.parentNode.parentNode.parentNode.removeChild(delBtn.parentNode.parentNode);
             delBtn.parentNode.parentNode.remove();
        const taskId = delBtn.getAttribute('data-delete-task-id');
        let taskToDel = tasks.map(function (task) {
            return task.id
        }).indexOf(taskId);
        tasks.splice(taskToDel, 1);

    }

/////////// функция по вызову модал окна и проверка на нажатие кнопки

    function modalWindow(btnAtt) {

        divModal.className = 'modal-overlay';
        const delModalBtn = document.querySelector('.delete-modal');
        delModalBtn.addEventListener('click', (event) => {

            const isModalDelBtn = event.target.closest('.delete-modal__button')

            if (isModalDelBtn) {


                if (isModalDelBtn.className === 'delete-modal__button delete-modal__confirm-button') {
                    divModal.className = 'modal-overlay modal-overlay_hidden';
                    delRow(btnAtt);
                } else if (isModalDelBtn.className === 'delete-modal__button delete-modal__cancel-button') {
                    divModal.className = 'modal-overlay modal-overlay_hidden';

                }

            }

        });

    }

    const allBtnDel = document.querySelector('.tasks-list');
    allBtnDel.addEventListener('click', (event) => {
        event.preventDefault();
        const isDelBtn = event.target.closest('.task-item__delete-button');
        if (isDelBtn) {
            modalWindow(isDelBtn);
        }

    });


document.body.style.background = 'initial';
document.body.addEventListener('keydown',(event)=>{
    const {key} = event;

    if(key === 'Tab'){
        event.preventDefault();
        console.log()
       if(document.body.style.background === 'initial'){
           document.body.style.background = '#24292E';

           document.querySelectorAll('.task-item').forEach((task)=>{
           task.style.color = "#ffffff";
           })

           document.querySelectorAll('button').forEach((button)=>{
           button.style.border = "1px solid #ffffff";
           })
           darkFlag = true;
       }
       else {
           document.body.style.background = 'initial';
           document.querySelectorAll('.task-item').forEach((task)=>{
           task.style.color = "initial";
           })
           let btnBlack = document.querySelectorAll('button');
           btnBlack.forEach((button)=>{
           button.style.border = "none";
           })
           darkFlag = false;
       }
    }

});















