import view from './app.html';
import app from './js/app.js';
import './style.css';

const root = document.getElementById('root');
root.innerHTML = view;

window.addEventListener('load', () => app());