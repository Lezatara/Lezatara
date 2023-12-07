import About from '../views/pages/about';
import DetailRecipes from '../views/pages/detail-recipes';
import DetailRegions from '../views/pages/detail-regions';
import Favorite from '../views/pages/favorite';
import Home from '../views/pages/home';
import Recipes from '../views/pages/recipes';

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/recipes': Recipes,
  '/favorite': Favorite,
  '/about': About,
  '/detail-recipes/:name': DetailRecipes,
  '/detail-regions/:id': DetailRegions,
};

export default routes;
