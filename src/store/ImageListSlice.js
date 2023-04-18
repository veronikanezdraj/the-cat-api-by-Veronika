import { createSlice } from "@reduxjs/toolkit";
import { METHOD_TYPES, request } from "../api";

const imageListSlice = createSlice({
  name: "imgList",
  initialState: { img: [] },
  reducers: {
    showFav(state, action) {
      // console.log(state);
      // console.log(action);
      const rawBody = {
        image_id: action.payload.image_id,
      };
      request("/favourites", METHOD_TYPES.POST, rawBody);
      console.log(rawBody);
      state.fav.push({
        image_id: action.payload.image_id,
        url: action.payload.url,
      });
    },
    deleteFav(state, action) {
      state.fav = state.fav.filter((fav) => fav.id !== action.payload.id);
    },
  },
});

export const { addFav, deleteFav } = imageListSlice.actions;
export default imageListSlice.reducer;
