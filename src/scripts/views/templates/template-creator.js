import CONFIG from '../../globals/config';

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
           <h2 class="name"><a href="${`/#/detail-recipes/${result.id}`}">${
  result.name || '-'
}</a></h2>
           <p class="description">${result.desc}</p>

           <button class="button"><a href="${`/#/detail-recipes/${result.id}`}">View More</a></button>
         </div>
         
       </div>
       
`;

export { createRecipeItemTemplate };
