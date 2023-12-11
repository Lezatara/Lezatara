import API_ENDPOINT from '../globals/api-endpoint';

class TheRecipesSource {
  static async ListRecipe() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    return responseJson.result;
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
