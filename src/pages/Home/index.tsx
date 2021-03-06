import Hero from '../../components/Hero';
import Overview from '../../components/Overview';
import Section from '../../components/Section';

export default function Home() {
  return (
    <div>
      <Hero
        title="Doc Havoc is Here"
        subtitle="Lorem Ipsum Dolor Sit Amet"
        cta="Learn More"
      />
      <Overview />
      <Section
        title="Lorem ipsum dolor"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore a,
          sapiente asperiores, blanditiis esse explicabo vero non, voluptate rem
          necessitatibus eos repellat! Expedita vitae, quod sint officia nisi
          cupiditate. Totam?"
        image="./assets/code.jpg"
        code="npx install doc-havoc"
      />
      <Section
        title="Lorem ipsum dolor"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore a,
          sapiente asperiores, blanditiis esse explicabo vero non, voluptate rem
          necessitatibus eos repellat! Expedita vitae, quod sint officia nisi
          cupiditate. Totam?"
        image="./assets/code.jpg"
        code="npx install doc-havoc"
        darker
        reverse
      />
    </div>
  );
}
