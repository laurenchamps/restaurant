import _ from 'lodash';
import './style.css';
import displayHome from './home.js';
import displayMenu from './menu.js';
import displayContact from './contact.js'
import { loadHeader, loadMain, loadFooter, setTab, navItems } from './website.js';

// function initialise() {
//     loadHeader();
//     loadMain(displayName());
//     loadFooter();
// }

// initialise();

loadHeader();
loadMain();
setTab('home');

navItems.forEach(navItem => {
    const item = document.getElementById(navItem);

    item.addEventListener('click', () => {
        if (item.id === 'home') {
            setTab('home');
        } else if (item.id === 'menu') {
            setTab('menu');
        } else if (item.id === 'contact') {
            setTab('contact');
        }
    });
});

