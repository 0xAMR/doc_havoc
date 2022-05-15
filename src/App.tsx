// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Overview from './components/Overview';

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero
        title="Doc Havoc is Here"
        subtitle="Lorem Ipsum Dolor Sit Amet"
        cta="Learn More"
      />
      <Overview />
    </div>
  );
}
