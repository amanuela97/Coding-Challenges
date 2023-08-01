const hamIcon = document.querySelector('.ham-icon');
const nav = document.querySelector('nav');

hamIcon.addEventListener('click', (e) => {
  e.preventDefault();
  const value = hamIcon.dataset.hamstate === 'closed' ? 'open' : 'closed';
  hamIcon.setAttribute('data-hamstate', value);
  nav.setAttribute('data-navstate', value);
  console.log(hamIcon.dataset.hamstate);
});
