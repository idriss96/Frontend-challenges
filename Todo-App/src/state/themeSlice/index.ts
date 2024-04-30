import { createSlice } from '@reduxjs/toolkit';

interface ThemeState {
  theme: string | undefined;
}

const initialState: ThemeState = {
  // take the vale from the local storage
  theme: localStorage.getItem('theme') || 'light',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme(state) {
      // Toggle the theme between light and dark
      state.theme = localStorage.getItem('theme');
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
