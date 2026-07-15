import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.brandInfo}>
            <Image
              src="/logos/Meiris-Logo.png"
              alt="MEIRIS - Intelligent Power Conversion"
              width={140}
              height={50}
              className={styles.logo}
            />
            <p className={styles.tagline}>
              Precision Engineering for a Sustainable Future.<br />
              Global Headquarters in Zurich, manufacturing in Munich.
            </p>
          </div>
          <div className={styles.linksGrid}>
            <div className={styles.linkGroup}>
              <h4>Platform</h4>
              <Link href="#">Technology</Link>
              <Link href="#">Architecture</Link>
              <Link href="#">Roadmap</Link>
            </div>
            <div className={styles.linkGroup}>
              <h4>Resources</h4>
              <Link href="#">Whitepapers</Link>
              <Link href="#">Documentation</Link>
              <Link href="#">Case Studies</Link>
            </div>
            <div className={styles.linkGroup}>
              <h4>Company</h4>
              <Link href="#">Careers</Link>
              <Link href="#">Global Support</Link>
              <Link href="#">Investor Relations</Link>
            </div>
          </div>
        </div>
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>© {new Date().getFullYear()} MEIRIS. All rights reserved.</p>
          <div className={styles.legal}>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
