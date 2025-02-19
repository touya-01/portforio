"use client";

import Image from "next/image";
import styles from "../../styles/about.module.css";

export default function About() {
  return (
    <section className={styles.about}>
      <h2 className={styles.title}>ABOUT</h2>
      <div className={styles.container}>
        {/* 左側: プロフィール画像 */}
        <div className={styles.image}>
          <Image src="/profile.png" alt="プロフィール画像" width={300} height={300} />
        </div>

        {/* 右側: 自己紹介テキスト */}
        <div className={styles.text}>
          <p><strong>名前:</strong> あなたの名前</p>
          <p><strong>出身:</strong> あなたの出身地</p>
          <p><strong>生年月日:</strong> 199X年X月X日</p>
          <p><strong>志望職種:</strong> フロントエンジニア</p>
          <p>最近は Next.js や Tailwind CSS を活用し、より高品質なWebサイトを作ることを目指しています。</p>
        </div>
      </div>

      <div className={styles.history}>
        <h3 className={styles.subtitle}>HISTORY</h3>
        <ul className={styles.timeline}>
          <li>
            <span className={styles.year}>2000</span>
            <span className={styles.event}>○○小学校 入学</span>
          </li>
          <li>
            <span className={styles.year}>2006</span>
            <span className={styles.event}>○○中学校 入学</span>
          </li>
          <li>
            <span className={styles.year}>2009</span>
            <span className={styles.event}>○○高校 入学</span>
          </li>
          <li>
            <span className={styles.year}>2012</span>
            <span className={styles.event}>○○大学 入学</span>
          </li>
          <li>
            <span className={styles.year}>2016</span>
            <span className={styles.event}>○○企業に就職</span>
          </li>
        </ul>
      </div>
    </section>
  );
}

