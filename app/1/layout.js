import { Inter } from 'next/font/google';
import Nav from './components/nav/Nav';
import styles from './layout.module.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Portfolio Test 1',
  description: 'Sample portfolio test 1',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className={styles.layout}>
          <Nav />
          {children}
        </div>
      </body>
    </html>
  );
}
