"use client";
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

export default function Navbar() {
  // Use a ref for the progress bar — direct DOM mutation avoids React re-renders
  // on every scroll tick, which was causing the stepping/lag
  const progressBarRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  let rafId: number | null = null;

  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

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
              width={200}
              height={70}
              priority
              className={styles.logoImage}
            />
          </Link>
        </div>

        {/* Nav links */}
        <ul className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/platform">Platform</Link></li>

          <li className={`${styles.dropdown} ${activeDropdown === 'products' ? styles.dropdownActive : ''}`} onClick={() => toggleDropdown('products')}>
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

          <li className={`${styles.dropdown} ${activeDropdown === 'solutions' ? styles.dropdownActive : ''}`} onClick={() => toggleDropdown('solutions')}>
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

          <li className={`${styles.dropdown} ${activeDropdown === 'insights' ? styles.dropdownActive : ''}`} onClick={() => toggleDropdown('insights')}>
            <span className={styles.dropdownTrigger}>
              Insights
              <svg className={styles.chevronIcon} viewBox="0 0 10 6" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
              </svg>
            </span>
            <div className={styles.dropdownPanel}>
              <Link href="/insights" className={styles.dropdownItem}>Press Releases &amp; Announcements</Link>
              <Link href="/resources" className={styles.dropdownItem}>Resources</Link>
            </div>
          </li>

          <li className={`${styles.dropdown} ${activeDropdown === 'about' ? styles.dropdownActive : ''}`} onClick={() => toggleDropdown('about')}>
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
          
          <li className={styles.mobileCta}>
            <Link href="/contact" className={styles.contactBtn}>
              Get in touch
            </Link>
          </li>
        </ul>

        {/* CTA */}
        <div className={styles.actions}>
          <Link href="/contact" className={`${styles.contactBtnWrapper} ${styles.contactBtn}`}>
            Get in touch
          </Link>
          <button className={styles.hamburger} onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.hamburgerIcon}>
              {isMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Smooth left-to-right scroll progress bar */}
      <div className={styles.progressTrack} aria-hidden="true">
        <div ref={progressBarRef} className={styles.progressBar} style={{ width: '0%' }} />
      </div>
    </nav>
  );
}
