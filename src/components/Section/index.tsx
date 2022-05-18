// Styling
import './section.scss';

interface SectionProps {
  title: String;
  content: string;
  code?: string;
  image: string;
  darker?: boolean;
  reverse?: boolean;
}

export default function Section({
  title,
  content,
  code,
  image,
  darker,
  reverse,
}: SectionProps) {
  return (
    <section style={{ backgroundColor: darker ? 'var(--dark)' : '' }}>
      <div
        className="section__container"
        style={{ flexDirection: reverse ? 'row-reverse' : 'row' }}
      >
        <div className="section__text">
          <h2>{title}</h2>
          <p>{content}</p>
          <code style={{ backgroundColor: darker ? 'var(--dark-acc)' : '' }}>
            {code}
          </code>
        </div>
        <div
          style={{ backgroundImage: `url(${image})` }}
          className="section__image"
        ></div>
      </div>
    </section>
  );
}
