import Project from '../project/Project';
import styles from './ProjectsList.module.css';

export default function ProjectsList({ listOfProjects }) {
  return (
    <ul className={styles.ProjectsList}>
      {listOfProjects.map(({ id, title, description }) => (
        <Project key={id} title={title} description={description} />
      ))}
    </ul>
  );
}
