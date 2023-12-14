// Import file yang diperlukan
import CONFIG from '../globals/config'; // Sesuaikan path sesuai struktur proyek Anda

// Fungsi untuk menampilkan hasil pencarian di dalam elemen HTML
export const displaySearchResults = (results) => {
  const mainContent = document.getElementById('mainContent');
  mainContent.innerHTML = ''; // Kosongkan konten utama sebelum menambahkan hasil pencarian

  results.forEach((result) => {
    const resultElement = document.createElement('div');
    resultElement.classList.add('slide-content');

    resultElement.innerHTML = `
        <div id="card-wrapper" class="card-wrapper swiper-wrapper">
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
     </div>
    </div>
    `;

    mainContent.appendChild(resultElement);
  });
};
