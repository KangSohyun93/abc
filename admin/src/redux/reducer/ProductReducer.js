const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  loading: false,
  error: null,
  product: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    createProductStart: (state) => {
      state.loading = true;
    },
    createProductSuccess: (state, actions) => {
      state.loading = false;
      state.product = actions.payload;
    },
    createProductFail: (state, actions) => {
      state.loading = false;
      state.error = actions.payload;
    },
  },
});
