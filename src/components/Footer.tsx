import Image from 'next/image';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import styles from './Footer.module.css';

export default function Footer({ data }: { data?: any }) {
  const currentLocale = useLocale();
  const localePath = (path: string) => path.startsWith('/') ? `/${currentLocale}${path}` : path;

  const tagline = data?.tagline || "Precision Engineering for a Sustainable Future.\nGlobal Headquarters in Zurich, manufacturing in Munich.";
  const copyright = data?.copyright || `© ${new Date().getFullYear()} MEIRIS. All rights reserved.`;

  // Default link groups if data not available
  const linkGroups = data?.linkGroups || [
    {
      _key: 'default1', title: 'Platform', links: [
        { _key: '1', label: 'Technology', href: '#' },
        { _key: '2', label: 'Architecture', href: '#' },
        { _key: '3', label: 'Roadmap', href: '#' },
      ]
    },
    {
      _key: 'default2', title: 'Resources', links: [
        { _key: '4', label: 'Whitepapers', href: '#' },
        { _key: '5', label: 'Documentation', href: '#' },
        { _key: '6', label: 'Case Studies', href: '#' },
      ]
    },
    {
      _key: 'default3', title: 'Company', links: [
        { _key: '7', label: 'Careers', href: '/careers' },
        { _key: '8', label: 'Global Support', href: '#' },
        { _key: '9', label: 'Investor Relations', href: '#' },
      ]
    }
  ];

  const legalLinks = data?.legalLinks || [
    { _key: '10', label: 'Privacy Policy', href: '#' },
    { _key: '11', label: 'Terms of Use', href: '#' },
  ];

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
            <p className={styles.tagline} style={{ whiteSpace: 'pre-line' }}>
              {tagline}
            </p>
          </div>
          <div className={styles.linksGrid}>
            {linkGroups.map((group: any) => (
              <div key={group._key} className={styles.linkGroup}>
                <h4>{group.title}</h4>
                {group.links?.map((link: any) => (
                  <Link key={link._key} href={localePath(link.href)}>{link.label}</Link>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>{copyright}</p>
          <div className={styles.legal}>
            {legalLinks.map((link: any) => (
              <Link key={link._key} href={localePath(link.href)}>{link.label}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
