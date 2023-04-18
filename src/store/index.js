import { configureStore } from "@reduxjs/toolkit";

import favReducer from "./FavSlice";

export default configureStore({
  reducer: {
    fav: favReducer,
  },
});
