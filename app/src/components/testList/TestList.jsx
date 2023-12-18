import Link from 'next/link';
import styles from './TestList.module.css';

export default function TestList() {
  return (
    <div className={styles.TestList}>
      <h2>Test List</h2>
      <ul>
        <li>
          <Link href={'/1'}>Portfolio Test 1</Link>
        </li>
      </ul>
    </div>
  );
}
