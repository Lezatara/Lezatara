import TheRecipesSource from "../../data/therecipes-source";
import { createRecipeItemTemplate } from "../templates/template-creator";

const Home = {
  async render() {
    return `
    
    <!-- Hero Container -->
    
    <div class="hero">
      <div class="teks-hero">
        <h1>Selamat Datang, Lezaters!</h1>
        <h2>Temukan resep masakan favorite anda disini!</h2>
      </div>
      <div class="image-hero">
        <img class="img-hero" src="./heroo.jpg" alt="hero image" />
      </div>
    </div>

    <!-- Blog -->
    <div class="blog">
      <img src="./logo.png" alt="" />
      <div>
        <p>
          Website ini menawarkan ragam resep mulai dari masakan sehari-hari
          hingga hidangan khas daerah, lengkap dengan petunjuk langkah demi
          langkah dan gambar illustratif untuk memudahkan pengguna dalam
          mempraktikkan setiap resep. Dengan fokus pada keberagaman kuliner
          Indonesia, Lezatara menjadi sumber terpercaya bagi pecinta masakan
          Nusantara yang ingin mengembangkan keterampilan memasak mereka dan
          mengeksplorasi kelezatan kuliner Indonesia.
        </p>
      </div>
    </div>

    <!-- Top Recipes -->
  <main id="mainContent">
      
      <recipe-list></recipe-list>
        <h2 class="title" tabindex="0">Top Recipes</h2>
      </section>
      <div class="slide-container swiper" id="slide-container">
      <div class="slide-content">
      <div id="card-wrapper" class="card-wrapper swiper-wrapper">
      
      </div>
      
        </div>
        </div>
        
      </main>
    
        `;
  },

  async afterRender() {
    const foods = await TheRecipesSource.ListRecipe();
    const recipesContainer = document.querySelector("#card-wrapper");
    foods.forEach((result) => {
      recipesContainer.innerHTML += createRecipeItemTemplate(result);
    });
  },
};

export default Home;
