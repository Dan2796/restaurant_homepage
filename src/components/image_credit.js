export default function imageCredit() {
  const combinedText = document.createElement('div');
  combinedText.classList.add('imageCredit');
  const prefix = document.createElement('span');
  const link = document.createElement('a');
  const suffix = document.createElement('span');
  link.setAttribute('href', 'https://www.freepik.com/free-photo/food-with-ingredients_6216943.htm#query=restaurant&position=12&from_view=search&track=sph');
  link.classList.add('imageCreditLink');
  prefix.textContent = 'Background image by ';
  link.textContent = 'valeria_aksakova';
  suffix.textContent = ' on Freepik.';
  combinedText.appendChild(prefix);
  combinedText.appendChild(link);
  combinedText.appendChild(suffix);

  return combinedText;
}
