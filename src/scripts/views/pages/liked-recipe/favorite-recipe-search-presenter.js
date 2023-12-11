class FavoriteRecipeSearchPresenter {
  constructor({ favoriteRecipe, view }) {
    this._favoriteRecipe = favoriteRecipe;
    this._view = view;

    this._listenToSearchRequestByUser();
  }

  _listenToSearchRequestByUser() {
    this._view.runWhenUserIsSearching((latestQuery) => {
      this._searchRecipe(latestQuery);
    });
  }

  async _searchRecipe(latestQuery) {
    this._latestQuery = latestQuery.trim();
    let foundRecipe;
    if (this.latestQuery.length > 0) {
      foundRecipe = await this._favoriteRecipe.searchRecipe(this.latestQuery);
    } else {
      foundRecipe = await this._favoriteRecipe.getAllRecipe();
    }
    this._showFoundRecipe(foundRecipe);
  }

  _showFoundRecipe(result) {
    this._view.showFavoriteRecipe(result);
  }

  get latestQuery() {
    return this._latestQuery;
  }
}

export default FavoriteRecipeSearchPresenter;
