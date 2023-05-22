export default function bookTab() {
  const bookingContent = document.createElement('div');
  const para1 = document.createElement('p');
  const para2 = document.createElement('p');
  const para3 = document.createElement('p');
  const para4 = document.createElement('p');

  bookingContent.appendChild(para1);
  bookingContent.appendChild(para2);
  bookingContent.appendChild(para3);
  bookingContent.appendChild(para4);

  para1.textContent = 'If you would like to book a table with us, please call us on 01965 212221.';
  para2.textContent = 'If you can\'t reach it us, it\'s probably because that number is one we just made up for the purpose of making this website look realistic.';
  para3.textContent = 'You can also email us at lefrenchcusine@gmail.com';
  para4.textContent = 'Though again, don\'t expect a speedy reply from this completely made up email account...';

  return bookingContent;
}
