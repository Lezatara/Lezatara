import API_ENDPOINT from '../globals/api-endpoint';

// const regionData = [
//   { name: "Sumatera", desc: "Deskripsi Sumatera yang ditambahkan secara manual." },
//   { name: "Jawa", desc: "Deskripsi Jawa yang ditambahkan secara manual." },
//   // Tambahkan data untuk region lainnya dengan deskripsi manual
// ];

class TheRecipesSource {
  static async ListRecipe() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    return responseJson.result;

    // // Gabungkan data regional dengan deskripsi manual
    // const regionsWithManualDesc = regionData.map((region) => ({
    //   ...region,
    //   manualDesc: region.desc, // Sesuaikan dengan nama properti deskripsi di data regional
    // }));

    // return Promise.resolve(regionsWithManualDesc);
  }
  static async ListRegion() {
    const response = await fetch(API_ENDPOINT.LIST_REGION);
    const responseJson = await response.json();
    return responseJson.result;
  }

  static async DetailRecipe(name) {
    const response = await fetch(API_ENDPOINT.DETAIL(name));
    const responseJson = await response.json();
    return responseJson.result;
  }

  static async DetailRegion(regional) {
    const response = await fetch(API_ENDPOINT.DETAIL_REGION(regional));
    const responseJson = await response.json();
    return responseJson.result;
  }
}

export default TheRecipesSource;
