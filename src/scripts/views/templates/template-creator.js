import CONFIG from '../../globals/config';

const createRecipesDetailTemplate = (result) => `
<h2 class="result-name">${result.name}</h2>
  <img class="result-picture" src="${CONFIG.BASE_IMAGE_URL + result.id}" alt="${
  result.name
}"/>
  <div class="result-description">
    <h3>Deskripsi</h3>
    <p>${result.desc}</p>
    <button class="button"><a href="${`/#/getreview/${result.id}`}">Reviews</a></button>
  </div>
  <div class="result-info">
  <h3>Bahan-bahan</h3>
  <ul class="ingredients-list">
  ${result.ingredients
    .map((ingredient) => ` <li>${ingredient.bahan}: ${ingredient.jumlah}</li>`)
    .join('')}
</ul>
  <h3>Langkah-langkah</h3>
    <ol class="result-steps">
      ${result.receipt.map((receipts) => `<li>${receipts}</li>`).join('')}
    </ol>
  </div>
  `;

const createRecipeItemTemplate = (result) => `
       <div class="card swiper-slide">
         <div class="overlay">
           <div class="image-content">
             <div class="card-image">
               <img src="${CONFIG.BASE_IMAGE_URL + result.id}" alt="${
  result.name || '-'
}"class="card-img" />
             </div>
           </div>
         </div>
         <div class="card-content">
           <h2 class="name"><a href="${`/#/detail-recipes/${result.name}`}">${
  result.name || '-'
}</a></h2>
           <p class="description">${result.desc}</p>
           <button class="button"><a href="${`/#/detail-recipes/${result.name}`}">View More</a></button>
         </div>
       </div>     
`;

const createRecipeFavoriteTemplate = (result) => `
       <div class="card swiper-slide">
         <div class="overlay">
           <div class="image-content">
             <div class="card-image">
               <img src="${CONFIG.BASE_IMAGE_URL + result.picture}" alt="${
  result.name || '-'
}"class="card-img" />
             </div>
           </div>
         </div>
         <div class="card-content">
           <h2 class="name"><a href="${`/#/detail-recipes/${result.name}`}">${
  result.title || '-'
}</a></h2>
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
          <h2 class="name"><a href="${`/#/detail-regions/${result}`}">${
  result || '-'
}</a></h2>
          <p class="description">${result.desc}</p>
          <button class="button"><a href="${`/#/detail-regions/${result.regional}`}">Lihat Masakan</a></button>
        </div>
        </div>
      </div>
`;

const createDetailRegionTemplate = (result) => `
    <div class="contentDetail">
        <div class="result-item-region">
        <img class="result-item-picture-region" src="${
          CONFIG.BASE_IMAGE_URL + result.id
        }" alt="${result.name}"/>
          <div class="result-content-region">
          <h2 class="name"><a href="${`/#/detail-recipes/${result.name}`}">${
  result.name || '-'
}</a></h2>
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

  
        <div class="detail-review">
       
            <div class="detail-review-item">
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
