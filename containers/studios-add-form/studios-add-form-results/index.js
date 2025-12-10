import PropTypes from 'prop-types';
// import { FiEdit } from 'react-icons/fi';

// import Button from 'components/button';

import styles from './style.module.css';

function isSimilar(a, b) {
  return a.normalize().toLowerCase().includes(b.normalize().toLowerCase());
}

function getResults(name, items) {
  if (!name) return [];
  if (name === '') return [];
  if (name.length < 2) return [];
  return items.filter((item) => isSimilar(item.name, name)).splice(0, 3);
}

function StudiosAddFormResults({ name = '', items }) {
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

StudiosAddFormResults.propTypes = {
  name: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    })
  ).isRequired,
};

export default StudiosAddFormResults;
