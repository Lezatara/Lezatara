import CONFIG from "../../globals/config";

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
  ${result.ingredients.map((ingredient) => ` <li>${ingredient.bahan}: ${ingredient.jumlah}</li>`).join("")}
</ul>
  <h3>Langkah-langkah</h3>
    <ol class="result-steps">
      ${result.receipt.map((receipts) => `<li>${receipts}</li>`).join("")}
    </ol>
  </div>
 
  `;

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
           <h2 class="name"><a href="${`/#/detail-recipes/${result.name}`}">${result.name || "-"}</a></h2>
           <p class="description">${result.desc}</p>

           <button class="button"><a href="${`/#/detail-recipes/${result.name}`}">View More</a></button>
         </div>
         
       </div>
       
`;

const createRegionItemTemplate = (result) => {
  const regionImageName = result.toLowerCase().replace(/\s+/g, "_") + ".jpeg";

  return `
        <div class="result-item">
          <div class="result-item-header">
           <img src="./${regionImageName}" alt="${result}">
            </div>
        
        <div class="result-content">
          <h2 class="name"><a href="${`/#/detail-regions/${result}`}">${result || "-"}</a></h2>
          <p class="description">${result.desc}</p>

          <button class="button"><a href="${`/#/detail-regions/${result.regional}`}">Lihat Masakan</a></button>
        </div>
        </div>
      </div>
`;
};

const createDetailRegionTemplate = (result) => `
        <div class="result-item">
          <div class="result-item-header">
            <div class="result-item-picture" src="${CONFIG.BASE_IMAGE_URL + result.id} alt="${result.name}">
          </div>
      </div>
       </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this recipe" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this recipe" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export { createRecipeItemTemplate, createRecipesDetailTemplate, createRegionItemTemplate, createDetailRegionTemplate, createLikeButtonTemplate, createLikedButtonTemplate };
