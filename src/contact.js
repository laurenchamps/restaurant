import { openingHours } from './website.js';
import { restaurant } from './website.js';

export default function displayContact() {
    const main = document.querySelector('main');

    const title = document.createElement('h2');
    title.classList.add('title');
    title.textContent = 'Contact us';

    const container = document.createElement('div');
    container.classList.add('container');

    const openingTimes = document.createElement('div');
    openingTimes.classList.add('opening-times');

    const days = Object.keys(openingHours);

    days.forEach(day => {
        const dayElement = document.createElement('p');
        const hoursElement = document.createElement('p');

        dayElement.textContent = day;
        hoursElement.textContent = openingHours[day];

        openingTimes.appendChild(dayElement);
        openingTimes.appendChild(hoursElement);
    })

    const address = document.createElement('div');
    address.classList.add('full-address');

    const contactDetails = Object.keys(restaurant);

    contactDetails.forEach(item => {
        const para = document.createElement('p');
        para.textContent = restaurant[item];
        para.classList.add(item);

        address.appendChild(para);
    })

    const bookBtn = document.createElement('button');
    bookBtn.textContent = 'Book now';

    address.appendChild(bookBtn);

    main.appendChild(title);
    main.appendChild(container);
    container.appendChild(openingTimes);
    container.appendChild(address);
}