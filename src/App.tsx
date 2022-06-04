// Router
import { Routes, Route } from 'react-router-dom';

//Pages
import Home from './pages/Home';
import Docs from './pages/Docs';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="docs" element={<Docs />} />
      </Routes>
      <Footer />
    </div>
  );
}
