import _ from 'lodash';
import './style.css';
import { homeContent } from './home.js';
import displayMenu from './menu.js';
import { loadHeader, loadMain, loadFooter, setTab } from './website.js';

// function initialise() {
//     loadHeader();
//     loadMain(displayName());
//     loadFooter();
// }

// initialise();

loadHeader();
loadMain();
setTab('home');

const navItems = ['home', 'menu', 'contact'];

navItems.forEach(navItem => {
    const item = document.getElementById(navItem);

    item.addEventListener('click', () => {
        if (item.id === 'home') {
            loadHome();
        } else if (item.id === 'menu') {
            loadMenu();
        }
        // } else if (item.id === 'contact') {
        //     loadContact();
        // }
    });
});