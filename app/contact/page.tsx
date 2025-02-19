"use client";

import { useState } from "react";
import styles from "../../styles/contact.module.css";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });


  const SERVICE_ID = "service_2i4r1vt";
  const TEMPLATE_ID = "template_ls5ic2m"; 
  const PUBLIC_KEY = "0ydTqt-4DhmdI5tMy"; 

  // 環境変数を使う場合
  // const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID;
  // const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
  // const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget; // フォーム要素を取得

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY);
      alert("送信が完了しました。");
      setFormData({ user_name: "", user_email: "", message: "" });
    } catch {
      alert("送信に失敗しました。");
    }
  };

  return (
    <section className={styles.contact}>
      <h2 className={styles.title}>CONTACT</h2>
      <p>お気軽にお問い合わせください。</p>
      <a href="mailto:yourname@example.com" className={styles.mail}>
        yourname@example.com
      </a>

      <form className={styles.form} onSubmit={handleSubmit}>
        <label>
          名前:
          <input type="text" name="user_name" value={formData.user_name} onChange={handleChange} required />
        </label>
        <label>
          メールアドレス:
          <input type="email" name="user_email" value={formData.user_email} onChange={handleChange} required />
        </label>
        <label>
          メッセージ:
          <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>
        </label>
        <button type="submit">送信</button>
      </form>
    </section>
  );
}
