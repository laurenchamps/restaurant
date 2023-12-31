export default function displayMenu() {
    const pizzas = [
        {
            id: 1,
            ingredients: ['san marzano', 'pecorino', 'mozzarella', 'basil'],
        },
        {
            id: 2,
            ingredients: ['pepperoni', 'squid ink cacciatore', 'san marzano', 'onion confit', 'mozzarella', 'olives', 'chilli'],
        },
        {
            id: 3,
            ingredients: ['eggplant parmigiana', 'smoked scamorza', 'pecorino', 'san marzano', 'garlic conift', 'basil'],
        },
        {
            id: 4,
            ingredients: ['chargrilled pineapple', 'san marzano', 'gabagool', 'mozzarella', 'green chilli verde'],
        },
        {
            id: 5,
            ingredients: ['pork and fennel sausage', 'provolone', 'san marzano', 'ricotta salata', 'onion', 'oregano', 'chilli'],
        },
        {
            id: 6,
            ingredients: ['gorgonzola', 'smoked scamorza', 'provolone', 'pecorino', 'rosemary'],
        },
        {
            id: 7,
            ingredients: ['mushroom', 'pecorino', 'smoked scamorza', 'black pepper', 'thyme', 'garlic confit'],
        },
    ];

    const main = document.querySelector('main');

    const title = document.createElement('h2');
    title.classList.add('title');
    title.textContent = 'Menu';

    const menu = document.createElement('div');
    menu.classList.add('menu');

    menu.appendChild(title);

    const menuItems = document.createElement('div');
    menuItems.classList.add('menu-item-grp');

    // Create elements for each pizza and description
    pizzas.forEach(pizza => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');

        const itemNumber = document.createElement('h3');
        itemNumber.textContent = '#' + pizza.id;

        let description = '';
        const para = document.createElement('p');

        // Add each ingredient to description with correct punctuation
        pizza.ingredients.forEach((ingredient, index) => {
            if (index === (pizza.ingredients.length - 1)) {
                description += `${ingredient}`
            } else {
            description += `${ingredient}, `;
            }
            menuItem.setAttribute('id', pizza.id);
        });

        para.textContent = description;

        menuItem.appendChild(itemNumber);
        menuItem.appendChild(para);

        menuItems.appendChild(menuItem);
    });

    menu.appendChild(menuItems);
    
    main.appendChild(menu);
}
