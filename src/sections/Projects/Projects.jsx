import { useRef, useState } from "react";
import { createPortal } from "react-dom";
import styles from "./ProjectsStyles.module.css";
import ProjectCard from "../../common/ProjectCard";
import ProjectModal from "../../common/ProjectModal";

// Goodrep Projects
import goodrep from "../../assets/goodrep-media-site-sample.webp";
import goodrepProject01 from "../../assets/goodrep-media-site-sample-01.webp.jpg";
import goodrepProject02 from "../../assets/goodrep-media-site-sample-02.webp.jpg";
import goodrepProject03 from "../../assets/goodrep-media-site-sample-03.webp.jpg";

// CCR Projects
import capeCoralReviewed from "../../assets/ccr-project-thumbnail.jpg";
import capeCoralProject01 from "../../assets/ccr-project-sample-01.jpg";
import capeCoralProject02 from "../../assets/ccr-project-sample-02.jpg";
import capeCoralProject03 from "../../assets/ccr-project-sample-03.jpg";

// Vibe Projects
import vibe from "../../assets/vibe-website-sample.jpg";
import vibeProject01 from "../../assets/vibe-project-sample-01.jpg";
import vibeProject02 from "../../assets/vibe-project-sample-02.jpg";
import vibeProject03 from "../../assets/vibe-project-sample-03.jpg";

// Be Balanced Projects
import bebalanced from "../../assets/be-balanced-bodyworks-portfolio.jpg";
import bebalancedProject01 from "../../assets/be-balanced-project-snapshot-01.jpg";
import bebalancedProject02 from "../../assets/be-balanced-project-snapshot-02.jpg";
import bebalancedProject03 from "../../assets/be-balanced-project-snapshot-03.jpg";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const projectData = [
  {
    id: 1,
    title: "Cape Coral Reviewed",
    thumbnail: capeCoralReviewed,
    modalGallery: [
      capeCoralReviewed,
      capeCoralProject02,
      capeCoralProject01,
      capeCoralProject03,
    ],
    highlights: [
      "Architected a scalable, headless WordPress directory application using Next.js to support a high-performance multi-city rollout",
      "Led the UI/UX design process, translating high-fidelity wireframes into responsive, intuitive web experiences",
      "Collaborated cross-functionally to align user needs with business goals, writing clean, maintainable code to ensure long-term site stability",
    ],
    link: "https://cape-coral-reviewed.vercel.app/en",
  },
  {
    id: 2,
    title: "Be Balanced Bodyworks",
    thumbnail: bebalanced,
    modalGallery: [
      bebalanced,
      bebalancedProject01,
      bebalancedProject02,
      bebalancedProject03,
    ],
    highlights: [
      "Spearheaded a mobile-first UX redesign that drove a 345% increase in organic active users",
      "Architected custom landing pages using semantic HTML5 and CSS to optimize conversion funnels",
      "Boosted Google Lighthouse scores from below 60 to 90+ through technical SEO and performance tuning",
      "Engineered state-aware CTA interactions to reduce bounce rates and improve user retention",
    ],
    link: "https://www.bebalancedgr.com/",
  },
  {
    id: 3,
    title: "Goodrep Media Website Redesign",
    thumbnail: goodrep,
    modalGallery: [
      goodrep,
      goodrepProject01,
      goodrepProject03,
      goodrepProject02,
    ],
    highlights: [
      "Translated high-fidelity Figma wireframes into high-performance, pixel-perfect web components",
      "Led end-to-end development of custom CMS templates using scalable HTML5, CSS3, and JavaScript",
      "Ensured 100% WCAG accessibility compliance and cross-browser compatibility across all site modules",
      "Collaborated with marketing stakeholders to establish a modern, cohesive brand identity through code",
    ],
    link: "https://goodrep.media/",
  },
  {
    id: 4,
    title: "Vibe by California",
    thumbnail: vibe,
    modalGallery: [vibe, vibeProject01, vibeProject02, vibeProject03],
    highlights: [
      "Managed the end-to-end digital content lifecycle for a high-volume ecommerce platform",
      "Optimized responsive layouts using visual builders to maintain brand consistency across all viewports",
      "Utilized web analytics and data-driven insights to inform structural content updates and UX refinements",
    ],
    link: "https://www.vibebycalifornia.com/",
  },
];

const otherWordpressProjects = [
  {
    name: "Homeowner Help Options",
    url: "https://homeownerhelpoptions.com/",
    domain: "homeownerhelpoptions.com",
  },
  {
    name: "Abode Services",
    url: "https://abode-services.com/",
    domain: "abode-services.com",
  },
  {
    name: "Validiform",
    url: "https://validiform.com/",
    domain: "validiform.com",
  },
  {
    name: "California Wildfire Help",
    url: "https://californiawildfirehelp.org/",
    domain: "californiawildfirehelp.org",
  },
  {
    name: "ECS Partner Trifecta",
    url: "https://ecspartnertrifecta.com/",
    domain: "ecspartnertrifecta.com",
  },
  {
    name: "The Tax Axe",
    url: "https://thetaxaxe.org/",
    domain: "thetaxaxe.org",
  },
];

function Projects() {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);
  const otherSectionRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray(`.${styles.projectCardItem}`);

      cards.forEach((card) => {
        gsap.from(card, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });

      if (otherSectionRef.current) {
        gsap.from(otherSectionRef.current, {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: otherSectionRef.current,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        });
      }
    },
    { scope: sectionRef },
  );

  return (
    <div className="projects-wrapper" style={{ width: "100%", minWidth: 0 }}>
      <section id="projects" className={styles.container} ref={sectionRef}>
        <h1 className={`sectionTitle ${styles.sectionTitle}`}>Projects</h1>

        <div className={styles.projectsGrid} ref={gridRef}>
          {projectData.map((project) => (
            <div key={project.id} className={styles.projectCardItem}>
              <ProjectCard
                src={project.thumbnail}
                h3={project.title}
                p={project.highlights[0]}
                onClick={() => setSelectedProject(project)}
              />
            </div>
          ))}
        </div>

        {/* Other WordPress Projects */}
        <div className={styles.otherProjectsContainer} ref={otherSectionRef}>
          <h2 className={styles.otherProjectsTitle}>Other WordPress Projects</h2>
          <ul className={styles.otherProjectsList}>
            {otherWordpressProjects.map((site) => (
              <li key={site.url} className={styles.otherProjectItem}>
                <a
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.otherProjectLink}
                >
                  <div className={styles.otherProjectInfo}>
                    <span className={styles.otherProjectName}>{site.name}</span>
                    <span className={styles.otherProjectDomain}>{site.domain}</span>
                  </div>
                  <svg
                    className={styles.externalIcon}
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Project Modal */}
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
