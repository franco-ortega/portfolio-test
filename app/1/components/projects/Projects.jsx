import Project from '../project/Project';
import styles from './Projects.module.css';

export default function Projects() {
  return (
    <main className={styles.Projects}>
      <h1>Projects</h1>
      <ul>
        <Project
          title={'Project 1'}
          description={'This project is awesome and does really good stuff.'}
        />
        <li>
          <div>PROJECT 2</div>
        </li>
        <li>
          <div>PROJECT 3</div>
        </li>
        <li>
          <div>PROJECT 4</div>
        </li>
        <li>
          <div>PROJECT 5</div>
        </li>
      </ul>
    </main>
  );
}
