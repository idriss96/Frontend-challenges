import type { Metadata } from 'next';
import { Josefin_Sans } from 'next/font/google';
import '../styles/index.scss';
import { ProviderTheme } from '../provider/ProviderTheme';

const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'Todo App',
  description: 'A simple todo app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ProviderTheme>
        <body className={josefinSans.className}>{children}</body>
      </ProviderTheme>
    </html>
  );
}
