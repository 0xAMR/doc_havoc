// Styling
import './navbar.scss';

// Components
import Icon from './navbar.icons';

// Router
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <div className="nav__logo">
        <Link to="/">
          <Icon icon="document" />
          Doc Havoc
        </Link>
      </div>
      <ul className="nav__links">
        <li className="nav__item">
          <Link to="docs">Docs</Link>
        </li>
        <li className="nav__item">Help</li>
        <li className="nav__item">GitHub</li>
      </ul>
    </nav>
  );
}
