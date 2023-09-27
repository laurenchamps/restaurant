import homeContent from './home.js';
import loadMenu from './menu.js';
import { displayHome } from './home.js';

const content = document.getElementById('content');

export function loadHeader() {
    const header = document.createElement('header');
    header.appendChild(loadNav());

    content.appendChild(header);
}

function loadNav(){
    const nav = document.createElement('nav');

    const ul = document.createElement('ul');
    ul.classList.add('navbar');

    const homeNav = document.createElement('li');
    homeNav.appendChild(document.createTextNode('home'));
    homeNav.setAttribute('id', 'home');
    // homeNav.addEventListener('click', loadHome);
    ul.appendChild(homeNav);

    const menuNav = document.createElement('li');
    menuNav.appendChild(document.createTextNode('menu'));
    menuNav.setAttribute('id', 'menu');
    // menuNav.addEventListener('click', loadMenu);
    ul.appendChild(menuNav);

    const navContact = document.createElement('li');
    navContact.appendChild(document.createTextNode('contact'));
    navContact.setAttribute('id', 'contact');
    // navContact.addEventListener('click', loadContact);
    ul.appendChild(navContact);
    

    nav.appendChild(ul);
    
    return nav; 
}

export function highlightNavItem(item) {
    const navItem = document.getElementById(item);
    navItem.classList.add('active');
}

export function loadMain() {
    const main = document.createElement('main');
    main.classList.add('hero');
    
    document.body.appendChild(main);
}

export function loadFooter() {
    const footer = document.createElement('footer');

    footer.appendChild(createSocialIcons());
    footer.appendChild(createAddress());

    content.appendChild(footer);
}

function createSocialIcons() {
    const fb = {
        name: 'facebook',
        classes: [
            'fa-brands',
            'fa-facebook',
            'fa-xl',
        ],
    };

    const ig = {
        name: 'instagram',
        classes: [
            'fa-brands',
            'fa-instagram',
            'fa-xl',
        ],
    };

    const email = {
        name: 'email',
        classes: [
            'fa-solid',
            'fa-envelope',
        ],
    };

    const icons = [fb, ig, email];

    const div = document.createElement('div');

    div.classList.add('social-icons');

    icons.forEach(function(icon) {
        const i = document.createElement('i');
        const classes = icon.classes;

        classes.forEach(function(item) {
            i.classList.add(item);
        })

        div.appendChild(i);
    });

    return div;
}

function createAddress() {
    const div = document.createElement('div');
    const para1 = document.createElement('p');
    const para2 = document.createElement('p');

    div.classList.add('address');
    para1.textContent = 'Melt Pizzeria'
    para2.textContent = '1 Second St, Adelaide, SA, 5000. Tel 123 456 789';

    div.appendChild(para1);
    div.appendChild(para2);

    return div;
}

export function setTab(tab) {
    const main = document.querySelector('main');

    // Remove existing contents of main
    while (main.firstChild) {
        main.removeChild(main.firstChild);
    }

    // Populate main with contents of selected tab
    if (tab === 'home') {
        displayHome();
    } else if (tab === 'menu') {
        displayMenu();
    } else if (tab === 'contact') {
        displayContact();
    }

    // Highlight selected tab
    highlightNavItem(tab);
}