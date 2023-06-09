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

  para1.textContent = 'We believe that good food is the foundation of a happy life, and we express that belief in every dish we serve.';
  para2.textContent = 'We are located in Covent Gardens, but join us for an evening and your pallete will be transported to the most beautiful province in Italy. Tuscany may be famous for it\'s wine, but a good wine deserves even better food. Our menu ensures that you can enjoy the finest Chianti with a plate of the best handmade Italian fare available in London.';
  para3.textContent = 'So join us for your next celebration, your next date night, or your next family reunion, and relax for a few hours in the comfort of a true Tuscan dining experience.';
  para4.textContent = 'At Ristorante Rustico Toscano, we don\'t just wish you "Buono appetito", we promise it.';

  return homeContent;
}
