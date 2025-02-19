"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "../styles/header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      {/* 左側：ロゴ */}
      <div className={styles.logo}>
          <Image src="/logo.svg" alt="Logo" width={150} height={50} />
      </div>

      {/* 右側：ナビゲーション */}
      <nav>
        <ul className={styles.navList}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/work">Work</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>


    </header>
  );
}
