import type { MouseEvent, SubmitEvent } from 'react';
import { useRouter } from 'next/router';
import { FiSearch, FiX } from 'react-icons/fi';

import Button from 'components/button';
import Time from 'components/time';
import { gameFilterKeys } from 'utils/games';
import type {
  GameFilterOptions,
  GameFilters,
  GameSelectKey,
} from 'utils/games';

import style from './styles.module.css';

type GamesFiltersProps = {
  filters: GameFilters;
  options: GameFilterOptions;
  pathname: string;
};

const textFields: { key: keyof GameFilters; label: string }[] = [
  { key: 'name', label: 'Nombre' },
  { key: 'genre', label: 'Género' },
  { key: 'developers', label: 'Desarrolladores' },
  { key: 'publishers', label: 'Publisher' },
];

const selectFields: { key: GameSelectKey; label: string }[] = [
  { key: 'engine', label: 'Engine' },
  { key: 'status', label: 'Estado' },
  { key: 'crowdfunding', label: 'Crowdfunding' },
  { key: 'platforms', label: 'Plataformas' },
];

const summaryFields: typeof textFields = [...textFields, ...selectFields];

function GamesFilters({ filters, options, pathname }: GamesFiltersProps) {
  const router = useRouter();
  const hasFilters = Object.keys(filters).length > 0;

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const query = gameFilterKeys.reduce<GameFilters>((acc, key) => {
      const value = formData.get(key)?.toString().trim();
      if (value) acc[key] = value;
      return acc;
    }, {});

    router.push({ pathname, query }, undefined, {
      shallow: true,
      scroll: false,
    });
  };

  const handleClear = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    router.push({ pathname }, undefined, { shallow: true, scroll: false });
  };

  const appliedText = summaryFields.filter(({ key }) => filters[key]);

  return (
    <details className={style.filters}>
      <summary className={style.summary}>
        <span>Filtros</span>
        {hasFilters ? (
          <ul className={style.applied}>
            {appliedText.map(({ key, label }) => (
              <li key={key}>
                {label}: <strong>{filters[key]}</strong>
              </li>
            ))}
            {filters.from || filters.to ? (
              <li>
                Fecha de lanzamiento:{' '}
                <strong>
                  {filters.from ? <Time>{filters.from}</Time> : '…'} –{' '}
                  {filters.to ? <Time>{filters.to}</Time> : '…'}
                </strong>
              </li>
            ) : null}
          </ul>
        ) : null}
        {hasFilters ? (
          <Button href={pathname} className={style.clear} onClick={handleClear}>
            <span>Limpiar</span>
            <FiX />
          </Button>
        ) : null}
      </summary>
      <form
        key={JSON.stringify(filters)}
        className={style.form}
        action={pathname}
        method="get"
        onSubmit={handleSubmit}
      >
        {textFields.map(({ key, label }) => (
          <div key={key} className={style.field}>
            <label htmlFor={`filter-${key}`}>{label}</label>
            <input
              id={`filter-${key}`}
              name={key}
              type="text"
              autoComplete="off"
              defaultValue={filters[key]}
            />
          </div>
        ))}

        {selectFields.map(({ key, label }) => (
          <div key={key} className={style.field}>
            <label htmlFor={`filter-${key}`}>{label}</label>
            <select
              id={`filter-${key}`}
              name={key}
              defaultValue={filters[key] ?? ''}
            >
              <option value="">Todos</option>
              {options[key].map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        ))}

        <fieldset className={style.range}>
          <legend>Fecha de lanzamiento</legend>
          <div className={style.field}>
            <label htmlFor="filter-from">Desde</label>
            <input
              id="filter-from"
              name="from"
              type="date"
              defaultValue={filters.from}
            />
          </div>
          <div className={style.field}>
            <label htmlFor="filter-to">Hasta</label>
            <input
              id="filter-to"
              name="to"
              type="date"
              defaultValue={filters.to}
            />
          </div>
        </fieldset>

        <div className={style.actions}>
          <Button type="submit">
            <span>Filtrar</span>
            <FiSearch />
          </Button>
        </div>
      </form>
    </details>
  );
}

export default GamesFilters;
