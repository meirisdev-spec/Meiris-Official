
import Hero from '../../_components/Hero';
import Solutions from '../../_components/Solutions';
import LatestNews from '../../_components/LatestNews';
import Contact from '../../_components/Contact';
import { getLocalizedMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  return getLocalizedMetadata({
    locale,
    path: '/',
    title: 'Meiris — The power conversion platform for global electrification',
  });
}

export default function Home() {
  return (
    <div className="main-wrapper">
      <Hero />
      <Solutions />
      <LatestNews />
      <Contact />
    </div>
  );
}
