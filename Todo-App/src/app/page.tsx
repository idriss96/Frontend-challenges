'use client';

import ThemeSwitcher from '../components/ThemeSwitcher';
import ListItems from '../components/ListItems';
import Header from '../components/Header';
import AddItem from '../components/AddItem';
import { ProviderTheme } from '../provider/ProviderTheme';

import ReduxProvider from './storeProvider';
import Background from '../components/Background';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <ReduxProvider>
      <ProviderTheme>
        <Background />
        <main>
          <Header title="Todo" theme={<ThemeSwitcher />} />
          <AddItem />
          <ListItems />
          <Footer />
        </main>

      </ProviderTheme>
    </ReduxProvider>
  );
}
