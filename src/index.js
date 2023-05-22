import './style.css';

import header from './components/header';
import tab from './components/tab';

import showHome from './tab_functions/showHome';

document.body.appendChild(header());
document.body.appendChild(tab());

const contentContainer = document.createElement('div');
contentContainer.classList.add('contentContainer');
document.body.appendChild(contentContainer);

showHome();
