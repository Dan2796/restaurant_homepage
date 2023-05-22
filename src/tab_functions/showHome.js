import homeTab from '../components/home_tab';

export default function showHome() {
  const contentContainer = document.querySelector('.contentContainer');
  contentContainer.innerHTML = '';
  contentContainer.appendChild(homeTab());
}
