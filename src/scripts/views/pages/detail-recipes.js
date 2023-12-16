import UrlParser from "../../routes/url-parser";
import { createRecipesDetailTemplate, createReviewViewTemplate } from "../templates/template-creator";
import TheRecipesSource from "../../data/therecipes-source";
import LikeButtonPresenter from "../../utils/like-button-initiator";
import FavoriteRecipeIdb from "../../data/favorite-recipe-idb";

const DetailRecipes = {
  async render() {
    return `
    <div id="result" class="container my-4" style="max-width: 900px;"></div>
    <div id="likeButtonContainer"></div>
      `;
  },

  async afterRender() {
    let t = this;
    // Fungsi ini akan dipanggil setelah render()
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detail = await TheRecipesSource.DetailRecipe(url.name);
    const recipesContainer = document.querySelector("#result");
    detail.forEach((result) => {
      recipesContainer.innerHTML = createRecipesDetailTemplate(result);
      this.getReview(result.id);

      const submitButton = document.getElementById("submit-review");
      submitButton.addEventListener("click", function (e) {
        e.preventDefault();
        t.submitReview(result.id);
      });

      LikeButtonPresenter.init({
        likeButtonContainer: document.querySelector("#likeButtonContainer"),
        favoriteRecipe: FavoriteRecipeIdb,
        result: {
          name: url.name,
          title: result.name,
          desc: result.desc,
          picture: result.idPicture,
        },
      });
    });
  },

  async getReview(id) {
    const review = await TheRecipesSource.GetReview(id);
    if (review) {
      console.log(review);
      review.forEach((r) => {
        document.getElementById("review-container").innerHTML += createReviewViewTemplate(r);
      });
    }
  },

  async submitReview(resepId) {
    console.log(resepId);
    const nameInput = document.getElementById("name-input").value;
    const reviewInput = document.getElementById("review-input").value;

    try {
      // Simpan review ke API
      const sendReview = await TheRecipesSource.PostReview(resepId, { name: nameInput, review: reviewInput });

      // Tampilkan review yang telah dikirim tanpa mengambil seluruh daftar lagi
      const reviewContainer = document.querySelector("#review-container");
      if (sendReview) {
        sendReview.forEach((res) => {
          reviewContainer.innerHTML += createReviewViewTemplate(res);
        });
      }

      // Bersihkan input setelah pengiriman
      document.getElementById("name-input").value = "";
      document.getElementById("review-input").value = "";
    } catch (error) {
      // Tangani kesalahan, misalnya, tampilkan pesan kesalahan kepada pengguna.
      console.error("Gagal mengirim review:", error);
      // Tangani kesalahan dengan anggun, misalnya, tampilkan pesan kepada pengguna
    }
  },
};

export default DetailRecipes;
