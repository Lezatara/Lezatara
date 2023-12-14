// Import API_ENDPOINT dan fungsi displaySearchResults
import API_ENDPOINT from '../globals/api-endpoint';
import { displaySearchResults } from './display-results'; // Ubah path sesuai struktur proyek Anda

const searchRecipes = async (searchTerm) => {
  try {
    const term = searchTerm.trim().toLowerCase();

    const response = await fetch(`${API_ENDPOINT.LIST}search?name=${term}`);
    const data = await response.json();

    const results = data.result || [];

    const formattedResults = results.map((result) => ({
      id: result.id,
      name: result.name,
      desc: result.desc,
      picture: result.picture, // Tambahkan properti gambar
      // Tambahkan properti lain yang diperlukan
    }));

    // Panggil fungsi displaySearchResults untuk menampilkan hasil pencarian di dalam elemen HTML
    displaySearchResults(formattedResults);

    return formattedResults;
  } catch (error) {
    console.error('Error fetching recipes:', error);
    return [];
  }
};

// Tambahkan event listener untuk menanggapi input di kotak pencarian
const searchBox = document.querySelector('.search-form input');
searchBox.addEventListener('input', (event) => {
  const searchTerm = event.target.value;
  searchRecipes(searchTerm);
});

export default searchRecipes;
