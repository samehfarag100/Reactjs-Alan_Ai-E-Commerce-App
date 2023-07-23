import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  openCart: {
    hidden: true,
  },
  allProducts: [],
  oneProduct: [],
  allCategoryTitle: [],
  allCategoryDetails: [],
};
export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id);
      console.log(item);
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },
    getAllProduct: (state, action) => {
      state.allProducts.push(action.payload);
    },
    getDetailsForOneProduct: (state, action) => {
      state.oneProduct.push(action.payload);
    },
    removeItem: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id != action.payload
      );
    },
    resetCart: (state) => {
      state.products = [];
    },
    showCart: (state, action) => {
      state.openCart.hidden = !state.openCart.hidden;
    },
    hiddenCart: (state, action) => {
      state.openCart.hidden = true;
    },
    categoryItemTitle: (state, action) => {
      state.allCategoryTitle.push(action.payload);
    },
    getCategoryDetails: (state, action) => {
      state.allCategoryDetails.push(action.payload);
    },
  },
});

export const {
  addToCart,
  removeItem,
  resetCart,
  showCart,
  hiddenCart,
  getAllProduct,
  getDetailsForOneProduct,
  categoryItemTitle,
  getCategoryDetails,
} = cartSlice.actions;

export default cartSlice.reducer;
