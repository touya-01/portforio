"use client";

import styles from "../styles/hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <h1>Welcome to My Portfolio</h1>
        <p>Web Developer | Designer | Creator</p>
      </div>
    </section>
  );
}
