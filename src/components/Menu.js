const arr = [
  {
    title: 'lasagne',
    image:
      'https://images.unsplash.com/photo-1510693206972-df098062cb71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1201&q=80',
    price: '$20',
  },
  {
    title: 'spaghetti bolognese',
    image:
      'https://images.unsplash.com/photo-1441956012299-6de0ee8948bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    price: '20.5',
  },
  {
    title: 'spagheeti meatballs',
    image:
      'https://images.unsplash.com/photo-1586819286107-b4fb6cc7049f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1270&q=80',
    price: '$21.5',
  },
];
const menuContainer = document.createElement('div');
menuContainer.classList.add('menu-container');

for (let i = 0; i < arr.length; i += 1) {
  const card = document.createElement('div');

  const cardImage = document.createElement('img');
  const cardName = document.createElement('div');
  const cardPrice = document.createElement('div');
  card.classList.add('card');
  cardImage.classList.add('card-image');
  cardPrice.classList.add('card-price');
  cardName.classList.add('card-name');
  cardName.textContent = arr[i].title;
  cardPrice.textContent = arr[i].price;
  cardImage.src = arr[i].image;
  card.appendChild(cardImage);
  card.appendChild(cardName);
  card.appendChild(cardPrice);
  menuContainer.appendChild(card);
}

export default menuContainer;
