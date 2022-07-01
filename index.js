
import './index.css'
import WB_IMG from './Assets/index.png';


console.log("Hello World!");



const l1_laybel = document.createElement('h1');
l1_laybel.className = 'capital_row';
l1_laybel.textContent = 'I love JavaScript'
document.body.append(l1_laybel);


const web_pack_img = document.createElement('img');
web_pack_img.src = WB_IMG;
document.body.append(web_pack_img);

l1_laybel.append(web_pack_img);