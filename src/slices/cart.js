import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  itemNumbers: 10,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, actions) => {
      state.itemNumbers += 1;
    },
    removeItem: (state, actions) => {
      state.itemNumbers -= 1;
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
const { reducer } = cartSlice;
export default reducer;
