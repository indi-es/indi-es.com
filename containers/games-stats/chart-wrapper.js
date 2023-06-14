import PropTypes from 'prop-types';
import { FiDownload } from 'react-icons/fi';
import { saveAs } from 'file-saver';

import Button from 'components/button';

import styles from './styles.module.css';

function ChartWrapper({ id, children, ...rest }) {
  const saveChart = () => {
    const element = document.querySelector(`#${id} svg`);
    const elementString = element.outerHTML
      .replaceAll('var(--bg)', '#ffffff')
      .replaceAll('var(--fg)', '#000000')
      .replaceAll('var(--border)', '#333333');
    // .replaceAll('transparent', '');
    const blob = new Blob([`${elementString}`], {
      type: 'text/plain;charset=utf-8',
    });
    saveAs(blob, `${id}.svg`);
  };

  return (
    <article {...rest}>
      <div className={styles['chart-wrapper']} id={id}>
        {children}
      </div>
      <header className={styles['article-header']}>
        <Button onClick={saveChart}>
          Descargar <FiDownload />
        </Button>
      </header>
    </article>
  );
}

ChartWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
};

ChartWrapper.defaultProps = {};

export default ChartWrapper;
