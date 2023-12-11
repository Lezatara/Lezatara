import API_ENDPOINT from '../globals/api-endpoint'; // Sesuaikan path sesuai struktur folder Anda

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
      <h2>${result.name}</h2>
      <img src="${API_ENDPOINT.BASE_IMAGE_URL}${result.idPicture}" alt="${result.name}" />
      <p>${result.desc}</p>
      <h3>Ingredients:</h3>
      <ul>
        ${result.ingredients.map((ingredient) => `<li>${ingredient.bahan} - ${ingredient.jumlah}</li>`).join('')}
      </ul>
      <h3>Recipe:</h3>
      <ol>
        ${result.receipt.map((step) => `<li>${step}</li>`).join('')}
      </ol>
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
