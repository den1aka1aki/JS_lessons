
// ================= МАССИВЫ =====================

// ======= ЗАДАНИЕ 1 ==================


/*Представьте, что мы разрабатываем систему очередей для какого-либо заведения. Например, для почты. Для этого мы создали массив peopleWaiting, который отображает текущий статус очереди.
    const peopleWaiting = ['Кристина', 'Олег', 'Кирилл', 'Мария', 'Светлана', 'Артем', 'Глеб'];

По логике, следующую посылку по почте получит Кристина, после нее уже 1-м в очереди будет Олег.

    Сейчас вам необходимо реализовать следующую логику в коде шаг за шагом:


    ЗАДАЧИ

    -  Кристина и Олег получили посылки и ушли из очереди.  == // Вам необходимо удалить их из массива \\ ==
    -  Теперь подошла очередь к Кириллу. И неожиданно сотрудница почты говорит, что скоро у них обеденный перерыв и она успеет обслужить только Кирилла. Поэтому все остальные люди, стоящие за Кириллом, решили не ждать, когда закончится обед, и просто ушли из отделения почты.
       == // Вам необходимо сначала удалить Кирилла из массива peopleWaiting, а затем удалить людей, которые не успели получить посылки \\ ==

    - Когда какой-либо человек получает посылку, == // необходимо вывести в модальном окне сообщение:  “name получил(а) посылку. В очереди осталось length человек.” \\ ==
      (Замените name на имя человека, получившего посылку, а length - на количество человек, которые остались в очереди).

    - Если же человек не получил посылку и ушел из очереди, то == // выведите в модальном окне через alert сообщение: “name не получил(а) посылку и ушел(ла) из очереди” \\ ==.

    - Рекомендуется создать 2 функции: == // giveParcel - для выдачи посылки и удаления клиента из начала массива, leaveQueueWithoutParcel - для удаления клиента, который не получил посылку из конца списка \\==
*/
/*
const peopleWaiting = ['Кристина', 'Олег', 'Кирилл', 'Мария', 'Светлана', 'Артем', 'Глеб'];


function giveParcel(array){
    name = array.shift();
    console.log(`${name} получил(а) посылку. В очереди осталось ${array.length} человек.`);

}
function leaveQueueWithoutParcel(array){
    name = array.pop();
    console.log(`${name} не получил(а) посылку и ушел(ла) из очереди”`)
}

//== Вызов функций ===
giveParcel(peopleWaiting);
giveParcel(peopleWaiting);
giveParcel(peopleWaiting);

leaveQueueWithoutParcel(peopleWaiting);
leaveQueueWithoutParcel(peopleWaiting);
leaveQueueWithoutParcel(peopleWaiting);
leaveQueueWithoutParcel(peopleWaiting);

//== Вариация решения через цикл ==

for (let i=0; i<3; i++){
giveParcel(peopleWaiting);
}
for (let i=0; i<3; i++){
leaveQueueWithoutParcel(peopleWaiting);
}

console.log(peopleWaiting);

*/

//======= ЗАДАНИЕ 2 ==================


/*Вам необходимо создать == // функцию getSumOfSequence , которая будет создавать массив из чисел и высчитывать сумму первого и последнего элементов массива. \\ ==

  == // Функция принимает в себя один параметр number \\ ==. Используя этот параметр, == // нужно создать массив из чисел от 1 до number \\ ==
        Для заполнения массива элементами == // используйте цикл for \\ ==. (Например, если был передан number равный 5, то массив должен выглядеть следующим образом: [1, 2, 3, 4, 5])

     Функция == //getSumOfSequence должна возвращать сумму первого и последнего элементов итогового массива \\ ==

    Пример: getSumOfSequence(5) = 6 // [1, 2, 3, 4, 5], 1+5=6



 */
