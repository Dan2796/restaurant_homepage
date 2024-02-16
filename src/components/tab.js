import showHome from '/src/tab_functions/showHome';
import showMenu from '/src/tab_functions/showMenu';
import showBook from '/src/tab_functions/showBook';

export default function tab() {
  const tabs = document.createElement('div');
  tabs.classList.add('tabs');

  const tab1 = document.createElement('button');
  const tab2 = document.createElement('button');
  const tab3 = document.createElement('button');

  tab1.classList.add('tab');
  tab2.classList.add('tab');
  tab3.classList.add('tab');

  tab1.textContent = 'Welcome';
  tab2.textContent = 'Our menu';
  tab3.textContent = 'Book a table';

  tab1.onclick = showHome;
  tab2.onclick = showMenu;
  tab3.onclick = showBook;

  tabs.appendChild(tab1);
  tabs.appendChild(tab2);
  tabs.appendChild(tab3);

  return tabs;
}
