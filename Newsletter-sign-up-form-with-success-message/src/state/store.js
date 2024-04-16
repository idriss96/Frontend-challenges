import { configureStore } from '@reduxjs/toolkit';
import emailReducer from './email/email';

export const store = configureStore({
  reducer: {
    email: emailReducer,
  },
});
 