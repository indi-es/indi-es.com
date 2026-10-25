import type { GetStaticPaths, GetStaticProps } from 'next';

import StudiosView, { type StudiosVista } from 'views/studios';
import type { Studio } from 'types';
import { getStudios } from 'utils/studios';

type EstudiosVistaProps = {
  data: Studio[];
  vista: StudiosVista;
};

function EstudiosVista({ data, vista }: EstudiosVistaProps) {
  return <StudiosView data={data} vista={vista} />;
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [{ params: { vista: 'mapa' } }, { params: { vista: 'estadisticas' } }],
  fallback: false,
});

export const getStaticProps: GetStaticProps<EstudiosVistaProps> = async ({
  params,
}) => {
  const data = await getStudios();
  return {
    props: { data, vista: params?.vista as StudiosVista },
  };
};

export default EstudiosVista;