/*
function getSumOfSequence(number) {

    let numbersArray = []; // создаю массив, который буду заполнять в будущем
    let result = 0; // переменная, в которую буду записывать сумму
    for (let i=1; i<=number; i++){
        numbersArray.push(i);               // цикл для заполнения массива. переменная I ограничена переданным числов в функцию getSumOfSequence(number)
    }
    result = numbersArray[0] + numbersArray[numbersArray.length-1]; // записываю в переменную сумму первого эл массива (по индексу 0) плюс последний эл массива (длина массива -1)
    console.log(result);
    return result;

}

getSumOfSequence(5);
getSumOfSequence(10);
getSumOfSequence(15);

*/

//======= ЗАДАНИЕ 3 ==================





/*  Представьте, что у вас есть друг Алексей, который является владельцем кофейни. Он хочет сделать сайт для этой кофейни, чтобы люди могли заказывать доставку кофе на дом. Самая главная функция,
     которую хочет видеть Алексей, это поиск кофе по названию. Ваш друг просит вас помочь ему с разработкой сайта.

    Изначально у вас есть ==// массив coffees \\ ==, в котором хранятся все виды кофе, которые есть в кофейне у Алексея. Напитки распределены в порядке популярности среди клиентов, т.е. кофе “Latte” - самый популярный.

  == //  const coffees = ['Latte', 'Cappuccino', 'Americano'] \\ ==;

    С помощью функции == // prompt вам необходимо запрашивать название кофе. Передайте в prompt сообщение “Поиск кофе по названию:”. Сохраните значение, которое ввел пользователь в переменную coffeeName. \\ ==

    Если введенное пользователем название кофе == //существует, то отобразите сообщение с помощью alert: “Держите ваш любимый кофе coffee. Он number-й по популярности в нашей кофейне.”, \\ ==
    где coffee - название найденного кофе, number - номер найденного кофе в массиве coffees. == //Если же кофе не был найден, то отобразите сообщение: “К сожалению, такого вида кофе нет в наличии”. \\ ==

Условия:    ВАЖНО

    Название кофе должно быть регистронезависимым, т.е. если пользователь напечатает “lATte”, то должен показаться результат с кофе “Latte”
    Необходимо использовать findIndex.
*/


/*

const coffees = ['Latte', 'Cappuccino', 'Americano']; // заданный условием массив

let coffeeName = prompt(`Поиск кофе по названию:`);

let lowInput = coffeeName.toLowerCase(); // принимаем введенное пользователем название кофе и приводим все символы к нижнему регистру
let firstLetter = lowInput.slice(0,1); // записываю в переменную firstLetter первый символ
let capitalLetter = lowInput.replace(firstLetter, firstLetter.toUpperCase()); // записываю в переменную введенное ранее название кофе и заменяю первую "прописную" букву на "заглавную"
let result = capitalLetter

let selectedCoffeeIndex = coffees.indexOf(result); // записываю в переменную индекс для последущего поиска позиции

coffees.includes(result) ? alert(`Держите ваш любимый кофе coffee. Он ${selectedCoffeeIndex+1} по популярности в нашей кофейне.`) : alert (`К сожалению, такого вида кофе нет в наличии`)

*/



//======= ЗАДАНИЕ 4 ==================



/* Вы разработали главную функциональность, которую хотел видеть Алексей на своем сайте. Он говорит вам большое спасибо, потому что благодаря сайту в кофейне увеличилось количество продаж.
 Теперь Алексей захотел поднять цену на кофе, чтобы прибыли было еще больше.


    У вас изначально есть == // 2 массива: coffees (хранит названия кофе) и prices (хранит цены на кофе) \\ ==. Индексы для названий кофе и цен взаимосвязаны. т.е. “Latte” стоит 1.5 евро, “Cappuccino” - 1 евро, и т.д.

    const coffees = ['Latte', 'Cappuccino', 'Americano'];
    const prices = [1.5, 1, 2];

Вам необходимо  == // создать новый массив updatedPrices \\ ==, который будет содержать те же числа из массива prices, но только увеличенные на 0.5.

    После подъема цен вам необходимо уведомить об этом клиентов кофейни, поэтому выведите для каждого типа кофе сообщение через == // alert: “Кофе name сейчас стоит price евро”, где name - название кофе, а price - обновленная цена на кофе.\\ ==

    Условия:

Необходимо использовать методы массивов == // map и forEach \\ ==

*/

