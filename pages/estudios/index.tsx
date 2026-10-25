import StudiosView from 'views/studios';
import type { Studio } from 'types';
import { getStudios } from 'utils/studios';

type EstudiosProps = {
  data: Studio[];
};

function Estudios({ data }: EstudiosProps) {
  return <StudiosView data={data} vista="tabla" />;
}

export async function getStaticProps() {
  const data = await getStudios();
  return {
    props: { data },
  };
}

export default Estudios;
