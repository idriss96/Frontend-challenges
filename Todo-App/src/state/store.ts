import { configureStore } from '@reduxjs/toolkit';

import themeReducer from './themeSlice';
import itemReducer from './itemSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    items: itemReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