/*
function priceUpdate(priceIncrease) {
    let updatedPrices = prices.map((oldPrice) => { // пробегаем по массиву цен возвращая обновленную сумму
        return oldPrice + priceIncrease;
    })

    coffees.forEach((coffeeName, index) => {
        alert (`Кофе ${coffeeName} сейчас стоит ${updatedPrices[index]} евро`) // уведомляем клиентов
    })
}

const coffees = ['Latte', 'Cappuccino', 'Americano'];
const prices = [1.5, 1, 2];

let priceIncrease = Number(prompt(`На сколько увеличиться цена?`));
priceUpdate(priceIncrease);
*/

//======= ЗАДАНИЕ 5 ==================



/* Последнее, что хочет видеть Алексей на своем сайте - это система оценок работы кофейни. Владельцу необходимо знать мнение клиентов, чтобы исправлять недочеты в своей работе.

    Для начала вам необходимо == // создать пустой массив clientsEstimations, в котором будут хранится оценки клиентов кофейни.\\ ==
    Также создайте  == // функцию askClientToGiveEstimation, которая должна выводить сообщение: “Как вы оцениваете нашу кофейню от 1 до 10?” через prompt.\\ ==
    Конечный результат, который введет пользователь, должен быть типом данных == // number \\ ==. == // Если было введено число от 1 до 10, то добавьте эту оценку в массив clientsEstimations \\ ==,
    иначе же никаких действий не совершайте.

    Для добавления оценок вызовите функцию == // askClientToGiveEstimation 5 раз. Рекомендуется это сделать через цикл for. \\ ==

После того, как оценки будут добавлены, == // вам необходимо посчитать положительные и отрицательных оценки \\ == . Положительной оценкой является число больше 5, отрицательной - число, меньшее либо равное 5.
Выведите через alert сообщение: “Всего положительных оценок: goodEstimations; Всего отрицательных оценок: notGoodEstimations”, где goodEstimations - количество положительных оценок, а notGoodEstimations - количество отрицательных оценок.

    Условия:

    == // В решение должен быть использован метод массивов filter. \\ ==

*/

/*
let clientsEstimations= [];

function askClientToGiveEstimation(){
    let clientsOpinion = Number (prompt('Как вы оцениваете нашу кофейню от 1 до 10?')); // получаем отзыв клиента
   if(clientsOpinion>0 && clientsOpinion<=10) { если получаем число от 0 и до 10 (включительно)
       clientsEstimations.push(clientsOpinion); / вводим число в массив
   }

}

for (let i=0; i<5; i++){
    askClientToGiveEstimation(); // вызываем функцию оценок 5 раз
}

let goodEstimations = clientsEstimations.filter(vote => vote>5); // фильтруем оценки и приводим к новой переменной
let notGoodEstimations = clientsEstimations.filter(vote => vote<=5);

alert(`Всего положительных оценок: ${goodEstimations.length} \nВсего отрицательных оценок: ${notGoodEstimations.length}`);

*/

//======= ЗАДАНИЕ 6 ==================

/*

Вам дан массив чисел.
const numbers = [10, 4, 100, -5, 54, 2];

Необходимо посчитать сумму кубов всех чисел в массиве. Например, для массива [1, 5, 9] должен быть следующий результат:
1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855

Решите данную задачу 4-мя способами:

    Через цикл for
    Через цикл for of
    Через метод forEach
    Через метод reduce

Для данного массива numbers сумма кубов должна равняться 1158411.
*/
/*

const numbers = [10, 4, 100, -5, 54, 2];

//////////// For //////////////

function powFor(arr, exponent){
    let result = 0;
    for(let i=0; i<arr.length; i++){
        result += Math.pow(arr[i],exponent);
    }
    console.log(result);
}

powFor(numbers,3);
*/
//====================================

