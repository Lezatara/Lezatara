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
  regions: [
    {
      img: "./Balinusra.jpeg",
    },
    {
      img: "./Kalimantan.jpeg",
    },
    {
      img: "./Papuamaluku.jpeg",
    },
    {
      img: "./Sulawesi.jpeg",
    },
    {
      img: "./Sumatera.jpeg",
    },
    {
      img: "./Jawa.jpeg",
    }
  ],

  generatePulau(regions) {
    return `
      <div class="pulau">
        <img src="${regions.img}" alt="pulau">
      </div>
    `
  }
};



  

export default Recipes;
