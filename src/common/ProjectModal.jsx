import { useRef } from "react";
import styles from "./ProjectModal.module.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

function ProjectModal({ project, onClose }) {
  const modalRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        `.${styles.highlightItem}`,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          ease: "power2.out",
          duration: 0.6,
        }
      );
    },
    { scope: modalRef }
  );

  if (!project) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.modalBox}
        onClick={(e) => e.stopPropagation()}
        ref={modalRef}
      >
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <div className={styles.leftColumn}>
          <img src={project.modalImage} alt={project.title} />
        </div>
        <div className={styles.rightColumn}>
          <h2>{project.title}</h2>
          <ul>
            {project.highlights.map((highlight, index) => (
              <li key={index} className={styles.highlightItem}>
                {highlight}
              </li>
            ))}
          </ul>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.viewWebsite}
          >
            View Website
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
