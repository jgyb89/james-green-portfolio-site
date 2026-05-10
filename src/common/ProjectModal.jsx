import { useEffect, useRef } from "react";
import styles from "./ProjectModal.module.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

function ProjectModal({ project, onClose }) {
  const modalRef = useRef(null);
  const leftColumnRef = useRef(null);
  const scrollState = useRef({ isInteracting: false, resumeTimeout: null });

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
        },
      );
    },
    { scope: modalRef },
  );

  const scrollPos = useRef(0);

  useEffect(() => {
    const leftColumn = leftColumnRef.current;
    let animationFrameId;

    const scroll = () => {
      if (!scrollState.current.isInteracting && leftColumn) {
        // Use an accumulator to maintain sub-pixel precision
        scrollPos.current += 0.4;

        if (scrollPos.current >= leftColumn.scrollHeight / 2) {
          scrollPos.current = 0;
        }
        leftColumn.scrollTop = scrollPos.current;
      } else if (leftColumn) {
        // Sync our accumulator with the actual scroll position when the user is scrolling
        scrollPos.current = leftColumn.scrollTop;
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const handleUserInteraction = () => {
    scrollState.current.isInteracting = true;
    clearTimeout(scrollState.current.resumeTimeout);

    scrollState.current.resumeTimeout = setTimeout(() => {
      scrollState.current.isInteracting = false;
    }, 5000);
  };

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
        <div
          className={styles.leftColumn}
          ref={leftColumnRef}
          onWheel={handleUserInteraction}
          onTouchMove={handleUserInteraction}
          onMouseDown={handleUserInteraction}
        >
          {[...project.modalGallery, ...project.modalGallery].map(
            (image, index) => (
              <img
                key={index}
                src={image}
                alt={`${project.title} - ${index}`}
              />
            ),
          )}
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
