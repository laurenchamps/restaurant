import _ from 'lodash';
import './style.css';
import BackgroundImg from './pizza.jpg';

console.log('Hello World');

function component() {
    const header = document.createElement('header');

    return header;
}

document.getElementById('content').appendChild(component());

// function component() {
//     const header = document.createElement('header');
//     const nav = document.createElement('nav');
//     const menu = document.createElement('ul');

//     const menuItems = ['Home', 'Menu', 'Contact'];

//     for(let i = 0; i < menuItems.length; i++) {
//         const li = document.createElement('li');
//         li.appendChild(document.createTextNode(menuItems[i]));
//         menu.appendChild(menuItem);
//     }

//     nav.appendChild(menu);
//     header.appendChild(nav);

//     return header;
// }

