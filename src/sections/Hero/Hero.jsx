import styles from './HeroStyles.module.css';
import heroImg from '../../assets/james-green-front-end-developer.webp';
import themeIcon from '../../assets/sun.svg';
import themeIcon from '../../assets/moon.svg';
import webLight from '../../assets/web-light.svg';
import webDark from '../../assets/web-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf';
import { userTheme } from '../../common/ThemeContex';

function Hero() {
    const {theme, toggleTheme} = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const webIcon = theme === 'light' ? webLight : webDark;

  return (
    <section id="hero" className={styles.containter}>
        <div className={styles.colorModeContainer}>
            <img className={styles.hero}
            src={heroImg} 
            alt="Profile picture of James Green" />
         <img className={styles.colorMode} src={themeIcon} alt="Color mode icon" onClick={toggleTheme} />
         </div>
         <div className={styles.info}>
            <h1>James <br /> Green</h1>
            <h2>Frontend Developer</h2>
            <span>
                <a href="https://linkedIn.com/" target="_blank"><img src={linkedinIcon} alt="LinkedIn Icon"></img>
                </a>
                <a href="https://github.com/" target="_blank"><img src={githubIcon} alt="Github Icon"></img>
                </a>
                <a href="https://personalwebsite.com/" target="_blank"><img src={webIcon} alt="Web Icon"></img>
                </a>
            </span>
            <p className={styles.description}>With a passion for developing modern React web apps for commercial businesses.</p>
            <a href={CV} download>
                <button className="hover">Resume</button>
            </a>
         </div>
    </section>
  )
}

export default Hero;