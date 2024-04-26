'use client';

import ThemeSwitcher from '../components/ThemeSwitcher';
import ReduxProvider from './storeProvider';
import Header from '../components/Header';

export default function Home() {
  return (
    <ReduxProvider>
      <Header title="Todo" theme={<ThemeSwitcher />} />
    </ReduxProvider>
  );
}
