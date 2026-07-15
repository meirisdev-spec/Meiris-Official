"use client";
import { useEffect, useRef } from 'react';
import styles from './Contact.module.css';

export default function Contact() {
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
            <h2 className={styles.title}>Ready to Engineer the Transition?</h2>
            <p className={styles.description}>
              Whether you are building the next generation of chargers or scaling industrial storage, our platform provides the precision you need.
            </p>
            <form className={styles.form}>
              <div className={styles.inputGroup}>
                <input type="text" placeholder="Full Name" className={styles.input} required />
                <input type="email" placeholder="Work Email" className={styles.input} required />
              </div>
              <textarea placeholder="Project Details" className={styles.textarea} rows={4} required></textarea>
              <button type="submit" className={styles.submitBtn}>Initialize Consultation</button>
            </form>
          </div>
          <div className={styles.imageContent}>
            <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Engineers discussing" className={styles.image} />
          </div>
        </div>
      </div>
    </section>
  );
}
