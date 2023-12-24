import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export type CartItem = {
  id: string;
  title: string;
  price: number;
  quantity: number;
};

type CartState = {
  items: CartItem[];
};

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addToCart(
      state,
      action: PayloadAction<{ id: string; title: string; price: number }> //this will be payload property
    ) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.items[itemIndex].quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart(state, action: PayloadAction<string>) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      ); //it is not action.payload.id anymore because we no longer check the object but id.

      if (state.items[itemIndex].quantity === 1) {
        state.items.splice(itemIndex, 1);
      } else {
        state.items[itemIndex].quantity--;
      }
    },
  },
});

//PayloadAction<string> this will be string because we need id to remove an item from the cart. And id type is string in this project.

//we don't have to create custom action types. Instead, Redux toolkit creates those actions and action objects for us.
//To access them:

export const { addToCart, removeFromCart } = cartSlice.actions; // It has the same name as our reducer methods.But  addToCart, removeFromCart functions will not directly invoke the functions above. Instead they will create action objects which can be sent to Redux. So Redux then will invoke those reducers( addToCart, removeFromCart ) for us.
