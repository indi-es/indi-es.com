import { FiGithub, FiTwitter, FiMessageCircle } from 'react-icons/fi';

import style from './style.module.css';

export default function Footer() {
  return (
    <footer id="footer" className={style.footer}>
      <nav className={`${style['nav-container']} wrapper`}>
        <ul className={style['nav-routes']}>
          <li>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://twitter.com/indi__es"
            >
              <span>@indi__es</span>
              <FiTwitter />
            </a>
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/indi-es/indi-es.com/issues"
            >
              <span>Problemas en la página</span>
              <FiGithub />
            </a>
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/indi-es/estudios"
            >
              <span>Agrega/Edita estudios</span>
              <FiGithub />
            </a>
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.joinclubhouse.com/club/indies"
            >
              <span>Clubhouse</span>
              <FiMessageCircle />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
