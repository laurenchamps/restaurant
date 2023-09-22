import _ from 'lodash';
import './style.css';
import BackgroundImg from './pizza.jpg';

function component() {
    const element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'World'], ' ');

    return element;
}

document.body.appendChild(component());