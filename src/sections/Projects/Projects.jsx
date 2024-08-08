import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png'; 
import freshBurger from '../../assets/fresh-burger.png'
import fitLift from '../../assets/fitlift.png'
import hipsster from '../../assets/hipsster.png'
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return  (
  <section id="projects" className={styles.container}>
    <h1 className="sectionTitle">Projects</h1>
    <div className={styles.projectsContainer}>
        <ProjectCard 
        src={viberr} 
        link={''}
        h3="Project 1"
        p="Project 1 desc"
        />
        <ProjectCard 
        src={freshBurger} 
        link={''}
        h3="Project 2"
        p="Project 2 desc"
        />
        <ProjectCard 
        src={fitLift} 
        link={''}
        h3="Project 3"
        p="Project 3 desc"
        />
        <ProjectCard 
        src={hipsster} 
        link={''}
        h3="Project 4"
        p="Project 4 desc"
        />
    </div>
    </section>
    );
  
}

export default Projects;