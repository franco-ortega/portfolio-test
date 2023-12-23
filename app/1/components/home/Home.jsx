import Nav from '../nav/Nav';
import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.Home}>
      <Nav />
      <main>
        This will be the first Portfolio test site. It is located in directory
        1.
      </main>
    </div>
  );
}
