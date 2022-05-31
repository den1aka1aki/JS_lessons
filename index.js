



document.body.innerHTML = '<form class=".create-user-form"> <label>Имя <input type="text" name="userName" placeholder="Введите ваше имя"> </label><labe>Пароль <input type="password" name="password" placeholder="Придумайте Пароль"></labe><button type="submit">Подтвердить</button></form>';




const newForm = document.createElement('form');
newForm.className = 'create-user-form';

document.body.append(newForm);



const newLabel1 = document.createElement('label')
newLabel1.textContent = 'Имя';
newForm.append(newLabel1);

const newInput1 = document.createElement('input');
newInput1.type = 'text';
newInput1.name = 'userName';
newInput1.placeholder = 'Введите ваше имя'

newLabel1.append(newInput1);

const newLabel2 = document.createElement('label')
newLabel2.textContent = 'Пароль';
newForm.append(newLabel2);

const newInput2 = document.createElement('input');
newInput2.type = 'password';
newInput2.name = 'password';
newInput2.placeholder = 'Придумайте Пароль'

newLabel2.append(newInput2);

const newButton = document.createElement('button');
newButton.type = 'submit';
newButton.textContent = 'Подтвердить';

newForm.append(newButton);




