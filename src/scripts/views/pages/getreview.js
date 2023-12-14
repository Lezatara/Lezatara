import UrlParser from '../../routes/url-parser';
import { createReviewViewTemplate } from '../templates/template-creator';
import TheRecipesSource from '../../data/therecipes-source';

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
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const getReview = await TheRecipesSource.GetReview(url.name);

    const reviewContainer = document.querySelector('#review');
    getReview.forEach((result) => {
      reviewContainer.innerHTML += createReviewViewTemplate(result);
    });

    const submitButton = document.getElementById('submit-review');
    submitButton.addEventListener('click', this.submitReview.bind(this));
  },

  submitReview() {
    const nameInput = document.getElementById('name-input').value;
    const reviewInput = document.getElementById('review-input').value;

    console.log('Name:', nameInput);
    console.log('Review:', reviewInput);

    const reviewContainer = document.querySelector('#review');

    reviewContainer.innerHTML += createReviewViewTemplate({
      Name: nameInput,
      Review: reviewInput,
    });

    document.getElementById('name-input').value = '';
    document.getElementById('review-input').value = '';

    // Logika pengiriman ulasan ke server atau yang sesuai dengan kebutuhan aplikasi Anda
  },
};
export default Review;
