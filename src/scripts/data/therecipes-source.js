import API_ENDPOINT from "../globals/api-endpoint";

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

  static async GetReview(id) {
    try {
      const response = await fetch(API_ENDPOINT.GET_REVIEW(id));
      const responseJson = await response.json();
      return responseJson.result;
    } catch (error) {
      console.error("Error fetching reviews:", error);
      throw error; // Throw the error again to handle it in the calling code
    }
  }

  static async PostReview(id, data) {
    try {
      const response = await fetch(API_ENDPOINT.POST_REVIEW(id), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseJson = await response.json();
      return responseJson.result;
    } catch (error) {
      console.error("Error posting review:", error);
      throw new Error("Failed to post review");
    }
  }
}

export default TheRecipesSource;
