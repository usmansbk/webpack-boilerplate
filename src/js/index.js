import '../style.css';

const component = () => {
  const element = document.createElement('div');

  element.innerHTML = 'Welcome to Microverse';
  element.classList.add('hello');

  return element;
};

document.body.appendChild(component());
