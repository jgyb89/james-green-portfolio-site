import styles from "./ProjectCard.module.css";

function ProjectCard({ src, h3, p, onClick }) {
  return (
    <div className={styles.card} onClick={onClick}>
      <div className={styles.imageWrapper}>
        <img src={src} alt={`${h3} logo`} />
        <button className={styles.viewButton}>View Project</button>
      </div>
      <h3>{h3}</h3>
      <p>{p}</p>
    </div>
  );
}

export default ProjectCard;
