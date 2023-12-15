import CONFIG from "./config";

const API_ENDPOINT = {
  LIST: `${CONFIG.BASE_URL}foods/`,
  LIST_REGION: `${CONFIG.BASE_URL}regionals/`,
  DETAIL: (name) => `${CONFIG.BASE_URL}detail-recipes/${name}`,
  DETAIL_REGION: (regional) => `${CONFIG.BASE_URL}detail-regions/${regional}`,
  GET_REVIEW: (id) => `${CONFIG.BASE_URL}getreview/${id}`,
  POST_REVIEW: (id) => `${CONFIG.BASE_URL}foods/${id}/review`,
  SEARCH: (searchTerm) => `${CONFIG.BASE_URL}foods/search?name=${searchTerm}`,
};

export default API_ENDPOINT;
