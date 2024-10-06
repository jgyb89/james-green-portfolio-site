import styles from './ProjectsStyles.module.css';
import xora from '../../assets/xora-screen.jpg'; 
import brainwave from '../../assets/brainwave-screen.jpg'
import hoobank from '../../assets/hoobank-screen.jpg'
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return  (
  <section id="projects" className={styles.container}>
    <h1 className="sectionTitle">Projects</h1>
    <div className={styles.projectsContainer}>
        <ProjectCard 
        src={xora} 
        link={'https://xora-sass-app.netlify.app/'}
        h3="Xora"
        p="SaaS Landing Page"
        target="_blank"
        rel="noopener noreferrer"
        />
        <ProjectCard 
        src={brainwave} 
        link={'https://brainwavejg.netlify.app/'}
        h3="Brainwave"
        p="Open AI chat app"
        target="_blank"
        rel="noopener noreferrer"
        />
        <ProjectCard 
        src={hoobank} 
        link={'https://hoobank-jg.netlify.app/'}
        h3="Hoobank"
        p="Banking App"
        target="_blank"
        rel="noopener noreferrer"
        />
    </div>
    </section>
    );
  
}

export default Projects;