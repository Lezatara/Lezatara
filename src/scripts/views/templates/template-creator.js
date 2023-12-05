import CONFIG from "../../globals/config";

const createRecipeItemTemplate = (result) => `
       <div class="card swiper-slide">
         <div class="overlay">
           <div class="image-content">
             <div class="card-image">
               <img src="${CONFIG.BASE_IMAGE_URL + result.id}" alt="${result.name || "-"}"class="card-img" />
             </div>
           </div>
         </div>
         <div class="card-content">
           <h2 class="name"><a href="${`/#/detail-recipes/${result.id}`}">${result.name || "-"}</a></h2>
           <p class="description">${result.desc}</p>

           <button class="button"><a href="${`/#/detail-recipes/${result.id}`}">View More</a></button>
         </div>
         
       </div>
       
`;

const createRecipesDetailTemplate = (result) => `
<h2 class="result-name">${result.name}</h2>
  <img class="result-picture" src="${CONFIG.BASE_IMAGE_URL + result.id}" alt="${result.name}"/>
  <div class="result-description">
    <h3>Deskripsi</h3>
    <p>${result.desc}</p>
  </div>
  <div class="result-info">
  <h3>Bahan-bahan</h3>
    <ul class="ingredients-list">
      ${result.ingredients.map((ingredient) => `<li>${ingredient}</li>`).join("•")}
    </ul>
  <h3>Langkah-langkah</h3>
    <ol class="result-steps">
      ${result.receipt.map((receipts) => `<li>${receipts}</li>`).join("•")}
    </ol>
  </div>
  `;

export { createRecipeItemTemplate, createRecipesDetailTemplate };
