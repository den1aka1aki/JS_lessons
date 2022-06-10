

///<<<<<<<<<<========================= Задание 1 =========================
// const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";
// let isLoading = false;
//  const createNewPost = async () => {
//      try{
//          isLoading = true;
//          const response = await fetch(POSTS_URL, {method: "POST"});
//          const result = await response.json();
//          console.log("result", result)
//
//      }catch(error) {
//             console.log("error", error);
//         }
//         finally{
//             isLoading = false;
//         }
// };
// createNewPost();


///<<<<<<<<<<========================= Задание 2 =========================


// const TODOS_URL = "https://jsonplaceholder.typicode.com/todos";
// const getTodosByIds = async (ids) => {
//     try{
//         const requests = ids.map(async (id) => await fetch(`${TODOS_URL}/${id}`));
//         const responses = await Promise.all(requests)
//         const dataResults = responses.map(async (data) => data.json());
//         const allTasks = await Promise.all(dataResults);
//         console.log(allTasks);
//
//     }
//         catch(error){
//             console.log(error);
//         }
// };
// getTodosByIds([43, 21, 55, 100, 10]);


///<<<<<<<<<<========================= Задание 3 =========================

const PHOTO_URL = 'https://jsonplaceholder.typicode.com/albums';
function createLoader (){
    const loaderSpan = document.createElement('span');
    loaderSpan.className = 'loader'
    loaderSpan.textContent = 'Загрузка...';
    loaderSpan.setAttribute('hidden','');
    document.body.append(loaderSpan);
}
const ToggleLoader = () =>{

    const loaderSpan = document.querySelector('.loader')
    let isHeader =  loaderSpan.hasAttribute('hidden');
    isHeader ?  loaderSpan.removeAttribute('hidden')
        :  loaderSpan.setAttribute('hidden','')

}


const createList = (title) => {


    const createLiEl = document.createElement('li');
    createLiEl.textContent = title;
    const createUlEl = document.createElement('ul');
    createUlEl.className = 'data-container';
    document.body.append(createUlEl);
    createUlEl.append(createLiEl);
    return createUlEl;
}



createLoader();
const renderAlbums = async () =>{
    ToggleLoader()
    try{

        const allPhotos = await fetch(PHOTO_URL)
        const photoResult = await allPhotos.json();
        console.log('photoResult', photoResult);
        photoResult.forEach(photo => createList(photo.title))
        ToggleLoader()
    }

    catch (error){
        createList();
        const ulSpace = document.querySelector('.data-container');
        ulSpace.textContent = 'Произошла ошибка в получении данных об альбомах...'
    }

}

renderAlbums();


