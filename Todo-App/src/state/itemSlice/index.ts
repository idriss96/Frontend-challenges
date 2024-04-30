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
  items: [
    { id: 0, name: 'Learn React', completed: true },
    { id: 1, name: 'Learn Redux', completed: false },
    { id: 2, name: 'Build a React App', completed: false },
  ],
};

const itemSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    addItem(state, action) {
      state.items.push({
        id: state.items.length,
        name: action.payload.name,
        completed: action.payload.completed,
      });
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
    filterCompleted(state) {
      state.items = state.items.filter(item => !item.completed);
    },
  },
});

export const { addItem, deleteItem, toggleItem, filterCompleted } =
  itemSlice.actions;
export default itemSlice.reducer;
