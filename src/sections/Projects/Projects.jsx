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
      "Spearheaded a mobile-first UX redesign that drove a 345% increase in organic active users",
      "Architected custom landing pages using semantic HTML5 and CSS to optimize conversion funnels",
      "Boosted Google Lighthouse scores from below 60 to 90+ through technical SEO and performance tuning",
      "Engineered state-aware CTA interactions to reduce bounce rates and improve user retention",
    ],
    link: "https://www.bebalancedgr.com/",
  },
  {
    id: 2,
    title: "Goodrep Media Website Redesign",
    thumbnail: goodrep,
    modalImage: goodrep,
    highlights: [
      "Translated high-fidelity Figma wireframes into high-performance, pixel-perfect web components",
      "Led end-to-end development of custom CMS templates using scalable HTML5, CSS3, and JavaScript",
      "Ensured 100% WCAG accessibility compliance and cross-browser compatibility across all site modules",
      "Collaborated with marketing stakeholders to establish a modern, cohesive brand identity through code",
    ],
    link: "https://goodrep.media/",
  },
  {
    id: 3,
    title: "Vibe by California",
    thumbnail: vibe,
    modalImage: vibe,
    highlights: [
      "Managed the end-to-end digital content lifecycle for a high-volume ecommerce platform",
      "Optimized responsive layouts using visual builders to maintain brand consistency across all viewports",
      "Utilized web analytics and data-driven insights to inform structural content updates and UX refinements",
    ],
    link: "https://www.vibebycalifornia.com/",
  },
  {
    id: 4,
    title: "JagClamp",
    thumbnail: jag,
    modalImage: jag,
    highlights: [
      "Designed and built a visually compelling marketing site for an innovative industrial product",
      "Created custom interactive UI elements to effectively showcase complex product utility and features",
      "Focused on rapid-loading performance and responsive design principles to engage niche audiences",
    ],
    link: "https://jagclamp.com/",
  },
  {
    id: 5,
    title: "Abode Services",
    thumbnail: abodeHome,
    modalImage: abodeHome,
    highlights: [
      "Developed user-focused layouts that simplified navigation for professional service seekers",
      "Iterated on designs in collaboration with stakeholders to align web goals with core business objectives",
      "Maintained a clean, maintainable codebase to ensure long-term site stability and ease of updates",
    ],
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
