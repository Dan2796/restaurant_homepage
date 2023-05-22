export default function menuTab() {
  const menuContent = document.createElement('div');
  const para1 = document.createElement('p');
  const para2 = document.createElement('p');
  const para3 = document.createElement('p');
  const para4 = document.createElement('p');

  menuContent.appendChild(para1);
  menuContent.appendChild(para2);
  menuContent.appendChild(para3);
  menuContent.appendChild(para4);

  para1.textContent = 'Italian food item 1 ';
  para2.textContent = 'More Italian food';
  para3.textContent = 'Some other Italian food';
  para4.textContent = 'Some English cuisine... just kidding, this will also be Italian food.';

  return menuContent;
}
