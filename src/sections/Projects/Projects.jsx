/* image imports */

import styles from "./ProjectsStyles.module.css";
import xora from "../../assets/xora-screen.jpg";
import brainwave from "../../assets/brainwave-screen.jpg";
import hoobank from "../../assets/hoobank-screen.jpg";
import ProjectCard from "../../common/ProjectCard";
import goodrep from "../../assets/goodrep-media-site-sample.webp";
import capeCoralReviewed from "../../assets/cape-coral-reviewed-sample.webp";
import abodeHome from "../../assets/abode-home-services-sample.webp";
import vibe from "../../assets/vibe-website-sample.jpg";
import jag from "../../assets/jagclamp-website-sample.jpg";
import nucamp from "../../assets/nucamp-website-sample.jpg";

/* icon imports */
import reactLight from "../../assets/react-solid-light.svg";
import reactDark from "../../assets/react-solid-dark.svg";
import jsLight from "../../assets/js-solid-light.svg";
import jsDark from "../../assets/js-solid-dark.svg";
import diviLight from "../../assets/divi-theme-logo-light.svg";
import diviDark from "../../assets/divi-theme-logo-dark.svg";
import wordPressLight from "../../assets/wordpress-logo-light.svg";
import wordPressDark from "../../assets/wordpress-logo-dark.svg";
import bootstrapLight from "../../assets/bootstrap-solid-light.svg";
import bootstrapDark from "../../assets/bootstrap-solid-dark.svg";
import phpLight from "../../assets/php-logo-light.svg";
import phpDark from "../../assets/php-logo-dark.svg";
import windowLight from "../../assets/new-window-icon-light.svg";
import newWindowDark from "../../assets/new-window-icon-dark.svg";
import { useTheme } from "../../common/ThemeContex";

function Projects() {
  const { theme } = useTheme();

  const reactIcon = theme === "light" ? reactLight : reactDark;
  const jsIcon = theme === "light" ? jsLight : jsDark;
  const bootstrap = theme === "light" ? bootstrapLight : bootstrapDark;
  const diviTheme = theme === "light" ? diviLight : diviDark;
  const wordPress = theme === "light" ? wordPressLight : wordPressDark;
  const newWindow = theme === "light" ? windowLight : newWindowDark;
  const phpIcon = theme === "light" ? phpLight : phpDark;

  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Wordpress Projects</h1>
      <div className={styles.projectMain}>
        <div>
          <div className={styles.toolIcon}>
            <img src={wordPress} />
            <img src={diviTheme} />
            <img src={jsIcon} />
          </div>
          <h2>Goodrep Media Website Redesign</h2>
          <div className={styles.list}>
            <p>Fully Built with Divi Theme</p>
            <a
              target="_blank"
              href="https://www.figma.com/design/inTDrKhaUFbmgFPU91fKu1/Good-Rep-Website?node-id=0-1&t=HItKbCRQXxtWGoyK-1"
            >
              <p className={styles.openNew}>
                Figma Design <img src={newWindow} />
              </p>
            </a>
            <p>Improved Animated Elements</p>
          </div>
        </div>
        <div className={styles.projectsReact}>
          <ProjectCard
            src={goodrep}
            link={"https://goodrep.media/"}
            target="_blank"
            rel="noopener noreferrer nofollow"
          />
        </div>
      </div>
      <hr />
      <div className={styles.projectMain}>
        <div>
          <div className={styles.toolIcon}>
            <img src={wordPress} />
            <img src={diviTheme} />
            <img src={jsIcon} />
            <img src={phpIcon} />
          </div>
          <h2>Cape Coral Reviewed - Directory Listing</h2>
          <div className={styles.list}>
            <p>Fully Built with Divi Theme</p>
            <p>Improved Animated Elements</p>
            <p>Login Function with Google Auth</p>
            <p>Custom JavaScript and PHP</p>
          </div>
        </div>
        <div className={styles.projectsReact}>
          <ProjectCard
            src={capeCoralReviewed}
            link={"https://capecoralreviewed.com/"}
            target="_blank"
            rel="noopener noreferrer nofollow"
          />
        </div>
      </div>

      <hr />
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={abodeHome}
          link={"https://abode-services.com/"}
          h3="Abode Services"
          p="Home Help Solutions"
          target="_blank"
          rel="noopener noreferrer nofollow"
        />
        <ProjectCard
          src={vibe}
          link={"https://www.vibebycalifornia.com/"}
          h3="Vibe by California"
          p="Cannabis Dispensary"
          target="_blank"
          rel="noopener noreferrer nofollow"
        />
        <ProjectCard
          src={jag}
          link={"https://jagclamp.com/"}
          h3="JagClamp"
          p="Family-owned Masonry Tool"
          target="_blank"
          rel="noopener noreferrer nofollow"
        />
      </div>
      <hr />
      <h1 className="sectionTitle">React UI Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={xora}
          link={"https://xora-sass-app.netlify.app/"}
          h3="Xora"
          p="SaaS Landing Page"
          target="_blank"
          rel="noopener noreferrer"
        />
        <ProjectCard
          src={brainwave}
          link={"https://brainwavejg.netlify.app/"}
          h3="Brainwave"
          p="Open AI chat app"
          target="_blank"
          rel="noopener noreferrer"
        />
        <ProjectCard
          src={hoobank}
          link={"https://hoobank-jg.netlify.app/"}
          h3="Hoobank"
          p="Banking App"
          target="_blank"
          rel="noopener noreferrer"
        />
      </div>
       <hr />
      <h1 className="sectionTitle">Nucamp React Website</h1>
      <div className={styles.projectMain}>
        <div>
          <div className={styles.toolIcon}>
            <img src={reactIcon} />
            <img src={jsIcon} />
            <img src={bootstrap} />
          </div>
          <h2>React Redux App</h2>
          <div className={styles.list}>
            <p>Redux Toolkit</p>
            <p>Hooks and Function Components</p>
            <p>Organized Git Version Control</p>
            <p>Login Function</p>
            <p>Comment Form with Validation</p>
          </div>
        </div>
        <div className={styles.projectsReact}>
          <ProjectCard
            src={nucamp}
            link={"https://jg-react-nucampsite.netlify.app/"}
            target="_blank"
            rel="noopener noreferrer nofollow"
          />
        </div>
      </div>
      <hr />
    </section>
  );
}

export default Projects;
