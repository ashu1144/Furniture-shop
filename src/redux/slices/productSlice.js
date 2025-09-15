import { createSlice } from '@reduxjs/toolkit';

// Sample product data - in a real app, this would come from an API
const initialState = {
  products: [
    {
      id: 1,
      name: 'Modern Sofa',
      price: 599.99,
      image: 'https://i.imgur.com/qNODIng.png',
      category: 'sofa',
      description: 'Comfortable modern sofa with premium fabric',
    },
    {
      id: 2,
      name: 'Wooden Chair',
      price: 199.99,
      image: 'https://i.imgur.com/8YQP3NI.png',
      category: 'chair',
      description: 'Elegant wooden chair with ergonomic design',
    },
    {
      id: 3,
      name: 'Coffee Table',
      price: 299.99,
      image: 'https://i.imgur.com/O1LUkwy.png',
      category: 'table',
      description: 'Stylish coffee table for your living room',
    },
    {
      id: 4,
      name: 'Dining Set',
      price: 899.99,
      image: 'https://i.imgur.com/76HAxcA.png',
      category: 'dining',
      description: 'Complete dining set for family gatherings',
    },
  ],
  status: 'idle',
  error: null,
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // In a real app, you would have actions to fetch products from an API
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
  },
});

export const { setProducts, addProduct } = productSlice.actions;

export const selectAllProducts = (state) => state.products.products;
export const selectProductById = (state, productId) => 
  state.products.products.find(product => product.id === productId);

export default productSlice.reducer;