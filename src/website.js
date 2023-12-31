import displayHome from './home.js';
import displayMenu from './menu.js';
import displayContact from './contact.js';

export const navItems = ['home', 'menu', 'contact'];

export const openingHours = {
    "Monday": "Closed",
    "Tuesday": "5pm - 9pm",
    "Wednesday": "5pm - 9pm",
    "Thursday": "12pm - 9pm",
    "Friday": "12pm - 11pm",
    "Saturday": "12pm - 11pm",
    "Sunday": "12pm - 9pm",
};

export const restaurant = {
    "name": "Melt Pizzeria",
    "address": "1 Second St, Adelaide, SA 5000",
    "phone": "+61 234 567 890",
}

const content = document.getElementById('content');

export function loadHeader() {
    const header = document.createElement('header');
    header.appendChild(loadNav());

    content.appendChild(header);
}

export function loadNav(){
    const nav = document.createElement('nav');

    const ul = document.createElement('ul');
    ul.classList.add('navbar');

    navItems.forEach(item => {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(item));
        li.setAttribute('id', item);
        li.classList.add('navItem');
        
        ul.appendChild(li);
    })

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
    
    content.appendChild(main);
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

    div.classList.add('footer-address');
    para1.textContent = restaurant.name;
    para2.textContent = restaurant.address + '. Tel ' + restaurant.phone;

    div.appendChild(para1);
    div.appendChild(para2);

    return div;
}

export function setTab(tab) {
    const main = document.querySelector('main');
    const footer = document.querySelector('footer');

    // Remove existing contents of main and footer
    while (main.firstChild) {
        main.removeChild(main.firstChild);
    }

    if (footer) {
        footer.parentNode.removeChild(footer);
    }

    // Remove highlight from nav item
    const tabs = document.querySelectorAll('.navItem');

    tabs.forEach(tab => {
        if (tab.classList.contains('active')) {
            tab.classList.remove('active');
        };
    })

    // Populate main with contents of selected tab
    if (tab === 'home') {
        displayHome();
    } else if (tab === 'menu') {
        displayMenu();
    } else if (tab === 'contact') {
        displayContact();
    }

    // Load footer
    loadFooter();

    // Highlight selected tab
    highlightNavItem(tab);
}