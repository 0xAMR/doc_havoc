// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero
        title="Doc Havoc is Here"
        subtitle="Lorem Ipsum Dolor Sit Amet"
        cta="Learn More"
      />
    </div>
  );
}
