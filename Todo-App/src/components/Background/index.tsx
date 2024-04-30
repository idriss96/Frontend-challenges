'use client';

import { useSelector } from 'react-redux';
import Image from 'next/image';

import { RootState } from '../../state/store';
import lightBg from '../../../public/bg-desktop-light.jpg';
import darkBg from '../../../public/bg-desktop-dark.jpg';

const Background = () => {
  const items = useSelector((state: RootState) => state.theme.theme);

  return (
    <Image
      className="background-image"
      src={items === 'light' ? lightBg : darkBg}
      alt="Background image"
    />
  );
};

export default Background;
