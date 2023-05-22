import './style.css';

import header from './components/header';
import tab from './components/tab';
import imageCredit from './components/imageCredit';

import showHome from './tab_functions/showHome';

const backgroundImageBox = document.createElement('div');
backgroundImageBox.classList.add('backgroundImageBox');
document.body.appendChild(backgroundImageBox);

const allContent = document.createElement('div');
allContent.classList.add('allContent');
backgroundImageBox.appendChild(allContent);
allContent.appendChild(header());
allContent.appendChild(tab());

const tabContentContainer = document.createElement('div');
tabContentContainer.classList.add('contentContainer');
allContent.appendChild(tabContentContainer);

allContent.appendChild(imageCredit());

showHome();
