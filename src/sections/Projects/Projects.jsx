import { useRef, useState } from "react";
import { createPortal } from "react-dom";
import styles from "./ProjectsStyles.module.css";
import ProjectCard from "../../common/ProjectCard";
import ProjectModal from "../../common/ProjectModal";
import goodrep from "../../assets/goodrep-media-site-sample.webp";
import abodeHome from "../../assets/abode-home-services-sample.webp";
import vibe from "../../assets/vibe-website-sample.jpg";
import jag from "../../assets/jagclamp-website-sample.jpg";
import bebalanced from "../../assets/be-balanced-bodyworks-portfolio.jpg";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const projectData = [
  {
    id: 1,
    title: "Be Balanced Bodyworks",
    thumbnail: bebalanced,
    modalImage: bebalanced,
    highlights: [
      "Architected Custom CMS Landing Pages",
      "Led a Mobile-First HTML/CSS Transformation",
      "Implemented Technical SEO & Tag Management",
      "Optimized UX Funnels for Booking Conversions",
      "Drove a 345% Increase in Organic Traffic",
    ],
    link: "https://www.bebalancedgr.com/",
  },
  {
    id: 2,
    title: "Goodrep Media Website Redesign",
    thumbnail: goodrep,
    modalImage: goodrep,
    highlights: [
      "Translated Figma Designs to CMS Templates",
      "Engineered Custom HTML5 & Scalable CSS",
      "Ensured Strict WCAG Accessibility Compliance",
    ],
    link: "https://goodrep.media/",
  },
  {
    id: 3,
    title: "Vibe by California",
    thumbnail: vibe,
    modalImage: vibe,
    highlights: ["High-Volume CMS Ecommerce Management"],
    link: "https://www.vibebycalifornia.com/",
  },
  {
    id: 4,
    title: "JagClamp",
    thumbnail: jag,
    modalImage: jag,
    highlights: ["New Invention Masonry Tool Promotion"],
    link: "https://jagclamp.com/",
  },
  {
    id: 5,
    title: "Abode Services",
    thumbnail: abodeHome,
    modalImage: abodeHome,
    highlights: ["Home Help Solutions"],
    link: "https://abode-services.com/",
  },
];

function Projects() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);

  useGSAP(
    () => {
      const track = trackRef.current;
      const section = sectionRef.current;

      gsap.to(track, {
        x: () => -(track.scrollWidth - track.parentElement.offsetWidth),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 1,
          start: "top 50px",
          end: () => `+=${track.scrollWidth}`,
          invalidateOnRefresh: true,
          pinSpacing: true,
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <div className="projects-wrapper" style={{ width: "100%", minWidth: 0 }}>
      <section id="projects" className={styles.container} ref={sectionRef}>
        <h1 className="sectionTitle">Projects</h1>
        <div className={styles.galleryContainer}>
          <div className={styles.galleryTrack} ref={trackRef}>
            {projectData.map((project) => (
              <ProjectCard
                key={project.id}
                src={project.thumbnail}
                h3={project.title}
                p={project.highlights[0]}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
        {selectedProject &&
          createPortal(
            <ProjectModal
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />,
            document.body,
          )}
      </section>
    </div>
  );
}

export default Projects;
