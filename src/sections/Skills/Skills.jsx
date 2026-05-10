import styles from "./SkillsStyles.module.css";
import checkMarkIconDark from "../../assets/checkmark-dark.svg";
import checkMarkIconLight from "../../assets/checkmark-light.svg";
import SkillList from "../../common/SkillList";
import { useTheme } from "../../common/ThemeContex";

const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux.js",
  "Creative Suite",
  "UI/UX",
  "Figma",
  "SEO",
  "WordPress",
  "Divi Theme",
  "MongoDB",
  "Bootstrap",
  "GitHub",
];

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon =
    theme === "light" ? checkMarkIconLight : checkMarkIconDark;

  return (
    <div id="skills" className={styles.container}>
      <div className={styles.marqueeWrapper}>
        <div className={styles.marqueeTrack}>
          <div className={styles.skillGroup}>
            {skillsData.map((skill) => (
              <SkillList key={skill} src={checkMarkIcon} skill={skill} />
            ))}
          </div>
          <div className={styles.skillGroup}>
            {skillsData.map((skill) => (
              <SkillList
                key={"dup-" + skill}
                src={checkMarkIcon}
                skill={skill}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
