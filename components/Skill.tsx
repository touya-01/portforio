"use client";

import styles from "../styles/skill.module.css";
import { RiHtml5Fill } from "react-icons/ri";
import { SiCss3, SiJavascript, SiPhp, SiReact, SiFigma, SiAdobephotoshop, SiAdobeillustrator } from "react-icons/si";

export default function Skill() {
  return (
    <section className={styles.skill}>
      <h2 className={styles.title}>SKILL</h2>
      <div className={styles.container}>
        {/* HTML */}
        <div className={styles.item}>
          <RiHtml5Fill className={styles.icon} style={{ color: "#E44D26" }} />
          <p>HTML</p>
        </div>

        {/* CSS */}
        <div className={styles.item}>
          <SiCss3 className={styles.icon} style={{ color: "#1572B6" }} />
          <p>CSS</p>
        </div>

        {/* JavaScript */}
        <div className={styles.item}>
          <SiJavascript className={styles.icon} style={{ color: "#F7DF1E" }} />
          <p>JavaScript</p>
        </div>

        {/* PHP */}
        <div className={styles.item}>
          <SiPhp className={styles.icon} style={{ color: "#777BB4" }} />
          <p>PHP</p>
        </div>

        {/* React */}
        <div className={styles.item}>
          <SiReact className={styles.icon} style={{ color: "#61DAFB" }} />
          <p>React</p>
        </div>

        {/* Figma */}
        <div className={styles.item}>
          <SiFigma className={styles.icon} style={{ color: "#F24E1E" }} />
          <p>Figma</p>
        </div>

        {/* Photoshop */}
        <div className={styles.item}>
          <SiAdobephotoshop className={styles.icon} style={{ color: "#31A8FF" }} />
          <p>Photoshop</p>
        </div>

        {/* Illustrator */}
        <div className={styles.item}>
          <SiAdobeillustrator className={styles.icon} style={{ color: "#FF9A00" }} />
          <p>Illustrator</p>
        </div>
      </div>
    </section>
  );
}

