import Tooltip from 'components/tooltip';
import type { Studio } from 'types';

import style from './style.module.css';

type TrafficLightIndicatorProps = {
  data: Studio[];
};

function TrafficLightIndicator({ data }: TrafficLightIndicatorProps) {
  const healthyCount = data.filter((item) => item.error == null).length;
  const inactive = data
    .filter((item) => item.inactive === true)
    .map((item) => item.name);
  const warn = data
    .filter((item) => item.inactive === false && item.error != null)
    .map((item) => item.name);

  return (
    <div className={style['traffic-light-indicator']}>
      <Tooltip
        label={
          <div>
            Marcamos manualmente como inactivos.
            <ul>
              {inactive.map((item) => {
                return <li>{item}</li>;
              })}
            </ul>
          </div>
        }
      >
        <div className={style['indicator-wrapper']}>
          <span className={`${style.indicator}`} data-state="danger" />
          <span>{inactive.length}</span>
        </div>
      </Tooltip>
      <Tooltip
        label={
          <div>
            Su página web responde con errores.
            <ul>
              {warn.map((item) => {
                return <li>{item}</li>;
              })}
            </ul>
          </div>
        }
      >
        <a
          href="https://github.com/indi-es/estudios/blob/reachable-sites/errors.json"
          rel="noopener noreferrer"
          target="_blank"
          className={style['indicator-wrapper']}
        >
          <span className={`${style.indicator}`} data-state="warning" />
          <span>{warn.length}</span>
        </a>
      </Tooltip>
      <Tooltip label="Sin problemas.">
        <div className={style['indicator-wrapper']}>
          <span className={`${style.indicator}`} data-state="success" />
          <span>{healthyCount}</span>
        </div>
      </Tooltip>
      <Tooltip label={`${data.length} en total`}>
        <span>Estudios</span>
      </Tooltip>
    </div>
  );
}

export default TrafficLightIndicator;
