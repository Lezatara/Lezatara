import API_ENDPOINT from '../globals/api-endpoint'; // Sesuaikan path sesuai struktur folder Anda
import CONFIG from '../globals/config';

const searchRecipes = async (searchTerm) => {
  try {
    // Konversi term ke huruf kecil untuk pencarian yang tidak case-sensitive
    const term = searchTerm.trim().toLowerCase();

    // Panggil API untuk mendapatkan hasil pencarian
    const response = await fetch(`${API_ENDPOINT.LIST}search?name=${term}`);
    const data = await response.json();

    // Ambil array result dari respons API
    const results = data.result || [];

    // Mengonversi hasil pencarian ke format yang sesuai dengan tampilan
    const formattedResults = results.map((result) => ({
      id: result.id,
      name: result.name,
      desc: result.desc,
      ingredients: result.ingredients,
      receipt: result.receipt,
      // Tambahkan properti lain yang diperlukan
    }));

    // Panggil fungsi untuk menampilkan hasil pencarian di dalam elemen HTML
    displaySearchResults(formattedResults);

    return formattedResults;
  } catch (error) {
    console.error('Error fetching recipes:', error);
    return [];
  }
};

// Fungsi untuk menampilkan hasil pencarian di dalam elemen HTML
const displaySearchResults = (results) => {
  const mainContent = document.getElementById('mainContent');
  mainContent.innerHTML = ''; // Kosongkan konten utama sebelum menambahkan hasil pencarian

  // Loop melalui hasil pencarian dan tambahkan ke dalam elemen HTML
  results.forEach((result) => {
    const resultElement = document.createElement('div');
    resultElement.innerHTML = `
    <div class="result">
    <h2 class="result-name">${result.name}</h2>
    <img class="result-picture" src="${CONFIG.BASE_IMAGE_URL + result.id}" alt="${
      result.name
    }"/>
      <div class="result-description">
        <h3>Deskripsi</h3>
        <p>${result.desc}</p>
      </div>
      <div class="result-info">
        <h3>Bahan-bahan</h3>
        <ul class="ingredients-list">
          ${result.ingredients.map((ingredient) => `<li>${ingredient.bahan} - ${ingredient.jumlah}</li>`).join('')}
        </ul>
        <h3>Langkah-langkah</h3>
        <ol class="result-steps">
          ${result.receipt.map((step) => `<li>${step}</li>`).join('')}
        </ol>
      </div>
    </div>
    `;

    mainContent.appendChild(resultElement);
  });
};



// Tambahkan event listener untuk menanggapi input di kotak pencarian
const searchBox = document.querySelector('.search-form input');
searchBox.addEventListener('input', (event) => {
  // Panggil fungsi pencarian saat pengguna memasukkan input
  const searchTerm = event.target.value;
  searchRecipes(searchTerm);
});

export default searchRecipes;
