import TheRecipesSource from "../../data/therecipes-source";
import { createRegionItemTemplate } from "../templates/template-creator";

const Recipes = {
  async render() {
    return `
      <div class="contentDetail">
         <h2 class="title" >Aneka Resep Masakan</h2>
         <div id="regions" class="regions">
         </div>
      </div>
  
        `;
  },

  async afterRender() {
    const regionals = await TheRecipesSource.ListRegion();
    const recipesContainer = document.querySelector("#regions");
    regionals.forEach((result) => {
      recipesContainer.innerHTML += createRegionItemTemplate(result);
    });
  },
};

export default Recipes;
