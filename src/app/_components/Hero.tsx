"use client";
import { useEffect, useRef } from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Pause playback when hero is not visible to free up CPU/GPU
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Play and catch any autoplay policy rejections silently
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
          The power conversion<br />
          platform <span className={styles.highlight}>global</span><br />
          <span className={styles.highlight}>electrification</span> needs
        </h1>
      </div>

      <div className={styles.bottomContent}>
        <p className={styles.description}>
          From fleet depots to residential grids, our vertically integrated architecture delivers<br />
          precision control and unmatched efficiency across every electrification touchpoint.
        </p>
        <div className={styles.actions}>
          <button className={`${styles.btn} ${styles.btnPrimary}`}>EXPLORE ARCHITECTURE</button>
          <button className={`${styles.btn} ${styles.btnSecondary}`}>VIEW SOLUTIONS</button>
        </div>
      </div>
    </section>
  );
}
