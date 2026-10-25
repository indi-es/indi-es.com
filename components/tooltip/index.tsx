import type { ReactNode } from 'react';
import * as BaseTooltip from '@radix-ui/react-tooltip';

import styles from './style.module.css';

type TooltipProps = {
  children: ReactNode;
  label: ReactNode;
};

function Tooltip({ label, children }: TooltipProps) {
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

export default Tooltip;
