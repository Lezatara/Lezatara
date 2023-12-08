import TheRecipesSource from '../../data/therecipes-source';

const Recipes = {
  regions: [
    {
      regional: 'Bali-Nusa Tenggara',
      img: './Balinusra.jpeg',
      rendang: 'https://lezatara-backend.vercel.app/detail-recipes/rendang',
    },
    {
      regional: 'Kalimantan',
      img: './Kalimantan.jpeg',
    },
    {
      regional: 'Papua-Maluku',
      img: './Papuamaluku.jpeg',
    },
    {
      regional: 'Sulawesi',
      img: './Sulawesi.jpeg',
    },
    {
      regional: 'Sumatera',
      img: './Sumatera.jpeg',
    },

    {
      regional: 'Jawa',
      img: './Jawa.jpeg',
    },
  ],
  generatePulau(pulau) {
    return `
    <div class="pulau">
    <div class="result-item">
    <div class="result-item-header">
    </div>
      <img class="result-item-picture" src="${pulau.img}" alt="${
      pulau.regional
    }"/>
      
  <div class="result-content">
    <h2 class="name"><a href="${pulau.regional}">${pulau.regional}</a></h2>
    <button class="button"><a href="${`/#/detail-regions/${pulau.regional}`}">Lihat Masakan</a></button>
  </div>
  
  </div>
  </div>  
    `;
  },

  async render() {
    let island = '';
    this.regions.forEach((region) => {
      island += this.generatePulau(region);
    });

    return `
      <div class="contentDetail">
         <h2 class="title" >Aneka Resep Masakan</h2>
         <div id="regions" class="regions">
         <div class="islands">
         ${island}
       </div>
         </div>
        
      </div>
  
        `;
  },

  async afterRender() {
    const regionals = await TheRecipesSource.ListRegion();
    const recipesContainer = document.querySelector('#regions');
    regionals.forEach((result) => {
      recipesContainer.innerHTML += createRegionItemTemplate(result);
    });
  },
};

export default Recipes;
