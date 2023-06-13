import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

import { Page } from 'components/layouts';

import GamesTable from 'containers/games-table';
import GamesStats from 'containers/games-stats';
import GamesHeader from './games-header';
import GamesNotes from './games-notes';

import style from './style.module.css';

function Games({ data }) {
  const router = useRouter();
  const { vista = 'tabla' } = router.query;
  const isTable = vista === 'tabla';
  const isStats = vista === 'estadisticas';

  return (
    <Page className={style.page}>
      <div className={`${style.wrapper} wrapper`}>
        <GamesNotes />
        <div className={style.content}>
          <GamesHeader isTable={isTable} isStats={isStats} data={data} />
          {isTable ? <GamesTable games={data} className={style.table} /> : null}
          {isStats ? <GamesStats games={data} className={style.stats} /> : null}
        </div>
      </div>
    </Page>
  );
}

Games.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    })
  ).isRequired,
};
export default Games;
