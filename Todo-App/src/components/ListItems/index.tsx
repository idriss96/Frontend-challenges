'use client';

import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Image from 'next/image';
import { Reorder } from 'framer-motion';

import type { RootState } from '../../state/store';
import { deleteItem, toggleItem, filterCompleted } from '../../state/itemSlice';
import checkIcon from '../../../public/icon-check.svg';
import crossIcon from '../../../public/icon-cross.svg';

interface ListItemsProps {
  id: number;
  name: string;
  completed: boolean;
}

const ListItems = () => {
  const items = useSelector((state: RootState) => state.items.items);
  const [filteredItems, setFilteredItems] = useState(items);
  const leftItems = items.filter(item => !item.completed).length;
  const [filter, setFilter] = useState('all');

  const dispatch = useDispatch();

  const handelToggleItem = (id: number) => {
    dispatch(toggleItem(id));
  };

  const handleDeleteItem = (id: number) => {
    dispatch(deleteItem(id));
  };

  const handleFilter = (active: string) => {
    if (active === 'all') {
      setFilteredItems(items);
      setFilter('all');
    } else if (active === 'active') {
      setFilteredItems(items.filter(item => !item.completed));
      setFilter('active');
    } else {
      setFilteredItems(items.filter(item => item.completed));
      setFilter('completed');
    }
  };

  const handleClearCompleted = () => {
    dispatch(filterCompleted());
    setFilter('all');
  };

  useEffect(() => {
    setFilteredItems(items);
  }, [items]);

  return (
    <div className="list-items">
      <ul className="list">
        <Reorder.Group values={filteredItems} onReorder={setFilteredItems}>
          {items && filteredItems
            ? filteredItems.map((item: ListItemsProps) => (
                <Reorder.Item className="item" key={item.id} value={item}>
                  <label className="custom-checkbox">
                    <input
                      type="checkbox"
                      className="checkbox"
                      checked={item.completed}
                      onChange={() => handelToggleItem(item.id)}
                    />
                    <span className="mark">
                      <Image
                        className="mark-icon"
                        src={checkIcon}
                        alt="Check icon"
                      />
                    </span>
                  </label>

                  <span className={item.completed ? 'completed' : ''}>
                    {item.name}
                  </span>
                  <button
                    className="cross-btn"
                    type="button"
                    onClick={() => handleDeleteItem(item.id)}
                  >
                    <Image
                      className="cross-icon"
                      src={crossIcon}
                      alt="Cross icon"
                      width={18}
                      height={18}
                    />
                  </button>
                </Reorder.Item>
              ))
            : null}
        </Reorder.Group>
        <li className="item last">
          <span className="item-length"> {leftItems} items left</span>
          <div className="filter">
            <button
              className={filter === 'all' ? 'active' : ''}
              type="button"
              onClick={() => handleFilter('all')}
            >
              All
            </button>
            <button
              className={filter === 'active' ? 'active' : ''}
              type="button"
              onClick={() => handleFilter('active')}
            >
              Active
            </button>
            <button
              className={filter === 'completed' ? 'active' : ''}
              type="button"
              onClick={() => handleFilter('completed')}
            >
              completed
            </button>
          </div>
          <button
            className="clear-btn"
            type="button"
            onClick={handleClearCompleted}
          >
            Clear Completed
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ListItems;
