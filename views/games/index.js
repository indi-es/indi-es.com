import PropTypes from 'prop-types';

import { Page } from 'components/layouts';

import GamesTable from 'containers/games-table';

import style from './style.module.css';

function Games({ data }) {
  return (
    <Page className={style.page}>
      <div className={`${style.wrapper} wrapper`}>
        <div className={style.content}>
          <GamesTable studios={data} className={style.table} />
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
