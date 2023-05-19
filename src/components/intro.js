export default function intro() {
  const para1 = document.createElement('p');
  const para2 = document.createElement('p');

  para1.textContent = 'Welcome to le restaurent de le tres authentic cuisine Francais. Je pense que you will enjoy it tres bien.';

  para2.textContent = 'Regardez vous our perfetto menus and please swing by our restaurent for, as they say in Paris, a "bon \'appy eat".';

  return { para1, para2 };
}
