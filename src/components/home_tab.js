export default function homeTab() {
  const homeContent = document.createElement('div');
  const para1 = document.createElement('p');
  const para2 = document.createElement('p');
  const para3 = document.createElement('p');
  const para4 = document.createElement('p');

  homeContent.appendChild(para1);
  homeContent.appendChild(para2);
  homeContent.appendChild(para3);
  homeContent.appendChild(para4);

  para1.textContent = 'Welcome to le restaurant de le tres authentic cuisine Francais.';
  para2.textContent = 'Je pense que you will enjoy it tres bien.';
  para3.textContent = 'Regardez vous our perfetto menus and please come to our restaurant.';
  para4.textContent = 'As they say in Paris, we hope you have a "bon \'appy eat".';

  return homeContent;
}