//////////// For Of //////////////
/*
function powForOf(arr, exponent){
    let result = 0;
    for (let num of arr) {
      result += Math.pow(num,exponent);
    }
    console.log(result);
}
powForOf(numbers,3);
*/
//===================================

//////////// ForEach //////////////
/*
function powForEach(arr, exponent){
let result = 0;
numbers.forEach((number)=>{
    result += Math.pow(number,exponent)
})
console.log(result);
}
powForEach(numbers,3);

//===================================

//////////// Reduce //////////////

function powReduce(arr, exponent){
    let result = 0;
    result = arr.reduce(function (previous,current){
    return previous + Math.pow(current,exponent);
})
console.log(result);
}
powReduce(numbers, 3);
*/
//===================================






// =========== Дополнительные ===========

//============ Задание 1 ============================

/*
    function checkQuestionAnswer(question, correctAnswer){
        let personAnswer = prompt(question).trim().toLocaleLowerCase();
        let answer = correctAnswer.toString().trim().toLocaleLowerCase();
        personAnswer === answer ? alert('Ответ верный') : alert('Ответ неверный');
    }

checkQuestionAnswer('Арбуз это фрукт или ягода?', 'Ягода');
checkQuestionAnswer('Сколько в среднем зубов у взрослого человека?', '32');
checkQuestionAnswer('Как называется самая маленькая птица в мире?', 'Колибри');

//==================================================
*/


//============ Задание 2 ============================

/*
const text = 'Привет! Как дела! Давно мы с тобой не виделись.';
checkTextOnErrorSymbol(text, 'а', showSuccessMessage, showErrorMessage);


function checkTextOnErrorSymbol(text, errorSymbol,successCallback ,errorCallback) {

    if (!text.includes(errorSymbol)){
        successCallback(`В данном тексте нет запрещенных символов`)
    }
    else {
        for (let i = 0; i<text.length; i++){
            if(text[i] === errorSymbol){
                errorCallback(`Найден запрещенный символ ${errorSymbol}  под индексом ${i}.`)
            }
        }
    }


}
function showSuccessMessage(message){
    console.log(message);
}
function showErrorMessage(message){
    console.error(message);

}
*/

//=================================================================







// ================= Объекты =====================

// ================= Задание 1 =====================
// const users = [
//    {
//        username: 'David',
//        status: 'online',
//        lastActivity: 10
//    },
//    {
//        username: 'Lucy',
//        status: 'offline',
//        lastActivity: 22
//    },
//    {
//        username: 'Bob',
//        status: 'online',
//        lastActivity: 104
//    }
// ]
// let onlineUsers = users.filter(users => users.status === 'online');
// let userNames = onlineUsers.map(onlineUsers=> onlineUsers.username + ' ').toString();//======== как вариант вместо toString(), join()
// console.log(typeof userNames)
// console.log(`Сейчас в онлайн следующие пользователи: ${userNames}`);



//https://www.jscamp.app/ru/docs/javascript19/

// =========================================================================

// ================= Задание 2 =====================

// const ordersArr = [4, 2, 1, 3];
// const people = [
//     { id: 1, name: "Максим" },
//     { id: 2, name: "Николай" },
//     { id: 3, name: "Ангелина" },
//     { id: 4, name: "Виталий" },
// ];
//
// const result = giveTalonsInOrder(people, ordersArr);
// console.log('result', result)
// function giveTalonsInOrder (person, order){
//     let arr = [];
//     for (let id of order){
//         let persons = person.find(persons => persons.id === id)
//         arr.push(persons)
//     }
//     return arr;
// }
// =========================================================================

// ================= Задание 3 =====================


