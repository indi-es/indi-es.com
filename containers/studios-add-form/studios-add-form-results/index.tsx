// import { FiEdit } from 'react-icons/fi';

// import Button from 'components/button';
import type { Studio } from 'types';

import styles from './style.module.css';

type StudioResult = Pick<Studio, 'name'>;

function isSimilar(a: string, b: string) {
  return a.normalize().toLowerCase().includes(b.normalize().toLowerCase());
}

function getResults(name: string, items: StudioResult[]) {
  if (!name) return [];
  if (name === '') return [];
  if (name.length < 2) return [];
  return items.filter((item) => isSimilar(item.name, name)).splice(0, 3);
}

type StudiosAddFormResultsProps = {
  name?: string;
  items: StudioResult[];
};

function StudiosAddFormResults({
  name = '',
  items,
}: StudiosAddFormResultsProps) {
  const results = getResults(name, items);
  if (results.length === 0) return null;

  return (
    <section className={styles['studios-add-form-results-wrapper']}>
      <p className={styles['studios-add-form-results-message']}>
        Asegurate de no intentar agregar un estudio que ya existe en la base de
        datos.
      </p>
      <ul className={styles['studios-add-form-results']}>
        {results.map((item) => {
          return (
            <li key={item.name}>
              <span>{item.name}</span>
              {/* <Button href={`/studios/editar/${item.name}`}> */}
              {/*   <span>Editar</span> */}
              {/*   <FiEdit /> */}
              {/* </Button> */}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default StudiosAddFormResults;
