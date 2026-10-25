import Link from 'next/link';

import NavLink from 'components/nav-link';
import style from './style.module.css';

export default function Header() {
  return (
    <header id="header" className={style.header}>
      <div className={`${style.wrapper} wrapper`}>
        <Link href="/" className={style['logo-wrapper']}>
          <img
            className={`${style.logo} ${style['-light']}`}
            src="/icon.png"
            alt="INDI·ES"
          />
          <img
            className={`${style.logo} ${style['-dark']}`}
            src="/icon_inv.png"
            alt="INDI·ES"
          />
        </Link>
        <nav className={style['nav-container']}>
          <ul className={style['nav-routes']}>
            <li>
              <NavLink href="/discord" activeClassName="-active" exact>
                <a>Discord</a>
              </NavLink>
            </li>
            <li>
              <NavLink href="/estudios" activeClassName="-active" exact>
                <a>Estudios</a>
              </NavLink>
            </li>
            <li>
              <NavLink href="/juegos" activeClassName="-active" exact>
                <a>Juegos</a>
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
          </ul>
        </nav>
      </div>
    </header>
  );
}
