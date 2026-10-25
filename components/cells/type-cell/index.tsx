import style from './styles.module.css';

const options: Record<string, string> = {
  individual: 'Solo',
  studio: 'Estudio',
};

type TypeCellProps = {
  cell?: {
    value?: string | null;
  };
};

function TypeCell({ cell: { value } = { value: null } }: TypeCellProps) {
  if (!value) return null;

  const label = options[value];

  if (!label) return null;

  return <span className={style['type-cell']}>{label}</span>;
}

export default TypeCell;
