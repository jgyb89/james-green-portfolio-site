import styles from './ProjectsStyles.module.css';
import xora from '../../assets/xora-screen.jpg';
import brainwave from '../../assets/brainwave-screen.jpg'
import hoobank from '../../assets/hoobank-screen.jpg'
import ProjectCard from '../../common/ProjectCard';
import kotis from '../../assets/kotis-website-sample.jpg'
import vibe from '../../assets/vibe-website-sample.jpg'
import jag from '../../assets/jagclamp-website-sample.jpg'
import nucamp from '../../assets/nucamp-website-sample.jpg'
import reactLight from '../../assets/react-solid-light.svg'
import reactDark from '../../assets/react-solid-dark.svg'
import jsLight from '../../assets/js-solid-light.svg'
import jsDark from '../../assets/js-solid-dark.svg'
import bootstrapLight from '../../assets/bootstrap-solid-light.svg'
import bootstrapDark from '../../assets/bootstrap-solid-dark.svg'
import { useTheme } from '../../common/ThemeContex';

function Projects() {
    const { theme } = useTheme();

    const reactIcon = theme === 'light' ? reactLight : reactDark;
    const jsIcon = theme === 'light' ? jsLight : jsDark;
    const bootstrap = theme === 'light' ? bootstrapLight : bootstrapDark;


    return (
        <section id="projects" className={styles.container}>
            <h1 className='sectionTitle'>Nucamp React Website</h1>
            <div className={styles.projectMain}>
                <div>
                    <div className={styles.toolIcon}>
                        <img src={reactIcon} />
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
                        link={'https://jg-react-nucampsite.netlify.app/'}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                    />
                </div>
            </div>
            <hr />
            <h1 className="sectionTitle">WordPress Projects</h1>
            <div className={styles.projectsContainer}>
            <ProjectCard
                    src={jag}
                    link={'https://jagclamp.com/'}
                    h3="JagClamp"
                    p="Masonry Product Website"
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
                    src={kotis}
                    link={'https://go.kotisdesign.com/'}
                    h3="Kotis Design"
                    p="Swag Fulfillment Platform"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                />

            </div>
            <hr />
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