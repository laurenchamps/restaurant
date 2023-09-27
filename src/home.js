import { loadHeader, loadMain, loadFooter, highlightNavItem } from './website.js';

export default function loadHome() {
    while (document.body.firstChild) {
        document.body.removeChild(document.body.firstChild);
    }

    const content = document.querySelector('body');

    content.appendChild(loadHeader());
    content.appendChild(loadMain(displayName()));
    content.appendChild(loadFooter());

    return content;
}

export function displayName() {
    const h1 = document.createElement('h1');

    h1.textContent = 'Melt';

    return h1;
}

