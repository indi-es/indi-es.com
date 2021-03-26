import React from 'react';
import Link from 'next/link';

import NavLink from 'components/nav-link';
import style from './style.module.css';

export default function Header() {
  return (
    <header id="header" className={style.header}>
      <div className={`${style.wrapper}`}>
        <Link href="/">
          <a>
            <img className={style.logo} src="/icon.png" alt="INDI·ES" />
          </a>
        </Link>
        <nav className={style['nav-container']}>
          <ul className={style['nav-routes']}>
            <li>
              <NavLink href="/discord" activeClassName="-active">
                <a>Discord</a>
              </NavLink>
            </li>
            <li>
              <NavLink href="/estudios" activeClassName="-active">
                <a>Estudios</a>
              </NavLink>
            </li>
            <li>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.notion.so/indies/820b50fe5398486cbd062603c3f4529b?v=17f8d19621604b75bb1845f420b213db"
              >
                Newsletter
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
