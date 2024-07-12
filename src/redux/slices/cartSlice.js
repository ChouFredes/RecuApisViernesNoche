import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalQuantity: 0,
  status: 'idle',
  error: null,
};

export const fetchCart = createAsyncThunk('cart/fetchCart', async () => {
  const token = localStorage.getItem('token');
  const response = await fetch('http://localhost:8080/api/shoppingCart', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
  });
  const data = await response.json();
  return data;
});

export const addItemToCart = createAsyncThunk('cart/addItemToCart', async ({ productId, amount }) => {
  const token = localStorage.getItem('token');
  const response = await fetch('http://localhost:8080/api/shoppingCart/addProduct', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({ productId, amount }),
  });
  const data = await response.json();
  return data;
});

export const removeItemFromCart = createAsyncThunk('cart/removeItemFromCart', async ({ cartProductId }) => {
  const token = localStorage.getItem('token');
  await fetch('http://localhost:8080/api/shoppingCart/removeProduct', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({ cartProductId }),
  });
  return cartProductId;
});

export const emptyCart = createAsyncThunk('cart/emptyCart', async () => {
  const token = localStorage.getItem('token');
  await fetch('http://localhost:8080/api/shoppingCart/emptyCart', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
  });
});

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.items = action.payload.items;
        state.totalQuantity = action.payload.totalQuantity;
        state.status = 'succeeded';
      })
      .addCase(addItemToCart.fulfilled, (state, action) => {
        const newItem = action.payload;
        const existingItem = state.items.find(item => item.id === newItem.id);
        state.totalQuantity++;
        if (!existingItem) {
          state.items.push({
            id: newItem.id,
            price: newItem.price,
            quantity: 1,
            totalPrice: newItem.price,
            name: newItem.name,
          });
        } else {
          existingItem.quantity++;
          existingItem.totalPrice += newItem.price;
        }
      })
      .addCase(removeItemFromCart.fulfilled, (state, action) => {
        const id = action.payload;
        const existingItem = state.items.find(item => item.id === id);
        state.totalQuantity--;
        if (existingItem.quantity === 1) {
          state.items = state.items.filter(item => item.id !== id);
        } else {
          existingItem.quantity--;
          existingItem.totalPrice -= existingItem.price;
        }
      })
      .addCase(emptyCart.fulfilled, (state) => {
        state.items = [];
        state.totalQuantity = 0;
      });
  },
});

export default cartSlice.reducer;
