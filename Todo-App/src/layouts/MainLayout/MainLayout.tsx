import type { ChildrenProps } from '@/types';

export default function MainLayout({ children }: ChildrenProps) {
  return <div className="h-full flex flex-col items-center">{children}</div>;
}
