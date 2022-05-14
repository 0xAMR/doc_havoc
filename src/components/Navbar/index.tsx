import './navbar.scss';
import Icon from './navbar.icons';

export default function Navbar() {
  return (
    <nav>
      <div className="nav__logo">
        <Icon icon="document" />
        <span>Doc Havoc</span>
      </div>
      <ul className="nav__links">
        <li className="nav__item">Docs</li>
        <li className="nav__item">Help</li>
        <li className="nav__item">GitHub</li>
      </ul>
    </nav>
  );
}
