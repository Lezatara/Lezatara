class FavoriteRecipeShowPresenter {
  constructor({ view, favoriteRecipe }) {
    this._view = view;

    this._favoriteRecipe = favoriteRecipe;

    this._showFavoriteRecipe();
  }

  async _showFavoriteRecipe() {
    const result = await this._favoriteRecipe.getAllRecipe();
    this._displayRecipe(result);
  }

  _displayRecipe(result) {
    this._view.showFavoriteRecipe(result);
  }
}

export default FavoriteRecipeShowPresenter;
