export default function displayContact() {
    const main = document.querySelector('main');
    const openingTimes = document.createElement('div');
    openingTimes.classList.add('opening-times');

    const openingHours = {
        "Monday": "Closed",
        "Tuesday": "5pm - 9pm",
        "Wednesday": "5pm - 9pm",
        "Thursday": "12pm - 9pm",
        "Friday": "12pm - 11pm",
        "Saturday": "12pm - 11pm",
        "Sunday": "12pm - 9pm",
    }
    
    const hoursHeading = document.createElement('h2');
    hoursHeading.textContent = 'Opening hours';
    main.appendChild(hoursHeading);

    const days = Object.keys(openingHours);

    days.forEach(day => {
        console.log(day);
        console.log(openingHours[day]);
        const dayElement = document.createElement('p');
        const hoursElement = document.createElement('p');

        dayElement.textContent = day;
        hoursElement.textContent = openingHours[day];

        openingTimes.appendChild(dayElement);
        openingTimes.appendChild(hoursElement);
    })




    main.appendChild(openingTimes);
}