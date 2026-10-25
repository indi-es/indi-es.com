import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { FiDownload } from 'react-icons/fi';
import { saveAs } from 'file-saver';

import Button from 'components/button';

import styles from './styles.module.css';

type ChartWrapperProps = ComponentPropsWithoutRef<'article'> & {
  id: string;
  children: ReactNode;
};

function ChartWrapper({ id, children, ...rest }: ChartWrapperProps) {
  const saveChart = () => {
    const element = document.querySelector(`#${id} svg`);
    if (!element) return;
    const elementString = element.outerHTML
      .replaceAll('var(--bg)', '#ffffff')
      .replaceAll('var(--fg)', '#000000')
      .replaceAll('var(--border)', '#333333')
      .replaceAll('transparent', 'rgba(0, 0, 0, )');
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

export default ChartWrapper;
