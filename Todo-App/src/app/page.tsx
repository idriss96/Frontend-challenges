'use client';

import ThemeSwitcher from '../components/ThemeSwitcher';
import ListItems from '../components/ListItems';
import Header from '../components/Header';
import AddItem from '../components/AddItem';
import { ProviderTheme } from '../provider/ProviderTheme';

import ReduxProvider from './storeProvider';

export default function Home() {
  return (
    <ReduxProvider>
      <ProviderTheme>
        <main>
          <Header title="Todo" theme={<ThemeSwitcher />} />
          <AddItem />
          <ListItems />
        </main>
      </ProviderTheme>
    </ReduxProvider>
  );
}
