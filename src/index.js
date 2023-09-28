import _ from 'lodash';
import './style.css';
import { loadHeader, loadMain, setTab, navItems } from './website.js';

function initialise() {
    loadHeader();
    loadMain();
    setTab('home');
}

initialise();

// Add event listeners to tabs
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

