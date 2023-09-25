export default function init() {
    const content = document.querySelector('body');

    content.appendChild(loadHeader());
    content.appendChild(loadMain());
    content.appendChild(loadFooter());

    return content;
}

export function loadHeader() {
    const header = document.createElement('header');
    header.appendChild(loadMenu());

    return header;
}

function loadMenu(){
    const menuItems = ['home', 'menu', 'contact'];

    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    ul.classList.add('navbar');

    for(let i = 0; i < menuItems.length; i++) {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(menuItems[i]));
        li.classList.add(menuItems[i]);
        ul.appendChild(li);
    }

    nav.appendChild(ul);
    
    return nav; 
}

export function loadMain(content) {
    const div = document.createElement('div');
    div.classList.add('hero');

    div.appendChild(content);

    return div;
}

export function displayName() {
    const h1 = document.createElement('h1');

    h1.textContent = 'Melt';

    return h1;
}



function loadFooter() {
    const footer = document.createElement('footer');

    footer.appendChild(createSocialIcons());
    footer.appendChild(createAddress());

    return footer;
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
    const para = document.createElement('p');

    div.classList.add('address');
    para.textContent = '1 Second St, Adelaide, SA, 5000. Tel 123 456 789';

    div.appendChild(para);

    return div;
}