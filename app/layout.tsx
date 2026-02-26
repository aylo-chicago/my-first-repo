import './globals.css';
import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { TopNav } from '@/components/layout/TopNav';

export const metadata: Metadata = {
  title: 'Transcend Blueprint Builder',
  description: 'AI-assisted whole-school blueprint design workflow'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <TopNav />
        <main>{children}</main>
      </body>
    </html>
  );
}
