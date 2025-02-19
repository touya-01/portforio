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
          <p><strong>名前:</strong> 有薗 柊哉</p>
          <p><strong>出身:</strong> 静岡県富士市</p>
          <p><strong>生年月日:</strong> 2002年02月05日</p>
          <p><strong>志望職種:</strong> フロントエンジニア</p>
          <p>最近は Next.js や Tailwind CSS を活用し、より高品質なWebサイトを作ることを目指してサイトを作っています。</p>
        </div>
      </div>

      <div className={styles.history}>
        <h3 className={styles.subtitle}>HISTORY</h3>
        <ul className={styles.timeline}>
          <li>
            <span className={styles.year}>2002</span>
            <span className={styles.event}>生まれる</span>
          </li>
          <li>
            <span className={styles.year}>2014</span>
            <span className={styles.event}>千葉県立旭第二中学校 入学</span>
          </li>
          <li>
            <span className={styles.year}>2017</span>
            <span className={styles.event}>千葉県立東総工業高等高校 入学</span>
          </li>
          <li>
            <span className={styles.year}>2020</span>
            <span className={styles.event}>村岡ゴム工業株式会社 入社</span>
          </li>
          <li>
            <span className={styles.year}>2024</span>
            <span className={styles.event}>HAL東京専門学校WEB学科 入学</span>
          </li>
        </ul>
      </div>
    </section>
  );
}

