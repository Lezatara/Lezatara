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
    if (!result.hasOwnProperty('name')) {
      return;
    }
    return (await dbPromise).put(OBJECT_STORE_NAME, result);
  },
  async deleteRecipe(name) {
    return (await dbPromise).delete(OBJECT_STORE_NAME, name);
  },

  async searchRecipe(query) {
    return (await this.getAllRecipe()).filter((result) => {
      const loweredCaseRecipeName = (result.name || '-').toLowerCase();
      const jammedRecipeName = loweredCaseRecipeName.replace(/\s/g, '');

      const loweredCaseQuery = query.toLowerCase();
      const jammedQuery = loweredCaseQuery.replace(/\s/g, '');

      return jammedRecipeName.indexOf(jammedQuery) !== -1;
    });
  },
};

export default FavoriteRecipeIdb;
