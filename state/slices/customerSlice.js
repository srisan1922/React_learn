import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    addCustomer(state, action) {
      state.push(action.payload);
    },
    deleteCustomer(state, action) {
      const deleteIndex = action.payload;
      return state.filter((stat, index) => index !== deleteIndex);
    },
  },
});

export const { addCustomer, deleteCustomer } = customerSlice.actions;
export default customerSlice.reducer;
