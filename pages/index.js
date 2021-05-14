/* eslint filenames/match-exported: 0 */
import Link from 'next/link';

import { Page } from 'components/layouts';

import style from 'styles/home.module.css';

export default function Home() {
  return (
    <Page className={style.page} header={false}>
      <div className={`${style.wrapper}`}>
        <img className={style.logo} src="/icon.png" alt="INDI·ES" />
        <nav className={style.nav}>
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
              <Link href="/estudios">Estudios</Link>
            </li>
            <li>
              <Link href="/recursos">Recursos</Link>
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
    </Page>
  );
}
