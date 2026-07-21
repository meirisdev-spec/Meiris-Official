"use client";
import { useEffect, useRef } from 'react';
import styles from './Hero.module.css';
import { useTranslations } from 'next-intl';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const t = useTranslations('Hero');

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => { });
        } else {
          video.pause();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.hero}>
      {/* Background video */}
      <div className={styles.background}>
        <video
          ref={videoRef}
          className={styles.videoBackground}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          disablePictureInPicture
          disableRemotePlayback
          poster="/images/Depot.png"
          aria-hidden="true"
        >
          <source src="/videos/Home Page.mp4" type="video/mp4" />
        </video>
        <div className={styles.overlay} />
      </div>

      {/* Content */}
      <div className={styles.content}>
        <h1 className={styles.title}>
          {t('title1')} <br className={styles.desktopBr} />
          {t('title2')} <span className={styles.highlight}>{t('title3')}</span> <br className={styles.desktopBr} />
          <span className={styles.highlight}>{t('title4')}</span> {t('title5')}
        </h1>
      </div>

      <div className={styles.bottomContent}>
        <p className={styles.description}>
          {t('description')}
        </p>
        <div className={styles.actions}>
          <button className={`${styles.btn} ${styles.btnPrimary}`}>{t('btnExplore')}</button>
          <button className={`${styles.btn} ${styles.btnSecondary}`}>{t('btnSolutions')}</button>
        </div>
      </div>
    </section>
  );
}
