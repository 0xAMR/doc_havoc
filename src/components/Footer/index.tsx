// Styling
import './footer.scss';

export default function Footer() {
  return (
    <footer>
      <div className="footer__container">
        <div className="footer__links">
          <ul>
            <h3>Title I</h3>
            <li>
              <a href="/">Link A</a>
            </li>
            <li>
              <a href="/">Link B</a>
            </li>
            <li>
              <a href="/">Link C</a>
            </li>
          </ul>
          <ul>
            <h3>Title II</h3>
            <li>
              <a href="/">Link A</a>
            </li>
            <li>
              <a href="/">Link B</a>
            </li>
            <li>
              <a href="/">Link C</a>
            </li>
          </ul>
          <ul>
            <h3>Title III</h3>
            <li>
              <a href="/">Link A</a>
            </li>
            <li>
              <a href="/">Link B</a>
            </li>
            <li>
              <a href="/">Link C</a>
            </li>
          </ul>
        </div>

        <div className="footer__copyright">
          <span>© Author Name 2022</span>
        </div>
      </div>
    </footer>
  );
}
