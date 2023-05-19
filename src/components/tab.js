export default function tab() {
  const tabs = document.createElement('div');

  const tab1 = document.createElement('div');
  const tab2 = document.createElement('div');
  const tab3 = document.createElement('div');

  tab1.classList.add('tab');
  tab2.classList.add('tab');
  tab3.classList.add('tab');

  tab1.textContent = 'Home';
  tab2.textContent = 'Menus';
  tab3.textContent = 'Book';

  tabs.appendChild(tab1);
  tabs.appendChild(tab2);
  tabs.appendChild(tab3);

  return tabs;
}