// function handleObject(obj, key, action){
//
//     switch (action){
//
//         case 'get':
//             return obj[key];
//         case 'add':
//             obj[key] = ' ';
//             return obj;
//         case 'delete':
//             delete obj[key];
//             return obj;
//         default:
//             return obj;
//     }
//
//
// }
//
// const student = {
//     name: 'Maxim',
//     programmingLanguage: 'JavaScript',
// }
//
// const result = handleObject(student, 'programmingLanguage', 'add');
// console.log('result', result);


// =========================================================================

// ================= Задание 4 =====================


// function giveJobToStudent(student, jobName){
//     let newObj = {...student};
//     newObj.job = jobName;
//
//
// prompt(`Поздравляем! У студента ${student.fullName} появилась новая работа! Теперь он ${jobName}`)
//     return student;
//
//
// }
//
// const student = {
//     fullName: 'Максим',
//     experienceInMonths: 12,
//     stack: ['HTML', 'CSS', 'JavaScript', 'React'],
// }
//
// const updatedStudent = giveJobToStudent(student, 'веб-разработчик');
//
// console.log(updatedStudent)

// =========================================================================

// ================= Задание 5 =====================

//
// function sum(...numbers) {
// let sum=0;
// for (let num of numbers){
//     sum+=num;
// }
// return sum;
// }
// console.log(sum(1, 2, 3)) // 6
// console.log(sum(2, 2)) // 4
// console.log(sum(10, 15, 249, 653, 846)) // 1773
// =========================================================================
// ================= Дата и время =====================

// ================= Задание 1 =====================

// function getDateFormat(date, separator='.'){
// const giorno = date.getDate();
// const mese = date.getMonth();
// const anno = date.getFullYear();
// let zeroMese = '';
// let zeroGiorno = '';
//
//     (mese < 10) ? zeroMese = '0' + mese : zeroMese = mese;
//     (giorno < 10) ? zeroGiorno = '0' + giorno : zeroGiorno = giorno;
//
// const result = `${zeroGiorno}${separator}${zeroMese}${separator}${anno}`
//     console.log(result);
// }
//
// const oggi = new Date(2021,10,30)
// getDateFormat(oggi, '-')

// =========================================================================
// ================= Задание 2 =====================

// const bDay = new Date (2022,8,29);
// const tDay = new Date(2022,4,19);
//
// function getDaysBeforeBirthday(bDay){
//
//     const difference = bDay.getTime() - tDay.getTime();
//     const result = Math.round(convertMsToDays(difference));
//
//     console.log(`${result} days`);
//     return result;
//
// }
//
// function convertMsToDays(mDate){
//     mDate = mDate/1000/60/60/24;
//     return mDate;
// }
//
// getDaysBeforeBirthday(bDay)
// =========================================================================
// ================= Задание 3 =====================



// В JavaScript объект даты может принимать в себя timestamp, т.е. количество миллисекунд с 1 января 1970 года 00:00:00 по UTC.
// По данному количеству миллисекунд генерируется объект даты.
// Благодаря этому, чтобы добавить определенное число миллисекунд, можно использовать следующую запись: new Date(Date.now() + 5000),
// где 5000 - это миллисекунды. В итоге мы получим дату, которая на 5000 миллисекунд больше текущей.
//
//     Используя эти знания, вам необходимо создать функцию addDays(), которая будет добавлять переданное количество дней к переданной дате. Она принимает в себя 2 параметра:
//
//     date - объект даты
// days - количество дней, тип данных number, по умолчанию данный параметр должен быть равен единице
//
// Вам необходимо к параметру date прибавить определенное количество дней, которое передается в параметр days. Функция addDays() должна возвращать обновленную дату.
//
//     Подсказка: не забывайте, что timestamp, который передается в Date(), должен измеряться в миллисекундах.



//
//
// ieri = new Date(Date.now())
// console.log(ieri)
// function addDays(date,days){
//
//     let transferDays=Number(days*24*60*60*1000);
//     date = new Date(Date.now()+transferDays);
//     console.log(date)
//     return date;
// }
// addDays(new Date,5);



