
import Hero from './_components/Hero';
import Solutions from './_components/Solutions';
import LatestNews from './_components/LatestNews';
import Contact from './_components/Contact';

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
