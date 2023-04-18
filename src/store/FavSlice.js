import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { METHOD_TYPES, request } from "../api";

export const fetchFavorites = createAsyncThunk(
  "fav/fetchFavorites",
  async function () {
    const response = await request("/favourites", METHOD_TYPES.GET);
    return response;
  }
);
const fanSlice = createSlice({
  name: "fav",
  initialState: { fav: [], status: null, error: null },
  reducers: {
    addFav(state, action) {
      const rawBody = {
        image_id: action.payload.image_id,
      };
      request("/favourites", METHOD_TYPES.POST, rawBody);
      console.log(rawBody);
      // state.fav.push({
      //   image_id: action.payload.image_id,
      //   url: action.payload.url,
      // });
    },
    // const [selectedOrder, setSelectedOrder] = useState();
    // const orderHandler = (event) => {
    //   setSelectedOrder(event.target.value);
    // };
    // const [selectedLimit, setSelectedLimit] = useState(limitArr[0]);
    // const limitImgHandler = (event) => {
    //   setSelectedLimit(event.target.value);
    // };
    // async getFavourites(state, action) {
    //   const data = await request("/favourites", METHOD_TYPES.GET);
    //   state.fav = data;
    //   console.log(data);
    // },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFavorites.pending, (state) => {
        state.status = "pending";
        state.error = null;
      })
      .addCase(fetchFavorites.fulfilled, (state, action) => {
        state.status = "resolved";
        state.fav = action.payload;
        console.log(action.payload);
      })
      .addCase(fetchFavorites.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      });
  },
});

export const { addFav } = fanSlice.actions;
export default fanSlice.reducer;
