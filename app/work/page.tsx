"use client";

import Image from "next/image";
import styles from "../../styles/work.module.css";

export default function Work() {
  // 実績データ
  const works = [
    {
      id: 1,
      title: "ポートフォリオサイト",
      description: "Next.jsとCSSで制作したポートフォリオサイト",
      image: "/portfolio_site.png",
      link: "#",
    },
    {
      id: 2,
      title: "プロ野球子ども向け情報サイト",
      description: "プロ野球の情報を子ども向けにわかりやすくまとめたサイト",
      image: "/baseball_site.png",
      link: "#",
    },
    {
      id: 3,
      title: "カフェサイト",
      description: "CafedeParisという架空のカフェサイト",
      image: "/cafe_site.png",
      link: "#",
    },
    {
      id: 4,
      title: "ブーランジェリーサイト",
      description: "BoulangerieHALという架空のブーランジェリーサイト",
      image: "/boulangerie_site.png",
      link: "#",
    },
    {
      id: 5,
      title: "ECサイト",
      description: "靴を専門とするECサイト",
      image: "/ec_site.png",
      link: "#",
    },
    {
      id: 6,
      title: "アーティストサイト",
      description: "学内コンテストで意欲賞をいただいたbacknumberのサイト",
      image: "/backnumber.png",
      link: "#",
    },
  ];

  return (
    <section className={styles.work}>
      <h2 className={styles.title}>WORK</h2>
      <div className={styles.container}>
        {works.map((work) => (
          <div key={work.id} className={styles.card}>
            <Image src={work.image} alt={work.title} width={300} height={200} />
            <h3>{work.title}</h3>
            <p>{work.description}</p>
            <a href={work.link} className={styles.link}>詳細を見る</a>
          </div>
        ))}
      </div>
    </section>
  );
}
