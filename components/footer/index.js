import {
  FiGithub,
  FiTwitter,
  FiMessageCircle,
  FiCalendar,
  FiMail,
} from 'react-icons/fi';
import NavLink from 'components/nav-link';

import style from './style.module.css';

export default function Footer() {
  return (
    <footer id="footer" className={style.footer}>
      <nav className={`${style['nav-wrapper']} wrapper`}>
        <ul className={style['nav-routes']}>
          <li>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/indi-es/indi-es.com/issues"
            >
              <span>Problemas con la página</span>
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
            <NavLink href="/eventos" activeClassName="-active" exact>
              <a>
                <span>Eventos pasados</span>
                <FiCalendar />
              </a>
            </NavLink>
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
              href="mailto:Hola@indi-es.com"
            >
              <span>Contacto</span>
              <FiMail />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
