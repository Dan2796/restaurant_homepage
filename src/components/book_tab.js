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

  para1.textContent = 'If you would like to book a table, please call us on 0871 976 2819.';
  para2.textContent = 'You can also email us at rustica_toscano_bookings@gmail.com.';
  para3.textContent = 'A reservation is not necessary to dine with us, but we do reccomend booking in advance if you want to be sure of a space, particulary during busy periods.';
  para4.textContent = 'We look forward to seeing you.';

  return bookingContent;
}
