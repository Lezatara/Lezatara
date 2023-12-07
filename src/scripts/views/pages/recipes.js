import TheRecipesSource from '../../data/therecipes-source';
import { createRegionItemTemplate } from '../templates/template-creator';

const Recipes = {
  async render() {
    return `
    <h2 class="title">List Region Page</h2>
    <div class="slide-container">
      <div id="card-wrapper" class="card-wrapper">
        </div>
    </div>
            `;
  },

  async afterRender() {
    const regionals = await TheRecipesSource.ListRegion();
    const recipesContainer = document.querySelector('#card-wrapper');
    regionals.forEach((result) => {
      recipesContainer.innerHTML += createRegionItemTemplate(result);
    });
  },
};

export default Recipes;
