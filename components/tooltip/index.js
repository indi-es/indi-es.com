import PropTypes from 'prop-types';
import * as BaseTooltip from '@radix-ui/react-tooltip';

import styles from './style.module.css';

function Tooltip({ label, children }) {
  return (
    <BaseTooltip.Provider>
      <BaseTooltip.Root>
        <BaseTooltip.Trigger className={styles['tooltip-trigger']}>
          {children}
        </BaseTooltip.Trigger>
        <BaseTooltip.Portal>
          <BaseTooltip.Content className={styles['tooltip-content']}>
            <BaseTooltip.Arrow />
            {label}
          </BaseTooltip.Content>
        </BaseTooltip.Portal>
      </BaseTooltip.Root>
    </BaseTooltip.Provider>
  );
}

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
};

export default Tooltip;
