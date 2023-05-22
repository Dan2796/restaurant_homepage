export default function menuTab() {
  const menuContent = document.createElement('div');
  const para1 = document.createElement('p');
  const para2 = document.createElement('p');
  const para3 = document.createElement('span');
  const link = document.createElement('a');
  const para4 = document.createElement('span');
  const para5 = document.createElement('p');
  menuContent.appendChild(para1);
  menuContent.appendChild(para2);
  menuContent.appendChild(para3);
  menuContent.appendChild(link);
  menuContent.appendChild(para4);
  menuContent.appendChild(para5);

  para1.textContent = 'We offer the finest fare that Italy has to offer.';
  para2.textContent = 'If you\'re not feeling too hungry, try a bowl of pasta or something else from our Primo courses. If you are in need of something more filling, a range of traditional dishes await you in the Secondi section. Or for a true Italian experience, try one of each, and also see our Starters, our Desserts, and our fine selection of Grappa.';
  para3.textContent = 'Our full menu can be downloaded ';
  link.setAttribute('href', 'https://en.wikipedia.org/wiki/Tuscany');
  link.textContent = 'here';
  para4.textContent = '.';
  para5.textContent = 'If you have specific dietary requirements or concerns, please let us know in advance and our chefs will happily accomodate your needs.';

  return menuContent;
}
