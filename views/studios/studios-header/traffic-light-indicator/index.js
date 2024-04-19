import PropTypes from 'prop-types';
import Tooltip from 'components/tooltip';

import style from './style.module.css';

const lf = new Intl.ListFormat('es-mx', { style: 'long' });

function TrafficLightIndicator({ data }) {
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
        label={`Marcamos manualmente como inactivos. ${lf.format(inactive)}`}
      >
        <div className={style['indicator-wrapper']}>
          <span className={`${style.indicator}`} data-state="danger" />
          <span>{inactive.length}</span>
        </div>
      </Tooltip>
      <Tooltip label={`Su página web responde con errores. ${lf.format(warn)}`}>
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

TrafficLightIndicator.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      error: PropTypes.shape({}),
    })
  ).isRequired,
};

export default TrafficLightIndicator;
