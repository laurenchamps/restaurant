export default function displayHome() {
    const main = document.querySelector('main');
    const heading = document.createElement('h1');
    heading.textContent = 'Melt';

    main.appendChild(heading);
}