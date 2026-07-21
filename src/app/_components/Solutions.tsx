"use client";
import { useEffect, useRef } from 'react';
import styles from './Solutions.module.css';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';

export default function Solutions() {
  const sectionRef = useRef<HTMLElement>(null);
  const t = useTranslations('Solutions');
  const locale = useLocale();

  const solutions = [
    {
      title: t('depot.title'),
      description: t('depot.description'),
      image: "/images/Depot.png",
      href: `/${locale}/solutions/depot-infrastructure`,
    },
    {
      title: t('cpo.title'),
      description: t('cpo.description'),
      image: "/images/CPO.png",
      href: `/${locale}/solutions/charge-point-operators`,
    },
    {
      title: t('hospitality.title'),
      description: t('hospitality.description'),
      image: "/images/HPW.png",
      href: `/${locale}/solutions/hospitality-workplace`,
    },
    {
      title: t('residential.title'),
      description: t('residential.description'),
      image: "/images/Residential.png",
      href: `/${locale}/solutions/residential`,
    },
    {
      title: t('custom.title'),
      description: t('custom.description'),
      image: "/images/CustomSolutions.png",
      href: `/${locale}/solutions/custom-solutions`,
    },
  ];

  useEffect(() => {
    const cardEls = sectionRef.current?.querySelectorAll(`.${styles.card}`) ?? [];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            sectionRef.current?.classList.add(styles.sectionVisible);
            cardEls.forEach((card, i) => {
              setTimeout(() => card.classList.add(styles.cardVisible), i * 150);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.solutions} ref={sectionRef}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{t('heading')}</h2>
        </div>

        <div className={styles.cardsGrid}>
          {solutions.map((sol, i) => (
            <Link
              key={i}
              href={sol.href}
              className={styles.card}
              style={{ backgroundImage: `url(${sol.image})` }}
            >
              <div className={styles.cardOverlay} />
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{sol.title}</h3>
                <p className={styles.cardDesc}>{sol.description}</p>
                <span className={styles.cardCta}>{t('explore')}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
