import bookTab from '../components/book_tab';

export default function showBook() {
  const contentContainer = document.querySelector('.contentContainer');
  contentContainer.innerHTML = '';
  contentContainer.appendChild(bookTab());
}
