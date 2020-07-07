import home from './components/Home';
import menuContainer from './components/Menu';
import contact from './components/Contact';

const header = document.createElement('header');
const logo = document.createElement('div');
const li = document.createElement('div');
const homeLink = document.createElement('a');
const contactLink = document.createElement('a');
const menu = document.createElement('a');
const content = document.getElementById('content');
const main = document.createElement('main');

menu.textContent = 'Menu';
contactLink.textContent = 'Contact';
homeLink.textContent = 'Home';
logo.textContent = 'Chinua Restaurant';
content.appendChild(header);
header.appendChild(logo);
header.appendChild(li);
li.appendChild(homeLink);

li.appendChild(menu);
li.appendChild(contactLink);
content.appendChild(main);
logo.classList.add('logo');
li.classList.add('li');
main.appendChild(home);

homeLink.addEventListener('click', () => {
  main.removeChild(main.lastChild);
  main.appendChild(home);
});
menu.addEventListener('click', () => {
  main.removeChild(main.lastChild);
  main.appendChild(menuContainer);
});
contactLink.addEventListener('click', () => {
  main.removeChild(main.lastChild);
  main.appendChild(contact);
});
