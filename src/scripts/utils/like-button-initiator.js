import FavoriteRecipeIdb from '../data/favorite-recipe-idb';
import {
  createLikeButtonTemplate,
  createLikedButtonTemplate,
} from '../views/templates/template-creator';

const LikeButtonPresenter = {
  async init({ likeButtonContainer, result }) {
    this._likeButtonContainer = likeButtonContainer;
    this._result = result;
    this._favoriteRecipe = FavoriteRecipeIdb;

    await this._renderButton();
  },

  async _renderButton() {
    const { name } = this._result;

    if (await this._isRecipeExist(name)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRecipeExist(name) {
    const result = await this._favoriteRecipe.getRecipe(name);
    return !!result;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this._favoriteRecipe.putRecipe(this._result);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this._favoriteRecipe.deleteRecipe(this._result.name);
      this._renderButton();
    });
  },
};

export default LikeButtonPresenter;
