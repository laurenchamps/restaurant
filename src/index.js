import _ from 'lodash';
import './style.css';
import init from './init.js';
import { createSocialIcons } from './init.js';
import menu from './menu.js';
import { displayMenu } from './menu.js';
import { loadHeader, loadMain, displayName } from './init.js';

// init();
// document.body.appendChild(createSocialIcons());

document.body.appendChild(loadHeader());
document.body.appendChild(loadMain(displayMenu()));
// menu();

function highlightNavItem(item) {
    const navItem = document.querySelector('.' + item);
    navItem.classList.add('active');
}

highlightNavItem('home');


