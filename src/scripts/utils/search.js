export function initializeSearch() {
  const searchBox = document.querySelector('.search-form input');
  const cards = document.querySelectorAll('.card');
  const topRecipesSection = document.querySelector('#mainContent');

  // Function to handle search
  const handleSearch = function () {
    const searchTerm = searchBox.value.trim().toLowerCase();

    cards.forEach(function (card) {
      const cardName = card
        .querySelector('.name')
        .textContent.trim()
        .toLowerCase();
      const cardDescription =
        card -
        wrapper.querySelector('.description').textContent.trim().toLowerCase();

      if (
        cardName.includes(searchTerm) ||
        cardDescription.includes(searchTerm)
      ) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });

    // Scroll to the "Top Recipes" section
    topRecipesSection.scrollIntoView({ behavior: 'smooth' });
  };

  // Event listener for input changes
  searchBox.addEventListener('input', handleSearch);

  // Event listener for Enter key press
  searchBox.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      handleSearch();
    }
  });
}
