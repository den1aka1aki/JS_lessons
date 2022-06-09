//  https://jsonplaceholder.typicode.com/users


const USERLIST_URL = 'https://jsonplaceholder.typicode.com/users';
const userListId = [];


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


const getUsersByIds = (ids)=>{
    ToggleLoader();
    const requests = ids.map((id)=>
        fetch(`${USERLIST_URL}/${id}`));
    Promise.all(requests)
        .then((responses)=>{
          const dataResults = responses.map((response)=>response.json());
          return Promise.all(dataResults);

        })
        .then((list)=>{
            list.forEach((list)=>{
                const listHTML = createList(list.name);
                dataCon.append(listHTML)
            })
        })
        .catch((error)=>{
            console.error(error);
        })
        .finally(()=>{
            ToggleLoader();
        })
}
getUsersByIds([1,5,6,8,10,4,9]);
