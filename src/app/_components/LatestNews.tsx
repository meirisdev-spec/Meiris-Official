"use client";
import { useEffect, useRef, useState } from 'react';
import styles from './LatestNews.module.css';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';

const mockNews = [
  {
    category: "Press Release",
    title: "MEIRIS Secures Series A to Scale Depot-Grade Charging Infrastructure Across India",
    date: "12 June 2025",
    link: "#",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    category: "Blog",
    title: "How SiC-Based Power Conversion is Redefining Fleet Electrification Economics",
    date: "5 June 2025",
    link: "#",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    category: "Announcement",
    title: "MEIRIS Joins National EV Mission as Technology Partner for Public Infrastructure Rollout",
    date: "28 May 2025",
    link: "#",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=80"
  }
];

export default function LatestNews() {
  const sectionRef = useRef<HTMLElement>(null);
  const [news, setNews] = useState<typeof mockNews>([]);
  const t = useTranslations('LatestNews');
  const locale = useLocale();

  useEffect(() => {
    setNews(mockNews);

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
    <section className={styles.newsSection} ref={sectionRef}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{t('heading')}</h2>
          <a href={`/${locale}/insights`} className={styles.viewAll}>{t('viewAll')}</a>
        </div>
        <div className={styles.newsGrid}>
          {news.map((item, index) => (
            <div key={index} className={styles.newsCard}>
              <div className={styles.imageWrapper}>
                <img src={item.image} alt={item.title} className={styles.image} />
              </div>
              <div className={styles.content}>
                <h3 className={styles.newsTitle}>{item.title}</h3>
                <div className={styles.meta}>
                  <span className={styles.date}>{item.date}</span>
                  <a href={item.link} className={styles.readMore}>{t('readMore')}</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
