export default function imageCredit() {
  const element = document.createElement('a');
  element.setAttribute('href', 'https://www.freepik.com/free-photo/food-with-ingredients_6216943.htm#query=restaurant&position=12&from_view=search&track=sph');
  element.classList.add('imageCreditLink');
  element.textContent = 'Image by valeria_aksakova on Freepik';

  return element;
}
