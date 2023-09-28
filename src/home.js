export default function displayHome() {
    const main = document.querySelector('main');

    const div = document.createElement('div');
    div.classList.add('title');

    const heading = document.createElement('h1');
    heading.textContent = 'Melt';

    const subHeading = document.createElement('p');
    subHeading.classList.add('subheading');
    subHeading.textContent = "Adelaide's finest pizza since 2001";

    div.appendChild(heading);
    div.appendChild(subHeading);

    main.appendChild(div);
}