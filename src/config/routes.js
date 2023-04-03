import Vote from '../pages/vote/vote';
import Breeds from '../pages/breeds/breeds';
import Favorites from '../pages/favorites/favorites';
import ImageSearch from '../pages/imageList/imageList';
import Upload from '../pages/upload/upload';

const pathObject = {
  votes: 'votes',
  upload: 'upload',
  favorite: 'favorite',
  images: 'images',
  breeds: 'breeds',
};

export const routes = [
  {
    path: `/${pathObject.breeds}`,
    component: Breeds,
    name: pathObject.breeds,
  },
  {
    path: `/${pathObject.favorite}`,
    component: Favorites,
    name: pathObject.favorite,
  },
  {
    path: `/${pathObject.images}`,
    component: ImageSearch,
    name: pathObject.images,
  },
  {
    path: `/${pathObject.upload}`,
    component: Upload,
    name: pathObject.upload,
  },
  {
    path: `/${pathObject.votes}`,
    component: Vote,
    name: pathObject.votes,
  },
];
