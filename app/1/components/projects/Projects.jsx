import Project from '../project/Project';
import ProjectsList from '../projectsList/ProjectsList';
import styles from './Projects.module.css';

const projectsData = [
  {
    id: '1',
    title: 'Project 1',
    description: 'This project is awesome and does really good stuff.',
  },
  {
    id: '2',
    title: 'Project 2',
    description: 'This project is more awesome and does even better stuff.',
  },
  {
    id: '3',
    title: 'Project 3',
    description: 'This project is the most awesome and does the best stuff.',
  },
];

export default function Projects() {
  return (
    <main className={styles.Projects}>
      <h1>Projects</h1>
      <ProjectsList listOfProjects={projectsData} />
    </main>
  );
}
