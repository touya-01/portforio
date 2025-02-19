"use client";

import Image from "next/image";
import styles from "../styles/like.module.css";

export default function Like() {
  return (
    <section className={styles.like}>
      <h2 className={styles.title}>LIKE</h2>
      <div className={styles.container}>
        {/* サウナ */}
        <div className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/sauna.png" alt="サウナ" width={150} height={150} />
          </div>
          <div className={styles.textContainer}>
            <h2>サウナ</h2>
            <p>ととのうのが至福の時間です！</p>
          </div>
        </div>

        {/* 野球 */}
        <div className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/baseball.png" alt="野球" width={150} height={150} />
          </div>
          <div className={styles.textContainer}>
            <h2>プロ野球観戦</h2>
            <p>幼いころからずっと観て楽しんでいます！</p>
          </div>
        </div>

        {/* 食材 */}
        <div className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/music.png" alt="食材" width={150} height={150} />
          </div>
          <div className={styles.textContainer}>
            <h2>音楽</h2>
            <p>好きなアーティストを聴いたりする時間は幸せです！</p>
          </div>
        </div>
      </div>
    </section>
  );
}
