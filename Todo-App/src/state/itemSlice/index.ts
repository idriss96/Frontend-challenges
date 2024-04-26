// create todo app alice redux
import { createSlice } from '@reduxjs/toolkit';

interface item {
  id: number;
  name: string;
  completed: boolean;
}

interface ItemState {
  items: item[];
}

const initialState: ItemState = {
  items: [],
};

const itemSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    addItem(state, action) {
      const newItem = {
        id: state.items.length ? state.items[state.items.length - 1].id + 1 : 0,
        name: action.payload,
        completed: false,
      };
      state.items.push(newItem);
    },
    deleteItem(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    toggleItem(state, action) {
      const item = state.items.find(item => item.id === action.payload);
      if (item) {
        item.completed = !item.completed;
      }
    },
  },
});

export const { addItem, deleteItem, toggleItem } = itemSlice.actions;
export default itemSlice.reducer;
