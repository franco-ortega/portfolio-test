import styles from './Nav.module.css';

export default function Nav() {
  return (
    <nav className={styles.Nav}>
      Nav Bar
      <ul>
        <li>Link 1</li>
        <li>Link 2</li>
        <li>Link 3</li>
        <li>Link 4</li>
        <li>Link 5</li>
      </ul>
    </nav>
  );
}
