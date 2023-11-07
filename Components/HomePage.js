import styles from "../styles/Home.module.css";
import Link from "next/link";

import Skills from "./Skills";

import { userinfo, ctaTexts, headings } from "../Constants/userinfo";
import Education from "./Education";

const HomePage = ({ currentTheme }) => {
  return (
    <div>
      <div
        className={styles.homeheading}
        style={{ backgroundColor: currentTheme.secondary }}
      >
        <h1 className={styles.heading}>{userinfo.greeting.title}</h1>
        <h2 className={styles.subheading}>21BBS0085</h2>
        <h2
          className={styles.subheading}
          style={{ color: currentTheme.subtext }}
        >
          {userinfo.greeting.subtitle}
        </h2>
        <Link href="#work">
          <a
            className={styles.cta1}
            style={{
              backgroundColor: currentTheme.accent,
              color: currentTheme.contrastText,
              boxShadow: currentTheme.boxShadow,
            }}
          >
            {ctaTexts.landingCTA}
          </a>
        </Link>
      </div>

      <div
        id="education"
        className={styles.homeSkillSection}
        style={{ backgroundColor: currentTheme.secondary }}
      >
        <Skills currentTheme={currentTheme} />
      </div>
      <div>
        {userinfo.education.visible ? (
          <Education currentTheme={currentTheme} />
        ) : null}
      </div>
      <div
        id="about"
        className={styles.homeAboutSection}
        style={{ backgroundColor: currentTheme.secondary }}
      >
        <h1 className={styles.workheading} data-aos="fade-up">
          {headings.about}
        </h1>
        <p
          className={styles.aboutText}
          style={{ color: currentTheme.subtext }}
          data-aos="fade-up"
        >
          {userinfo.about.content}
        </p>
        <div
          data-aos="fade-up"
          style={{
            textAlign: "center",
            padding: "1rem 0",
            margin: "1rem 0",
            position: "relative",
            display: "flex",
            color: currentTheme.subtext,
          }}
        ></div>
      </div>
    </div>
  );
};

export default HomePage;
