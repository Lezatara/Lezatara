const DetailRegions = {
  async render() {
    return `
    <h2 class="title" >Detail Region Page</h2>
    <div class="slide-container swiper">
      <div class="slide-content">
      <div id="card-wrapper" class="card-wrapper swiper-wrapper">
      
      </div>
      <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
        </div>
        </div>
      `;
  },

  async afterRender() {
    const regionals = await TheRecipesSource.ListRegion();
    const recipesContainer = document.querySelector('#card-wrapper');
    regionals.forEach((result) => {
      recipesContainer.innerHTML += createRecipeItemTemplate(result);
    });
  },
};

export default DetailRegions;
