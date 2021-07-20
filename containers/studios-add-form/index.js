import { useState } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FiPlusCircle } from 'react-icons/fi';

import DatalistCities from 'components/datalist-cities';
import DatalistStates from 'components/datalist-states';
import ErrorMessage from 'components/error-message';
import Button from 'components/button';
import Spinner from 'components/spinner';

import UserCard from 'containers/user-card';
import { createGHIssue } from 'utils/github';

import StudiosAddFormResults from './studios-add-form-results';

import schema from './schema';

import styles from './style.module.css';

const defaultValues = {
  name: 'Super juegos',
  city: 'CDMX',
  state: 'CDMX',
  web: 'https://ellugar.co',
};

// const defaultValues = {
//   name: '',
//   city: '',
//   state: '',
//   web: '',
// };

function StudiosAddForm({ items, onSubmit }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ defaultValues, resolver: yupResolver(schema) });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmitForm = async (values) => {
    setIsSubmitting(true);
    const res = await createGHIssue({ values });
    onSubmit({ res, values });
    // setIsSubmitting(false);
  };
  const name = watch('name');

  return (
    <div className={`${styles['studios-add-form-wrapper']}`}>
      <UserCard />
      <form
        className={styles['studios-add-form']}
        onSubmit={handleSubmit(handleSubmitForm)}
      >
        <div className={styles['label-wrapper']}>
          <label htmlFor="name">Nombre del estudio *</label>
          {errors.name?.type === 'required' && (
            <ErrorMessage>Campo requerido</ErrorMessage>
          )}
        </div>
        <input
          placeholder="Super Juegos..."
          autoComplete="off"
          {...register('name')}
        />

        <div className={styles['studios-add-form-where']}>
          <div className={styles['input-wrapper']}>
            <div className={styles['label-wrapper']}>
              <label htmlFor="city">Ciudad *</label>
              {errors.city?.type === 'required' && (
                <ErrorMessage>Campo requerido</ErrorMessage>
              )}
            </div>
            <input
              list="city-list"
              placeholder="Mi ciudad"
              autoComplete="off"
              {...register('city')}
            />
            <DatalistCities id="city-list" />
          </div>

          <div className={styles['input-wrapper']}>
            <div className={styles['label-wrapper']}>
              <label htmlFor="state">Estado *</label>
              {errors.state?.type === 'required' && (
                <ErrorMessage>Campo requerido</ErrorMessage>
              )}
            </div>
            <input
              list="state-list"
              placeholder="Mi estado"
              autoComplete="off"
              {...register('state')}
            />
            <DatalistStates id="state-list" />
          </div>
        </div>

        <div className={styles['label-wrapper']}>
          <label htmlFor="web">Página Web *</label>
          {errors.web?.type === 'required' && (
            <ErrorMessage>Campo requerido</ErrorMessage>
          )}
          {errors.web?.type === 'url' && (
            <ErrorMessage>Url inválido</ErrorMessage>
          )}
        </div>
        <input placeholder="https://superjuegos.com" {...register('web')} />

        <div className={styles['label-wrapper']}>
          <label htmlFor="twitter">Twitter</label>
          {errors.twitter?.type === 'url' && (
            <ErrorMessage>Url inválido</ErrorMessage>
          )}
        </div>
        <input
          placeholder="https://twitter.com/superjuegos"
          autoComplete="off"
          {...register('twitter')}
        />

        <div className={styles['label-wrapper']}>
          <label htmlFor="facebook">Facebook</label>
          {errors.facebook?.type === 'url' && (
            <ErrorMessage>Url inválido</ErrorMessage>
          )}
        </div>
        <input
          placeholder="https://facebook.com/superjuegos"
          autoComplete="off"
          {...register('facebook')}
        />

        <div className={styles['label-wrapper']}>
          <label htmlFor="instagram">Instagram</label>
          {errors.instagram?.type === 'url' && (
            <ErrorMessage>Url inválido</ErrorMessage>
          )}
        </div>
        <input
          placeholder="https://instagram.com/superjuegos"
          autoComplete="off"
          {...register('instagram')}
        />

        <Button
          type="submit"
          className={styles['studios-add-form-submit']}
          disabled={isSubmitting}
        >
          {isSubmitting ? <span>Mandando</span> : <span>Nuevo estudio</span>}
          {isSubmitting ? <Spinner /> : <FiPlusCircle />}
        </Button>
      </form>
      <StudiosAddFormResults items={items} name={name} />
    </div>
  );
}

StudiosAddForm.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    })
  ).isRequired,
  onSubmit: PropTypes.func,
};

StudiosAddForm.defaultProps = {
  onSubmit: () => {},
};

export default StudiosAddForm;
