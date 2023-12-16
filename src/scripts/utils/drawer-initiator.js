const DrawerInitiator = {
  init({ button, drawer }) {
    button.addEventListener('click', (event) => {
      drawer.classList.toggle('open');
      event.stopPropagation();
    });

    document.body.addEventListener('click', () => {
      drawer.classList.remove('open');
    });
  },
};
export default DrawerInitiator;
