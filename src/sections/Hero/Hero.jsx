import styles from './HeroStyles.module.css';
import heroImg from '../../assets/james-green-front-end-developer.webp';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import behanceLight from '../../assets/behance-light.svg';
import behanceDark from '../../assets/behance-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContex';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const behanceIcon = theme === 'light' ? behanceLight : behanceDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of James Green"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          James
          <br />
          Green
        </h1>
        <h2>Frontend Developer</h2>
        <span>
          <a href="https://www.behance.net/jamesgreen39" target="_blank">
            <img src={behanceIcon} alt="Behance icon" />
          </a>
          <a href="https://github.com/jgyb89" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/james-green-b1b73a114/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
          With a passion for developing modern web apps for commercial
          businesses.
        </p>
        <a href={CV} download>
          <button className="hover">Download CV</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;