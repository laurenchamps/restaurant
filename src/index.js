import _ from 'lodash';
import './style.css';
import loadHome from './home.js';
import loadMenu from './menu.js';

loadHome();

const navHome = document.getElementById('home');
const navMenu = document.getElementById('menu');
const navContact = document.getElementById('contact');

navHome.addEventListener('click', loadHome);
navMenu.addEventListener('click', loadMenu);

