'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useDispatch } from 'react-redux';

import { toggleTheme } from '../../state/themeSlice';
import MoonIcon from '../../../public/icon-moon.svg';
import SunIcon from '../../../public/icon-sun.svg';

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const dispatch = useDispatch();

  const handelToggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
    dispatch(toggleTheme());
  };

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="theme-btn"
      onClick={handelToggleTheme}
    >
      <Image
        src={theme === 'dark' ? MoonIcon : SunIcon}
        alt={theme === 'dark' ? 'Moon Icon' : 'Sun Icon'}
        width={24}
        height={24}
      />
    </button>
  );
};

export default ThemeSwitcher;
