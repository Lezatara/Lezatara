import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/swiper-bundle.min.css';
import '../scripts/utils/swiper-bundle.min.js';
import Swiper from 'swiper';
import { initializeSearch } from './utils/search.js';
import App from './views/app';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});

var swiper = new Swiper('.slide-content', {
  slidesPerView: 3,
  speaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

document.addEventListener('DOMContentLoaded', function () {
  initializeSearch();
});