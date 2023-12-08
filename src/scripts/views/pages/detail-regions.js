import { createDetailRegionTemplate } from "../templates/template-creator";
import TheRecipesSource from "../../data/therecipes-source";

const DetailRegions = {
  async render() {
    return `
    <div class="contentDetail">
       <h2 class="title">Resep Masakan</h2>
       <div id="region" class="region">
    </div>
      `;
  },

  async afterRender() {
    const detailRegion = await TheRecipesSource.DetailRegion();
    const recipesContainer = document.querySelector("#region");
    detailRegion.forEach((result) => {
      recipesContainer.innerHTML += createDetailRegionTemplate(result);
    });
  },
};

export default DetailRegions;
