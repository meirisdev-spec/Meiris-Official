"use client";
import { useEffect, useRef } from 'react';
import styles from './Contact.module.css';
export default function Contact({ data }: { data: any }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        entries[0].target.classList.add(styles.visible);
        observer.unobserve(entries[0].target);
      }
    }, { threshold: 0.1 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.contactSection} ref={sectionRef}>
      <div className={styles.container}>
        <div className={styles.contactBox}>
          <div className={styles.textContent}>
            <h2 className={styles.title}>{data.heading}</h2>
            <p className={styles.description}>
              {data.description}
            </p>
            <form className={styles.form}>
              <div className={styles.inputGroup}>
                <input type="text" placeholder={data.namePlaceholder} className={styles.input} required />
                <input type="email" placeholder={data.emailPlaceholder} className={styles.input} required />
              </div>
              <textarea placeholder={data.messagePlaceholder} className={styles.textarea} rows={4} required></textarea>
              <button type="submit" className={styles.submitBtn}>{data.submitBtn}</button>
            </form>
          </div>
          <div className={styles.imageContent}>
            <img src={data.imageUrl || "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"} alt="Contact" className={styles.image} />
          </div>
        </div>
      </div>
    </section>
  );
}
