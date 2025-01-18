import styles from './ProjectsStyles.module.css';
import xora from '../../assets/xora-screen.jpg'; 
import brainwave from '../../assets/brainwave-screen.jpg'
import hoobank from '../../assets/hoobank-screen.jpg'
import ProjectCard from '../../common/ProjectCard';
import kotis from '../../assets/kotis-website-sample.jpg'
import vibe from '../../assets/vibe-website-sample.jpg'
import jag from '../../assets/jagclamp-website-sample.jpg'

function Projects() {
  return  (
  <section id="projects" className={styles.container}>
    <h1 className="sectionTitle">WordPress Projects</h1>
    <div className={styles.projectsContainer}>
        <ProjectCard 
        src={kotis} 
        link={'https://go.kotisdesign.com/'}
        h3="Kotis Design"
        p="Swag fulfillment platform"
        target="_blank"
        rel="noopener noreferrer nofollow"
        />
        <ProjectCard 
        src={vibe} 
        link={'https://www.vibebycalifornia.com/'}
        h3="Vibe by California"
        p="Cannabis Dispensary"
        target="_blank"
        rel="noopener noreferrer nofollow"
        />
        <ProjectCard 
        src={jag} 
        link={'https://jagclamp.com/'}
        h3="JagClamp"
        p="Masonry Product Website"
        target="_blank"
        rel="noopener noreferrer nofollow"
        />
        
    </div>
    <h1 className="sectionTitle">React UI Projects</h1>
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