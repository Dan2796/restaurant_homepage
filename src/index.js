import '/src/style.css';

import header from '/src/components/header';
import tab from '/src/components/tab';
import imageCredit from '/src/components/image_credit';

import showHome from '/src/tab_functions/showHome';

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

backgroundImageBox.appendChild(imageCredit());

showHome();
