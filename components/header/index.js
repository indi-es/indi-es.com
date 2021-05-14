import Link from 'next/link';

import NavLink from 'components/nav-link';
import style from './style.module.css';

export default function Header() {
  return (
    <header id="header" className={style.header}>
      <div className={`${style.wrapper} wrapper`}>
        <Link href="/">
          <a className={style['logo-wrapper']}>
            <img className={style.logo} src="/icon.png" alt="INDI·ES" />
          </a>
        </Link>
        <nav className={style['nav-container']}>
          <ul className={style['nav-routes']}>
            <li>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://discord.com/invite/Z9eyP8A"
              >
                Discord
              </a>
            </li>
            <li>
              <NavLink href="/estudios" activeClassName="-active" exact>
                <a>Estudios</a>
              </NavLink>
            </li>
            <li>
              <NavLink href="/recursos" activeClassName="-active" exact>
                <a>Recursos</a>
              </NavLink>
            </li>
            <li>
              <Link href="/newsletter">Newsletter</Link>
            </li>
            <li>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.joinclubhouse.com/club/indies"
              >
                Clubhouse
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
