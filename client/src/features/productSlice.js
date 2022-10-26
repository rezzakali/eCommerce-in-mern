import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    cart: [],
  },
  reducers: {
    add(state, action) {
      state.cart.push(action.payload);
    },
    remove(state, action) {
      return state.cart.filter((item) => item.id !== action.payload);
    },
  },
});
export const { add, remove } = productSlice.actions;
export default productSlice.reducer;
