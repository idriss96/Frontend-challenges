import '@/styles/globals.css';

import { Inter } from 'next/font/google';

import MainFooter from '@/components/Footer';
import type { ChildrenProps } from '@/types';

export const metadata = {
  description:
    'A simple todo app built with Next.js, TypeScript, Tailwind CSS, ESLint, Prettier, and Husky.',
  keywords:
    'next, starter, typescript, tailwind css, prettier, eslint, husky, seo',
  title: 'Todo App ',
};

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  adjustFontFallback: false,
});

export default async function RootLayout({ children }: ChildrenProps) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} h-full flex flex-col justify-between`}
      >
        <section className="flex-1">{children}</section>
        <MainFooter />
      </body>
    </html>
  );
}
