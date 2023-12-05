import UrlParser from "../../routes/url-parser";
import { createRecipesDetailTemplate } from "../templates/template-creator";
import TheRecipesSource from "../../data/therecipes-source";

const DetailRecipe = {
  async render() {
    return `
   <h2 class="title" >Detail Recipes Page</h2>
    <div class="result" id="result"></div>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const result = await TheRecipesSource.DetailRecipe(url.id);
    const recipesContainer = document.querySelector("#result");
    recipesContainer.innerHTML = createRecipesDetailTemplate(result);
  },
};

export default DetailRecipe;
