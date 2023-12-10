import { openDB } from 'idb';
import CONFIG from '../globals/config';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'name' });
  },
});

const FavoriteRecipeIdb = {
  async getRecipe(name) {
    return (await dbPromise).get(OBJECT_STORE_NAME, name);
  },
  async getAllRecipe() {
    return (await dbPromise).getAll(OBJECT_STORE_NAME);
  },
  async putRecipe(result) {
    return (await dbPromise).put(OBJECT_STORE_NAME, result);
  },
  async deleteRecipe(name) {
    return (await dbPromise).delete(OBJECT_STORE_NAME, name);
  },
};

export default FavoriteRecipeIdb;
