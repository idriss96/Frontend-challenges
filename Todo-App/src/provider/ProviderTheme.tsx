'use client';

import { ThemeProvider } from 'next-themes';
import { useEffect, useState } from 'react';

export function ProviderTheme({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <>{children}</>;
  }
  return (
    <ThemeProvider defaultTheme="system" storageKey="theme">
      {children}
    </ThemeProvider>
  );
}
