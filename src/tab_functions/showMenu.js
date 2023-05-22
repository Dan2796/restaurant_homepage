import menuTab from '../components/menu_tab';

export default function showMenu() {
  const contentContainer = document.querySelector('.contentContainer');
  contentContainer.innerHTML = '';
  contentContainer.appendChild(menuTab());
}
