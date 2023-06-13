import PropTypes from 'prop-types';

import StudiosView from 'views/studios';

function Estudios({ data }) {
  return <StudiosView data={data} />;
}

async function getGithubFile(url) {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

function getError(item, errorsSet) {
  const error = errorsSet[item.website];
  if (error)
    return {
      message: `Mandamos un request a la página y nos regreso este error: ${error.message}`,
      date: error.date,
    };
  if (item.inactive)
    return {
      message: `Marcamos el estudio como inactivo porque lleva un rato sin funcionar su página web, si nos equivocamos puedes contactarnos en Discord o Github.`,
      date: item.last_time_active,
    };
  return undefined;
}

export async function getStaticProps() {
  const baseUrl = `https://raw.githubusercontent.com/indi-es/estudios`;
  const studiosData = await getGithubFile(`${baseUrl}/main/developers.json`);
  const errorsData = await getGithubFile(
    `${baseUrl}/reachable-sites/errors.json`
  );

  const errorsSet = errorsData.reduce((acc, curr) => {
    acc[curr.link] = {
      message: curr.error?.message,
      date: curr.date,
    };
    return acc;
  }, {});

  const data = studiosData.developers.map((studio) => {
    const error = getError(studio, errorsSet);
    return {
      ...studio,
      error: error || null,
    };
  });

  return {
    props: { data },
  };
}

Estudios.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    })
  ).isRequired,
};

export default Estudios;
