import { Inter } from 'next/font/google';
// import Nav from './components/nav/Nav';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Portfolio Test 1',
  description: 'Sample portfolio test 1',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
