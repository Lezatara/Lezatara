import UrlParser from "../../routes/url-parser";
import { createReviewViewTemplate } from "../templates/template-creator";
import TheRecipesSource from "../../data/therecipes-source";

const Review = {
  async render() {
    return `
    <div class="detail-review">
       <h2 class="title">Review Masakan</h2>
       <div id="review" class="review">
    </div>
    <div class="form-review">
    <form autocomplete="on" id="review-form">
      <div class="mb-3">
        <label for="name-input" class="form-label">Name</label>
        <input type="text" class="form-control" id="name-input" minlength="3" placeholder="Your name..." required>
      </div>

      <div class="mb-3">
        <label for="review-input" class="form-label">Review</label>
        <input type="text" class="form-control" id="review-input" minlength="3" placeholder="Your review..." required>
      </div>

      <button id="submit-review" type="submit" class="submit-btn">Submit Review</button>
    </form>
  </div>
</div>
</div>
      `;
  },

  async afterRender() {
    await this.showReviews();
    const submitButton = document.getElementById("submit-review");
    submitButton.addEventListener("click", this.submitReview.bind(this));
    this.showSavedReviews();
  },

  async showReviews() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const getReview = await TheRecipesSource.GetReview(url.name);

    const reviewContainer = document.querySelector("#review");

    if (Array.isArray(getReview)) {
      getReview.forEach((result) => {
        reviewContainer.innerHTML += createReviewViewTemplate(result);
      });
    } else {
      console.error("Data reviews is not an array:", getReview);
    }
  },

  async submitReview(event) {
    event.preventDefault();

    const nameInput = document.getElementById("name-input").value;
    const reviewInput = document.getElementById("review-input").value;

    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const reviewId = url.name; // Ambil ID dari URL

    await TheRecipesSource.PostReview(reviewId, { name: nameInput, review: reviewInput });
    this.saveReview({ id: reviewId, nama: nameInput, isi_review: reviewInput });

    // Menampilkan ulasan di halaman tanpa harus me-reload halaman
    const reviewContainer = document.querySelector("#review");
    reviewContainer.innerHTML += createReviewViewTemplate({
      nama: nameInput,
      isi_review: reviewInput,
      tanggal: new Date().toLocaleDateString("en-US", { timeZone: "Asia/Singapore" }),
    });

    // Mengosongkan nilai input setelah submit
    document.getElementById("name-input").value = "";
    document.getElementById("review-input").value = "";
  },

  // Menyimpan review ke localStorage
  saveReview(review) {
    const savedReviews = JSON.parse(localStorage.getItem("savedReviews")) || [];
    savedReviews.push(review);
    localStorage.setItem("savedReviews", JSON.stringify(savedReviews));
  },

  // Menampilkan review yang disimpan di localStorage
  showSavedReviews() {
    const savedReviews = JSON.parse(localStorage.getItem("savedReviews")) || [];
    const reviewContainer = document.querySelector("#review");

    // Hanya tampilkan review yang sesuai dengan ID yang sedang aktif
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const activeId = url.name;

    savedReviews
      .filter((review) => review.id === activeId)
      .forEach((result) => {
        reviewContainer.innerHTML += createReviewViewTemplate(result);
      });
  },

  // Menampilkan review yang disimpan di localStorage
  showSavedReviews() {
    const savedReviews = JSON.parse(localStorage.getItem("savedReviews")) || [];
    const reviewContainer = document.querySelector("#review");

    savedReviews.forEach((result) => {
      reviewContainer.innerHTML += createReviewViewTemplate(result);
    });
  },
};

export default Review;
