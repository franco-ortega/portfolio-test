import styles from './Project.module.css';

export default function Project({ title, description }) {
  return (
    <li className={styles.Project}>
      <h2>{title}</h2>
      <p>{description}</p>
    </li>
  );
}
