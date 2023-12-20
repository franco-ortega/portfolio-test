import ProjectsList from '../projectsList/ProjectsList';
import projectsData from '../../data/projectsData';
import styles from './Projects.module.css';

export default function Projects() {
  return (
    <main className={styles.Projects}>
      <h1>Projects</h1>
      <ProjectsList listOfProjects={projectsData} />
    </main>
  );
}
