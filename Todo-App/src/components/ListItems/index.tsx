'use client';

import { useSelector, useDispatch } from 'react-redux';

import type { RootState } from '../../state/store';
import { deleteItem, toggleItem } from '../../state/itemSlice';

interface ListItemsProps {
  id: number;
  name: string;
  completed: boolean;
}

const ListItems = () => {
  const items = useSelector((state: RootState) => state.items.items);

  const dispatch = useDispatch();

  const handelToggleItem = (id: number) => {
    dispatch(toggleItem(id));
  };

  const handleDeleteItem = (id: number) => {
    dispatch(deleteItem(id));
  };

  return (
    <div className="list-items">
      <ul>
        {items &&
          items.map((item: ListItemsProps) => (
            <li key={item.id}>
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => handelToggleItem(item.id)}
              />
              <span className={item.completed ? 'completed' : ''}>
                {item.name}
              </span>
              <button type="button" onClick={() => handleDeleteItem(item.id)}>
                Delete
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ListItems;
