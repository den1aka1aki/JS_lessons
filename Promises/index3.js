

const createList = (url, title) =>{
    const createRow = document.createElement('li');
    const createImg = document.createElement('img');
    createImg.className = 'photo-item__image';
    createImg.src=url;
    const h3Title = document.createElement('h3');
    h3Title.className = 'photo-item__title';
    h3Title.textContent = title;
    createRow.append(createImg, h3Title);
    return createRow;
}
const dataCon = document.querySelector('#data-container')


const PHOTO_URL = 'https://jsonplaceholder.typicode.com/photos/';


const ToggleLoader = () =>{
    const loaderHTML = document.querySelector('#loader');
    const isHeader = loaderHTML.hasAttribute('hidden');
    isHeader ? loaderHTML.removeAttribute('hidden')
             : loaderHTML.setAttribute('hidden','')

}


const getFastestLoadedPhoto = (ids) =>{
    ToggleLoader();
    let photos = ids.map((id)=>
    fetch(`${PHOTO_URL}${id}`))
    Promise.race(photos)
        .then((photo)=> {
            return photo.json();
        })
        .catch((error)=>{
            console.error(error);
        })
        .then((photos)=>{

            const listHTML = createList(photos.url,photos.title)
            dataCon.append(listHTML)
            ToggleLoader();
        })

}
getFastestLoadedPhoto([60, 12, 55]);