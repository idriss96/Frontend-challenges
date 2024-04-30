'use client';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Image from 'next/image';

import { addItem } from '../../state/itemSlice';
import checkIcon from '../../../public/icon-check.svg';

const AddItem: React.FC = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const [checked, setChecked] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text) {
      dispatch(addItem({ name: text, completed: checked }));
      setText('');
      setChecked(false);
    }
  };

  return (
    <form className="add-item" onSubmit={handleSubmit}>
      <label className="custom-checkbox">
        <input
          type="checkbox"
          className="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
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
      <button type="submit">Add</button>
    </form>
  );
};

export default AddItem;
