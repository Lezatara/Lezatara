import { createRecipeItemTemplate } from '../../templates/template-creator';

class FavoriteRecipeView {
  getTemplate() {
    return `
    <div class="search-form">
        <input id="query" type="search" placeholder=" Search" />
        <label for="search-box" class="fas fa-search"></label>
      </div>
      <main id="mainContent">
    <section class="content">
    <h2 class="title" tabindex="0">Your Favorite Recipe</h2>
  </section>
 
  
  <div id="card-wrapper" class="card-wrapper swiper-wrapper">
    </main>
   
  `;
  }

  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  showRecipe(result) {
    this.showFavoriteRecipe(result);
  }

  showFavoriteRecipe(result) {
    let html;
    if (result.length) {
      html = result.reduce(
        (carry, result) => carry.concat(createRecipeItemTemplate(result)),
        ''
      );
    } else {
      html = this._getEmptyRecipeTemplate();
    }
    document.querySelector('#card-wrapper').innerHTML = html;

    document
      .querySelector('#card-wrapper')
      .dispatchEvent(new Event('recipes:updated'));
  }

  _getEmptyRecipeTemplate() {
    return `
      <div class="recipe-item__not__found">
        Resep tidak di temukan
      </div>
    `;
  }
}

export default FavoriteRecipeView;
