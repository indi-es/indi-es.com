import StudiosView from 'views/studios';
import type { Studio, StudioError } from 'types';

type EstudiosProps = {
  data: Studio[];
};

type ReachableError = {
  link: string;
  date: string;
  error?: { message?: string };
};

function Estudios({ data }: EstudiosProps) {
  return <StudiosView data={data} />;
}

async function getGithubFile<T>(url: string): Promise<T> {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

function getError(
  item: Studio,
  errorsSet: Record<string, Partial<StudioError>>
) {
  const error = errorsSet[item.website as string];
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
  const studiosData = await getGithubFile<{ developers: Studio[] }>(
    `${baseUrl}/main/developers.json`
  );
  const errorsData = await getGithubFile<ReachableError[]>(
    `${baseUrl}/reachable-sites/errors.json`
  );

  const errorsSet = errorsData.reduce<Record<string, Partial<StudioError>>>(
    (acc, curr) => {
      acc[curr.link] = {
        message: curr.error?.message,
        date: curr.date,
      };
      return acc;
    },
    {}
  );

  const data = studiosData.developers.map((studio) => {
    const error = getError(studio, errorsSet);
    return {
      ...studio,
      error: (error as StudioError) || null,
    };
  });

  return {
    props: { data },
  };
}

export default Estudios;
