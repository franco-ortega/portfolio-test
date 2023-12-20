import Project from '../project/Project';

export default function ProjectsList({ listOfProjects }) {
  return (
    <ul>
      {listOfProjects.map(({ id, title, description }) => (
        <Project key={id} title={title} description={description} />
      ))}
    </ul>
  );
}
