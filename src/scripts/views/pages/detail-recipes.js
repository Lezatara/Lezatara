import UrlParser from "../../routes/url-parser";
import { createRecipesDetailTemplate } from "../templates/template-creator";
import TheRecipesSource from "../../data/therecipes-source";
import LikeButtonPresenter from "../../utils/like-button-initiator";
import FavoriteRecipeIdb from "../../data/favorite-recipe-idb";

const DetailRecipes = {
  async render() {
    return `
    <h2 class="title" >Detail Recipe</h2>
   <div id="result" class="result"></div>
   <div id="likeButtonContainer"></div>
    
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detail = await TheRecipesSource.DetailRecipe(url.name);
    const recipesContainer = document.querySelector("#result");
    detail.forEach((result) => {
      recipesContainer.innerHTML = createRecipesDetailTemplate(result);
      LikeButtonPresenter.init({
        likeButtonContainer: document.querySelector("#likeButtonContainer"),
        favoriteRecipe: FavoriteRecipeIdb,
        result: {
          name: url.name,
          title: result.name,
          desc: result.desc,
          picture: result.idPicture,
        },
      });
    });
  },
};

export default DetailRecipes;
