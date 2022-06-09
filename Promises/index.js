//  https://jsonplaceholder.typicode.com/users


const USERLIST_URL = 'https://jsonplaceholder.typicode.com/users';

const createList = (text) =>{
    const createRow = document.createElement('li');
    const createLinkAnchor = document.createElement('a');
    createLinkAnchor.href = '#';
    createLinkAnchor.textContent = text;
    createRow.append(createLinkAnchor);
    return createRow
}
const dataCon = document.querySelector('#data-container')


const ToggleLoader = () =>{
    const loaderHTML = document.querySelector('#loader');
    const isHeader = loaderHTML.hasAttribute('hidden');
    if (isHeader) {
        loaderHTML.removeAttribute('hidden')
    }
    else {
     loaderHTML.setAttribute('hidden','');
    }
}

const getAllUserList = () =>{
    ToggleLoader();
    const result = fetch(USERLIST_URL,{method: 'GET'});
    console.log(result)
    result
        .then((response)=>{

            if(!response.ok){
                throw new Error('Ошибка')
            }
            return response.json();
        })
        .then((list)=>{
            console.log(list)
            list.forEach((list)=>{
            const listNameHTML = createList(list.name)
                dataCon.append(listNameHTML);
            })
        })
        .catch((error)=>{
            console.error(error);
        })
        .finally(()=>{
            ToggleLoader();
        })
}

getAllUserList();