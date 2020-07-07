const home = (() => {
  const homeContainer = document.createElement('div');
  const container = document.createElement('div');
  const heading = document.createElement('div');
  const text = document.createElement('div');
  const img = document.createElement('img');
  homeContainer.classList.add('home-container');
  img.src =
    'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80';
  img.classList.add('home-image');
  img.alt = 'Food Main';
  heading.classList.add('heading');
  container.classList.add('container');
  text.classList.add('text');
  heading.textContent = 'Welcome to the Chinua Restaurant';
  text.textContent =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia vero inventore non voluptatem! Accusantium, voluptatem fugit possimus magnam sunt placeat in obcaecati! ';
  container.appendChild(heading);
  container.appendChild(text);
  homeContainer.appendChild(container);
  homeContainer.appendChild(img);
  return homeContainer;
})();

export default home;
