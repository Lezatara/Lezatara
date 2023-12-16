import UrlParser from "../../routes/url-parser";
import { createReviewViewTemplate } from "../templates/template-creator";
import TheRecipesSource from "../../data/therecipes-source";

const Review = {
  async render() {
    return `
      <div class="detail-review">
        <h2 class="title">Review Masakan</h2>
        <div id="review" class="review"></div>
        <div class="form-review">
          <form autocomplete="on" id="review-form">
            <div class="mb-3">
              <label for="name-input" class="form-label">Nama</label>
              <input type="text" class="form-control" id="name-input" minlength="3" placeholder="Nama Anda..." required>
            </div>

            <div class="mb-3">
              <label for="review-input" class="form-label">Review</label>
              <input type="text" class="form-control" id="review-input" minlength="3" placeholder="Review Anda..." required>
            </div>

            <button id="submit-review" type="submit" class="submit-btn">Kirim Review</button>
          </form>
        </div>
      </div>
    `;
  },

  async afterRender() {
    await this.showReviews();
    const submitButton = document.getElementById("submit-review");
    submitButton.addEventListener("click", this.submitReview.bind(this));
  },

  async showReviews() {
    try {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const getReview = await TheRecipesSource.GetReview(url.name);

      const reviewContainer = document.querySelector("#review");

      if (Array.isArray(getReview)) {
        // Hapus review yang ada sebelum menampilkan yang baru
        reviewContainer.innerHTML = "";

        // Filter dan tampilkan review yang sesuai dengan nama resep aktif
        getReview
          .filter((review) => review.name === url.name)
          .forEach((result) => {
            reviewContainer.innerHTML += createReviewViewTemplate(result);
          });
      } else {
        console.error("Data review bukan array:", getReview);
      }
    } catch (error) {
      console.error("Error fetching reviews:", error);
      // Tangani kesalahan dengan anggun, misalnya, tampilkan pesan kepada pengguna
    }
  },

  async submitReview(event) {
    event.preventDefault();

    const nameInput = document.getElementById("name-input").value;
    const reviewInput = document.getElementById("review-input").value;

    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const reviewId = url.name;

    try {
      // Simpan review ke API
      await TheRecipesSource.PostReview(reviewId, { name: nameInput, review: reviewInput });

      // Tampilkan review yang telah dikirim tanpa mengambil seluruh daftar lagi
      const reviewContainer = document.querySelector("#review");
      reviewContainer.innerHTML += createReviewViewTemplate({
        name: nameInput,
        review: reviewInput,
        tanggal: new Date().toLocaleDateString("id-ID", { timeZone: "Asia/Jakarta" }),
      });

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

export default Review;
