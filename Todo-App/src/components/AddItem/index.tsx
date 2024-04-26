'use client';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Image from 'next/image';

import { addItem } from '../../state/itemSlice';
import checkIcon from '../../../public/icon-check.svg';

const AddItem: React.FC<AddItemProps> = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const handleAddItem = () => {
    if (text) {
      dispatch(addItem(text));
      setText('');
    }
  };

  return (
    <form className="add-item" onSubmit={e => e.preventDefault()}>
      <label className="custom-checkbox">
        <input type="checkbox" className="checkbox" />
        <span className="mark">
          <Image className="mark-icon" src={checkIcon} alt="Check icon" />
        </span>
      </label>
      <input
        className="text-input"
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Create a new todo..."
      />
      <button type="submit" onClick={handleAddItem}>
        Add
      </button>
    </form>
  );
};

export default AddItem;
