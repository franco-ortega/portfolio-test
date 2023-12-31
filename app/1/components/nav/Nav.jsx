import Link from 'next/link';
import styles from './Nav.module.css';

export default function Nav() {
  return (
    <nav className={styles.Nav}>
      <ul>
        <li>
          <Link href={'/1'}>Home</Link>
        </li>
        <li>
          <Link href={'/1/profile'}>Profile</Link>
        </li>
        <li>
          <Link href={'/1/projects'}>Projects</Link>
        </li>
        <li>
          <Link href={'/'}>Return</Link>
        </li>
      </ul>
    </nav>
  );
}
