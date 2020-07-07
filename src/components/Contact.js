const contact = (() => {
  const contactContainer = document.createElement('div');
  const containerOne = document.createElement('div');
  const headingOne = document.createElement('div');
  const address = document.createElement('div');
  const numberRestaurant = document.createElement('div');
  const imgOne = document.createElement('img');
  contactContainer.classList.add('contact-container');
  imgOne.src = 'https://images.unsplash.com/photo-1464869372688-a93d806be852?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80';
  imgOne.classList.add('contact-image');
  imgOne.alt = 'Restaurant Location';
  headingOne.classList.add('heading-one');
  containerOne.classList.add('container-one');

  headingOne.textContent = 'Contact Us';
  address.textContent = 'Address: 22-Gil 3-ro Hongdae,Mapo-Gu Seoul, South Korea';
  numberRestaurant.textContent = ' Mobile number: +31-91230-23423';
  numberRestaurant.classList.add('number');
  address.classList.add('address');

  containerOne.appendChild(headingOne);
  containerOne.appendChild(address);

  containerOne.appendChild(numberRestaurant);

  contactContainer.appendChild(imgOne);
  contactContainer.appendChild(containerOne);
  return contactContainer;
})();

export default contact;
