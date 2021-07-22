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
import Markdown from 'components/markdown';

import UserCard from 'containers/user-card';
import { createGHIssue } from 'utils/github';

import StudiosAddFormResults from './studios-add-form-results';

import schema from './schema';

import styles from './style.module.css';

const prod = process.env.NODE_ENV === 'production';

const defaultValues = prod
  ? {
      name: '',
      country: 'México',
      city: '',
      state: '',
      website: '',
    }
  : {
      name: 'Probando',
      country: 'México',
      city: 'CDMX',
      state: 'CDMX',
      website: 'https://ellugar.co',
    };

function StudiosAddForm({ items, onSubmit }) {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm({ defaultValues, resolver: yupResolver(schema) });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmitForm = async (values) => {
    setIsSubmitting(true);
    try {
      const res = await createGHIssue({ values });
      onSubmit({ res, values });
    } catch (e) {
      console.error(e);
      setIsSubmitting(false);
      setError('server', {
        type: 'server',
        message: e.message,
      });
    }

    // setIsSubmitting(false);
  };
  const name = watch('name');
  const serverError = errors.server
    ? `
Algo salió mal, manda un mensaje en el canal de **#www** con un screenshot de esta pantalla en Discord.

\`${errors.server.message}\`
`
    : null;

  return (
    <div className={`${styles['studios-add-form-wrapper']}`}>
      <UserCard />
      <form
        className={styles['studios-add-form']}
        onSubmit={handleSubmit(handleSubmitForm)}
      >
        {serverError ? (
          <ErrorMessage className={styles['studios-add-form-server-error']}>
            <Markdown className={styles['studios-add-form-server-message']}>
              {serverError}
            </Markdown>
          </ErrorMessage>
        ) : null}
        <div className={styles['label-wrapper']}>
          <label htmlFor="name">
            Nombre del estudio <strong>*</strong>
          </label>
          {errors.name?.type === 'required' && (
            <ErrorMessage>Campo requerido</ErrorMessage>
          )}
        </div>
        <input
          placeholder="Super Juegos..."
          autoComplete="off"
          {...register('name')}
        />
        <div className={styles['label-wrapper']}>
          <label htmlFor="country">
            País<strong>*</strong>
          </label>
          {errors.country?.type === 'required' && (
            <ErrorMessage>Campo requerido</ErrorMessage>
          )}
        </div>
        <input
          placeholder="México"
          autoComplete="off"
          {...register('country')}
        />

        <div className={styles['studios-add-form-where']}>
          <div className={styles['input-wrapper']}>
            <div className={styles['label-wrapper']}>
              <label htmlFor="city">
                Ciudad <strong>*</strong>
              </label>
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
              <label htmlFor="state">
                Estado <strong>*</strong>
              </label>
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
          <label htmlFor="website">
            Página Web <strong>*</strong>
          </label>
          {errors.web?.type === 'required' && (
            <ErrorMessage>Campo requerido</ErrorMessage>
          )}
          {errors.web?.type === 'url' && (
            <ErrorMessage>Url inválido</ErrorMessage>
          )}
        </div>
        <input
          placeholder="https://superjuegos.com"
          type="url"
          {...register('website')}
        />

        <div className={styles['label-wrapper']}>
          <label htmlFor="twitter">Twitter</label>
          {errors.twitter?.type === 'url' && (
            <ErrorMessage>Url inválido</ErrorMessage>
          )}
        </div>
        <input
          placeholder="https://twitter.com/superjuegos"
          type="url"
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
          type="url"
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
          type="url"
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
