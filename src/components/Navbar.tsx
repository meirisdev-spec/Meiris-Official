"use client";
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

export default function Navbar() {
  // Use a ref for the progress bar — direct DOM mutation avoids React re-renders
  // on every scroll tick, which was causing the stepping/lag
  const progressBarRef = useRef<HTMLDivElement>(null);
  let rafId: number | null = null;

  useEffect(() => {
    const bar = progressBarRef.current;
    if (!bar) return;

    const onScroll = () => {
      // Cancel any pending frame so we only update once per frame
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        bar.style.width = `${pct}%`;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // set initial state

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>

        {/* Logo */}
        <div className={styles.logo}>
          <Link href="/">
            <Image
              src="/logos/Meiris-Logo.png"
              alt="MEIRIS — Intelligent Power Conversion"
              width={173}
              height={60}
              priority
              className={styles.logoImage}
            />
          </Link>
        </div>

        {/* Nav links */}
        <ul className={styles.navLinks}>
          <li><Link href="/platform">Platform</Link></li>

          <li className={styles.dropdown}>
            <span className={styles.dropdownTrigger}>
              Products
              <svg className={styles.chevronIcon} viewBox="0 0 10 6" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
              </svg>
            </span>
            <div className={styles.dropdownPanel}>
              <Link href="/products" className={styles.dropdownItem}>MEIRIS Charge</Link>
            </div>
          </li>

          <li className={styles.dropdown}>
            <span className={styles.dropdownTrigger}>
              Solutions
              <svg className={styles.chevronIcon} viewBox="0 0 10 6" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
              </svg>
            </span>
            <div className={styles.dropdownPanel}>
              <Link href="/solutions/depot-infrastructure" className={styles.dropdownItem}>Depot Infrastructure</Link>
              <Link href="/solutions/charge-point-operators" className={styles.dropdownItem}>Charge Point Operators</Link>
              <Link href="/solutions/hospitality-workplace" className={styles.dropdownItem}>Hospitality &amp; Workplace</Link>
              <Link href="/solutions/residential" className={styles.dropdownItem}>Residential</Link>
              <Link href="/solutions/custom-solutions" className={styles.dropdownItem}>Custom Solutions</Link>
            </div>
          </li>

          <li><Link href="/insights">Insights</Link></li>

          <li className={styles.dropdown}>
            <span className={styles.dropdownTrigger}>
              About
              <svg className={styles.chevronIcon} viewBox="0 0 10 6" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
              </svg>
            </span>
            <div className={styles.dropdownPanel}>
              <Link href="/about" className={styles.dropdownItem}>About Us</Link>
              <Link href="/team" className={styles.dropdownItem}>Team</Link>
              <Link href="/careers" className={styles.dropdownItem}>Career</Link>
              <Link href="/contact" className={styles.dropdownItem}>Contact Us</Link>
            </div>
          </li>
        </ul>

        {/* CTA */}
        <div className={styles.actions}>
          <Link href="/contact">
            <button className={styles.contactBtn}>Get in touch</button>
          </Link>
        </div>
      </div>

      {/* Smooth left-to-right scroll progress bar */}
      <div className={styles.progressTrack} aria-hidden="true">
        <div ref={progressBarRef} className={styles.progressBar} style={{ width: '0%' }} />
      </div>
    </nav>
  );
}
