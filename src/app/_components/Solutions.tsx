"use client";
import { useEffect, useRef } from 'react';
import styles from './Solutions.module.css';

import Link from 'next/link';

const solutions = [
  {
    title: "Depot Infrastructure",
    description: "High-capacity charging for EV fleet depots at scale.",
    image: "/images/Depot.png",
    href: "/solutions/depot-infrastructure",
  },
  {
    title: "Charge Point Operators",
    description: "White-label power conversion for CPO networks.",
    image: "/images/CPO.png",
    href: "/solutions/charge-point-operators",
  },
  {
    title: "Hospitality & Workplace",
    description: "Seamless EV charging experiences for commercial sites.",
    image: "/images/HPW.png",
    href: "/solutions/hospitality-workplace",
  },
  {
    title: "Residential",
    description: "Intelligent home charging for modern living.",
    image: "/images/Residential.png",
    href: "/solutions/residential",
  },
  {
    title: "Custom Solutions",
    description: "Bespoke power conversion for unique use cases.",
    image: "/images/CustomSolutions.png",
    href: "/solutions/custom-solutions",
  },
];

export default function Solutions() {
  const sectionRef = useRef<HTMLElement>(null);

  // ── Section and Card entrance animation ───────────────────────────────────
  useEffect(() => {
    const cardEls = sectionRef.current?.querySelectorAll(`.${styles.card}`) ?? [];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Fade in the section container
            sectionRef.current?.classList.add(styles.sectionVisible);

            // Fade in cards sequentially
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
          <h2 className={styles.title}>Our Solutions</h2>
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
                <span className={styles.cardCta}>Explore</span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
