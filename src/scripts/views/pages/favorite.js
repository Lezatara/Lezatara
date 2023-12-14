import FavoriteRecipeIdb from '../../data/favorite-recipe-idb';
import { createRecipeFavoriteTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <main id="mainContent">
    <section class="content">
    <h2 class="title" tabindex="0">Your Favorite Recipe</h2>
  </section>
  <div class="slide-container swiper">
  <div class="slide-content">
  <div id="card-wrapper" class="card-wrapper swiper-wrapper">
  
  </div>
  
    </div>
    </div>
    </main>
    `;
  },

  async afterRender() {
    const recipes = await FavoriteRecipeIdb.getAllRecipe();
    const recipesContainer = document.querySelector('#card-wrapper');
    recipes.forEach((result) => {
      recipesContainer.innerHTML += createRecipeFavoriteTemplate(result);
    });
  },
};

export default Favorite;
