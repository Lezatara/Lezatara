import CONFIG from "../../globals/config";

const createRecipesDetailTemplate = (result) => `
  <h2 class="result-name">Resep ${result.name}</h2>
  <div class="row mt-4">
    <div class="col-lg-5">
      <img class="result-picture" style="width: 100%; height: auto;" src="${CONFIG.BASE_IMAGE_URL + result.id}" alt="${result.name}"/>
      <div class="result-description mt-3">
        <h5>Deskripsi</h5>
        <p>${result.desc}</p>
      </div>
    </div>
    <div class="col-lg-7">
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
      <div id="reveiw-form-container" class="mb-4">
          <div class="card card-review">
            <div class="card-body">
              <h3>Tambah Ulasan</h3>
              <form id="reviewForm">
                  <div class="form-group d-flex flex-column mb-3">
                      <label class="form-label" for="name-input">Nama</label>
                      <input type="text" id="name-input" name="review-name" class="form-control" required placeholder="Masukkan nama (Maks 16 karakter)">
                  </div>
                  <div class="form-group d-flex flex-column mb-3">
                      <label class="form-label" for="review-input">Ulasan</label>
                      <textarea id="review-input" name="review-content" class="form-control" required placeholder="Masukkan isi review"></textarea>
                  </div>
                  <button id="submit-review" type="submit" class="btn btn-primary btn-submit">Submit</button>
              </form>
              </div>
          </div>
      </div>
      <div id="review-container"></div>
    </div>
  </div>
  `;

const createRecipeItemTemplate = (result) => `
       <div class="card-recipe swiper-slide">
         <div class="overlay">
           <div class="image-content-recipe">
             <div class="card-image">
               <img src="${CONFIG.BASE_IMAGE_URL + result.id}" alt="${result.name || "-"}"class="card-img" />
             </div>
           </div>
         </div>
         <div class="card-content-recipe">
           <h2 class="name"><a href="${`/#/detail-recipes/${result.name}`}">${result.name || "-"}</a></h2>
           <p class="description">${result.desc}</p>
           <button class="button"><a href="${`/#/detail-recipes/${result.name}`}">View More</a></button>
         </div>
       </div>     
`;

const createRecipeFavoriteTemplate = (result) => `
       <div class="card-recipe swiper-slide">
         <div class="overlay">
           <div class="image-content-recipe">
             <div class="card-image">
               <img src="${CONFIG.BASE_IMAGE_URL + result.picture}" alt="${result.name || "-"}"class="card-img" />
             </div>
           </div>
         </div>
         <div class="card-content-recipe">
           <h2 class="name"><a href="${`/#/detail-recipes/${result.name}`}">${result.title || "-"}</a></h2>
           <p class="description">${result.desc}</p>
           <button class="button"><a href="${`/#/detail-recipes/${result.name}`}">View More</a></button>
         </div>
       </div>
`;

const createRegionItemTemplate = (result) => `
        <div class="result-item">
          <div class="result-item-header">
            </div>
        <div class="result-content">
          <h2 class="name"><a href="${`/#/detail-regions/${result}`}">${result || "-"}</a></h2>
          <p class="description">${result.desc}</p>
          <button class="button"><a href="${`/#/detail-regions/${result.regional}`}">Lihat Masakan</a></button>
        </div>
        </div>
      </div>
`;

const createDetailRegionTemplate = (result) => `
    <div class="contentDetail">
        <div class="result-item-region">
        <img class="result-item-picture-region" src="${CONFIG.BASE_IMAGE_URL + result.id}" alt="${result.name}"/>
          <div class="result-content-region">
          <h2 class="name"><a href="${`/#/detail-recipes/${result.name}`}">${result.name || "-"}</a></h2>
          <p class="description">${result.desc}</p>
        
          <button class="button"><a href="${`/#/detail-recipes/${result.name}`}">View More</a></button>
        </div>
      </div>
    </div>
`;

const createReviewFormTemplate = () => `
    <div class="col">
        <div class="review-form">
            <h3>Tambah Ulasan</h3>
            <form id="reviewForm">
                <div class="form-group">
                    <label for="inputName">Nama</label>
                    <input type="text" id="inputName" name="review-name" class="form-control" required placeholder="Masukkan nama (Maks 16 karakter)">
                </div>
                <div class="form-group">
                    <label for="inputReview">Isi Review</label>
                    <textarea id="inputReview" name="review-content" class="form-control" required placeholder="Masukkan isi review"></textarea>
                </div>
                <button type="submit" class="btn-submit">Submit</button>
            </form>
        </div>
    </div>
`;

const createReviewViewTemplate = (result) => `
        <div class="detail-review my-2">
            <div class="detail-review-item p-0 rounded">
            <div class="review-header">
                <span class="review-name">${result.nama}</span>
                <span class="review-date">(${result.tanggal})</span>
                </div>
            <div class="review-body">
                <p>${result.isi_review}</p>
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

export {
  createRecipeItemTemplate,
  createRecipesDetailTemplate,
  createRegionItemTemplate,
  createRecipeFavoriteTemplate,
  createDetailRegionTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createReviewFormTemplate,
  createReviewViewTemplate,
};
