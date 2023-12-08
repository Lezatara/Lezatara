import UrlParser from "../../routes/url-parser";
import { createRecipesDetailTemplate } from "../templates/template-creator";
import TheRecipesSource from "../../data/therecipes-source";

const DetailRecipes = {
  async render() {
    return `
    <h2 class="title" >Detail Recipe</h2>
   <div id="result" class="result">
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
    });
    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector("#likeButtonContainer"),
      result: {
        id: result.id,
        name: result.name,
        desc: result.desc,
        picture: result.picture,
        regional: result.regional,
      },
    });
  },
};

export default DetailRecipes;
