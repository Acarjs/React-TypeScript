import { configureStore } from '@reduxjs/toolkit';

import { cartSlice } from './cart-slice.ts';

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// with Redux, you don't create that store by telling it what its initial state should be, instead you tell it what its reducer is, and Redux will then infer the type of data that it will manage from that reducer. So from the data that's returned by that reducer

//when you work with redux you work with slices. Your overall store as the combination of multiple state slices that are grouped together.