// =========================================================================
// ================= This =====================
//
//  const student = {
//      stack : ['HTML'],
//      level : 1,
//      improveLevel(){
//          this.level++;
//          switch (this.level){
//              case 2:
//                  this.stack.push('css');
//                  break;
//              case 3:
//                  this.stack.push('JavaScript');
//                  break;
//              case 4:
//                  this.stack.push('React');
//                  break;
//              case 5:
//                  this.stack.push('NodeJS');
//                  break;
//              case 6:
//                  if (this.level>5){
//                      alert(`Студент выучил все технологии!`)
//                   }
//           }
//          return this;
//
//      }
//  }
//
//
// student
//     .improveLevel()
//     .improveLevel()
//     .improveLevel()
//     .improveLevel()
//     .improveLevel();

//
// const dog = {
//     name: "Чарли",
//     type: "Собака",
//     makeSound() {
//         return "Собака по имени Чарли говорит Гав-Гав";
//     }
// };
//
// const bird = {
//     name: "Петя",
//     type: "Воробей",
//     makeSound() {
//         return "Воробей по имени Петя говорит Чик-чирик";
//     },
//
// };
//
//
//
// function makeDomestic(isDomestic) {
//     console.log(`${this.name}, ${this.type},${isDomestic},${this.makeSound()}`)
//     return {...this, isDomestic};
//
// }
//
// makeDomestic.bind(dog, true)();
//
// makeDomestic.call(bird, false);
//
// makeDomestic.apply(bird,[false]);
//
// //
// const footballer = {
//     fullName: "Cristiano Ronaldo",
//     attack () {
//         console.log(`${this.fullName} сейчас с мячом и начинает атаку!`);
//     },
//     scoreGoal(sound) {
//         console.log(`${this.fullName} забил гол! Вот это да!`);
//         this.celebrate(sound);
//     },
//     celebrate(sound) {
//         console.log(sound);
//     },
//     goToSubstitution: function (newPlayer) {
//         console.log(
//             `${this.fullName} уходит на замену. На поле выходит ${newPlayer}`
//         );
//     }
// };
// const attack = footballer.attack;
// const score = footballer.scoreGoal;
// const substitute = footballer.goToSubstitution;
//
//
// let bindedAttack = attack.bind(footballer);
// bindedAttack();
// score.call(footballer,"Сиииии");
// substitute.apply(footballer,["Paulo Dibala"]);


// =========================================================================
// ================= OOП =====================
//
// class Student {
//     constructor(name, age) {
//
//         this.name = name;
//         this.age = age;
//         this.technologies = [];
//         this.status = "Junior";
//         this.setTechnologies = function (technologies) {
//             this.technologies = [...this.technologies, ...technologies];
//         };
//         this.setNewStatus = function (newStatus) {
//             this.status = newStatus;
//         };
//     }
// }
// const student = new Student("Maxim", 20);
// student.setTechnologies(["HTML", "CSS", "JavaScript"]);
// student.setNewStatus("Middle");
// console.log(student);

// =========================================================================

// class Person{
//     constructor(name,age) {
//         this.name = name;
//         this.age = age;
//     }
//     compareAge(person){
//        Math.round(this.age) > Math.round(person.age) ? console.log(`${this.name} старше, чем ${person.name}`) : console.log(`${this.name} младше, чем ${person.name}`);
//     }
//
//
// }
// const person1 = new Person("Максим", 24);
// const person2 = new Person("Светлана", 36);
// const person3 = new Person("Ирина", 23);
//
//
// person1.compareAge(person2); // Максим младше, чем Светлана
// person2.compareAge(person3); // Светлана старше, чем Ирина
// person3.compareAge(person1); // Ирина младше, чем Максим

