import { configureStore } from '@reduxjs/toolkit';

const voteReducer = (state = {}, action) => {
  if (action.type === 'like') {
    return {};
  }
  if (action.type === 'Dislike') {
    return {};
  }
};

const store = configureStore({
  reducer: voteReducer,
});

export default store;
