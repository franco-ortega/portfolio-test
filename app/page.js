import styles from './page.module.css';
import TestList from './src/components/testList/TestList';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Hello, Portfolio!</h1>
      <TestList />
    </main>
  );
}
