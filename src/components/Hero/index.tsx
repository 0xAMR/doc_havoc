// Styling
import './hero.scss';

// Interface
interface HeroProps {
  title: String;
  subtitle?: string;
  cta: string;
}

export default function Hero({ title, subtitle, cta }: HeroProps) {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__title">{title}</h1>
        <p className="hero__subtitle">{subtitle}</p>
        <button className="hero__cta">{cta}</button>
      </div>
    </section>
  );
}
