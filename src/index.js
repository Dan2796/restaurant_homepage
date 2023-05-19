import './style.css';

import header from './components/header';
import intro from './components/intro';
import tab from './components/tab';

document.body.appendChild(header());
document.body.appendChild(intro().para1, intro().para2);
document.body.appendChild(tab());

const tabContainer = document.createElement('div');
tabContainer.classList.add('contentContainer');
document.body.appendChild(tabContainer);
