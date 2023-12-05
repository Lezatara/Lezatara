import API_ENDPOINT from "../globals/api-endpoint";

class TheRecipesSource {
  static async ListRecipe() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    return responseJson.result;
  }

  static async DetailRecipe(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.result;
  }
}

export default TheRecipesSource;
