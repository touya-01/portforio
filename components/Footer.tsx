"use client";

import styles from "../styles/footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <h2>CONTACT</h2>
      <p>ご連絡はこちらまで</p>
      <a href="mailto:touyaname@example.com">touyaname@example.com</a>
    </footer>
  );
}
