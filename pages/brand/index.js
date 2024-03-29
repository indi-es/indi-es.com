import classNames from 'classnames';

import { Page } from 'components/layouts';
import { FiDownload } from 'react-icons/fi';

import style from './style.module.css';

const logos = [
  {
    name: 'Logo [png]',
    description: 'Para fondos claros',
    src: '/img/icon.png',
    theme: 'light',
  },
  {
    name: 'Logo invertido [png]',
    description: 'Para fondos oscuros',
    src: '/img/icon_inv.png',
    theme: 'dark',
  },
  {
    name: 'Bot [png]',
    description: 'Para cuando se necesita una mascota',
    src: '/img/bot.png',
    theme: 'light',
  },
];

const emojis = [
  {
    name: 'Amigo',
    src: '/emojis/amigo.png',
    description: 'hecho por @vala_ill',
    theme: 'light',
  },
  {
    name: 'Artista',
    src: '/emojis/artista.png',
    description: 'hecho por @vala_ill',
    theme: 'light',
  },
  {
    name: 'Audio',
    src: '/emojis/audio.png',
    description: 'hecho por @vala_ill',
    theme: 'light',
  },
  {
    name: 'Bateria',
    src: '/emojis/bateria.png',
    description: 'hecho por @vala_ill',
    theme: 'light',
  },
  {
    name: 'Corazon',
    src: '/emojis/corazon.png',
    description: 'hecho por @vala_ill',
    theme: 'light',
  },
  {
    name: 'Diseñador',
    src: '/emojis/diseñador.png',
    description: 'hecho por @vala_ill',
    theme: 'light',
  },
  {
    name: 'Duda',
    src: '/emojis/duda.png',
    description: 'hecho por @vala_ill',
    theme: 'light',
  },
  {
    name: 'Escritor',
    src: '/emojis/escritor.png',
    description: 'hecho por @vala_ill',
    theme: 'light',
  },
  {
    name: 'Estrella',
    src: '/emojis/estrella.png',
    description: 'hecho por @vala_ill',
    theme: 'light',
  },
  {
    name: 'Hola',
    src: '/emojis/hola.png',
    description: 'hecho por @vala_ill',
    theme: 'light',
  },
  {
    name: 'Manager',
    src: '/emojis/manager.png',
    description: 'hecho por @vala_ill',
    theme: 'light',
  },
  {
    name: 'Marketing',
    src: '/emojis/marketing.png',
    description: 'hecho por @vala_ill',
    theme: 'light',
  },
  {
    name: 'Negocios',
    src: '/emojis/negocios.png',
    description: 'hecho por @vala_ill',
    theme: 'light',
  },
  {
    name: 'Ojos',
    src: '/emojis/ojos.png',
    description: 'hecho por @vala_ill',
    theme: 'light',
  },
  {
    name: 'Pena',
    src: '/emojis/pena.png',
    description: 'hecho por @vala_ill',
    theme: 'light',
  },
  {
    name: 'Orgulloso',
    src: '/emojis/orgulloso.png',
    description: 'hecho por @canana_man',
    theme: 'light',
  },
  {
    name: 'Principiante',
    src: '/emojis/principiante.png',
    description: 'hecho por @vala_ill',
    theme: 'light',
  },
  {
    name: 'Pensativo',
    src: '/emojis/pensativo.png',
    description: 'hecho por @canana_man',
    theme: 'light',
  },
  {
    name: 'Programador',
    src: '/emojis/programador.png',
    description: 'hecho por @vala_ill',
    theme: 'light',
  },
  {
    name: 'Pulgar',
    src: '/emojis/pulgar.png',
    description: 'hecho por @vala_ill',
    theme: 'light',
  },
  {
    name: 'Risa',
    src: '/emojis/risa.png',
    description: 'hecho por @vala_ill',
    theme: 'light',
  },
  {
    name: 'Relaciones Públicas',
    src: '/emojis/rp.png',
    description: 'hecho por @vala_ill',
    theme: 'light',
  },
  {
    name: 'Sonrisa',
    src: '/emojis/sonrisa.png',
    description: 'hecho por @vala_ill',
    theme: 'light',
  },
  {
    name: 'Sorpresa',
    src: '/emojis/sorpresa.png',
    description: 'hecho por @vala_ill',
    theme: 'light',
  },
];

function Brand() {
  const customClassName = classNames(style.page, {});

  return (
    <Page className={customClassName}>
      <div className={`${style['brand-wrapper']} wrapper`}>
        <header>
          <h1>Logos</h1>
        </header>
        <div className={style['resources-grid']}>
          {logos.map(({ name, src, description, theme }) => {
            return (
              <figure data-theme={theme}>
                <div className={style['resource-img-wrapper']}>
                  <img src={src} alt={name} />
                </div>
                <figcaption>
                  <a href={src} download>
                    <div>
                      <span>{name}</span>
                      {description ? <span>{description}</span> : null}
                    </div>
                    <FiDownload />
                  </a>
                </figcaption>
              </figure>
            );
          })}
        </div>
        <header>
          <h1>Emojis</h1>
        </header>
        <div className={style['resources-grid']} data-resource="emoji">
          {emojis.map(({ name, src, description, theme }) => {
            return (
              <figure data-theme={theme}>
                <div className={style['resource-img-wrapper']}>
                  <img src={src} alt={name} />
                </div>
                <figcaption>
                  <a href={src} download>
                    <div>
                      <span>{name}</span>
                      {description ? <span>{description}</span> : null}
                    </div>
                    <FiDownload />
                  </a>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </Page>
  );
}

export default Brand;
