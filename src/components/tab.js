import showHome from '../tab_functions/showHome';
import showMenu from '../tab_functions/showMenu';
import showBook from '../tab_functions/showBook';

export default function tab() {
  const tabs = document.createElement('div');
  tabs.classList.add('tabs');

  const tab1 = document.createElement('button');
  const tab2 = document.createElement('button');
  const tab3 = document.createElement('button');

  tab1.classList.add('tab');
  tab2.classList.add('tab');
  tab3.classList.add('tab');

  tab1.textContent = 'Home';
  tab2.textContent = 'Menus';
  tab3.textContent = 'Book';

  tab1.onclick = showHome;
  tab2.onclick = showMenu;
  tab3.onclick = showBook;

  tabs.appendChild(tab1);
  tabs.appendChild(tab2);
  tabs.appendChild(tab3);

  return tabs;
}
