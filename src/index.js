import _ from 'lodash';
import './style.css';
import init from './init.js';
import { createSocialIcons } from './init.js';

init();
document.body.appendChild(createSocialIcons());