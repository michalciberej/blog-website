import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../scss/globals.scss';
import { Analytics } from '@vercel/analytics/react';
import styles from './layout.module.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Michal Ciberej's Blog",
  description: "Michal Ciberej's blog website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <Analytics />
      <body className={`${inter.className} ${styles.body}`}>{children}</body>
    </html>
  );
}