// =========================================================================
//
// class Dictionary{
//
//     constructor(name) {
//         this.name = name;
//         this.words = {};
//     }
//     add(word, description) {
//         if (!this.words.hasOwnProperty(word)) {
//             this.words[word] = {word, description};
//         }
//     }
//     remove (word){
//       delete this.words[word];
//     };
//
//     get(key){
//     return this.
//         words[key].word + this.words[key].description;
//     };
//
//     showAllWords(){
//         for (let key in this.words){
//             console.log(`${key} - ${this.words[key].description}`)
//         }
//
//     };
//
//
// }
// const dictionary = new Dictionary("Толковый словарь");
// dictionary.add("JavaScript", "популярный язык программирования");
// dictionary.add(
//     "Веб-разработчик",
//     "Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие"
// );
// console.log(dictionary.get('Веб-разработчик'));
//
//
//  dictionary.remove("JavaScript");
//  dictionary.showAllWords();
//

//
// class HardWordsDictionary extends Dictionary {
//     constructor(name) {
//         super(name);
//
//     }
//     add (word, description)
//     {
//         if (!this.words.hasOwnProperty(word)) {
//             this.words[word] = {word, description, isDifficult:true};
//         }
//     }
// }
// const hardWordsDictionary = new HardWordsDictionary("Сложные слова");
//
// hardWordsDictionary.add(
//     "дилетант",
//     "Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями."
// );
//
// hardWordsDictionary.add(
//     "неологизм",
//     "Новое слово или выражение, а также новое значение старого слова."
// );
//
// hardWordsDictionary.add(
//     "квант",
//     "Неделимая часть какой-либо величины в физике."
// );
//
// hardWordsDictionary.remove("неологизм");
//
// hardWordsDictionary.showAllWords();


// =========================================================================
//
//
// class Developer{
//     constructor(fullName, age, position) {
//         this.fullName = fullName;
//         this.age = age;
//         this.position = position;
//         this.technologies = [];
//     }
//     code(){
//         console.log(`${this.position} разработчик пишет код...`);
//     };
//     learnNewTechnologies(technology){
//         this.technologies.push(technology)
//     };
// }
//
// class JuniorDeveloper extends Developer {
//     constructor(fullName, age, position='Junior') {
//         super(fullName, age, position);
//         this.technologies = ['HTML', 'CSS', 'JavaScript'];
//     }
//
// }
//
// class MiddleDeveloper extends Developer{
//     constructor(fullName, age,position) {
//         super(fullName, age, position);
//         this.technologies = ['HTML', 'CSS', 'JavaScript',`React`];
//     }
// }
//
// class SeniorDeveloper extends Developer{
//     constructor(fullName, age, position) {
//         super(fullName, age, position);
//         this.technologies = ['HTML', 'CSS', 'JavaScript', `React`, `NodeJS`];
//     }
// }
//
// const juniorDeveloper = new JuniorDeveloper("Анастасия", 20,);
// const middleDeveloper = new MiddleDeveloper("Игорь", 25,'Middle');
// const seniorDeveloper = new SeniorDeveloper("Максим", 30,'Senior');
//
// juniorDeveloper.code(); // Junior разработчик пишет код...
// middleDeveloper.code(); // Middle разработчик пишет код...
// seniorDeveloper.code(); // Senior разработчик пишет код...
//
// seniorDeveloper.learnNewTechnologies("Docker");
//
// console.log(
//     juniorDeveloper.fullName,
//     juniorDeveloper.age,
//     juniorDeveloper.position,
//     juniorDeveloper.technologies
// );
// // 'Анастасия' 20 'Junior' ['HTML', 'CSS', 'JavaScript']
//
// console.log(
//     middleDeveloper.fullName,
//     middleDeveloper.age,
//     middleDeveloper.position,
//     middleDeveloper.technologies
// );
// // 'Игорь' 25 'Middle' ['HTML', 'CSS', 'JavaScript', 'React']
//
// console.log(
//     seniorDeveloper.fullName,
//     seniorDeveloper.age,
//     seniorDeveloper.position,
//     seniorDeveloper.technologies
// );
// // 'Максим' 30 'Senior' ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS', 'Docker']


