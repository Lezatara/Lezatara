import FavoriteRecipeIdb from '../data/favorite-recipe-idb';
import {
  createLikeButtonTemplate,
  createLikedButtonTemplate,
} from '../views/templates/template-creator';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, _result }) {
    this._likeButtonContainer = likeButtonContainer;
    this._result = _result;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this.__result;

    if (await this._isRecipeExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRecipeExist(id) {
    const result = await FavoriteRecipeIdb.getRecipe(id);
    return !!result;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRecipeIdb.putRecipe(this._result);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRecipeIdb.deleteRecipe(this._result.id);
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
