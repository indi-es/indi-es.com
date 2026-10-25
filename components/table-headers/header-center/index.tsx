import style from './style.module.css';

type HeaderCenterProps = {
  label?: string;
};

function HeaderCenter({ label }: HeaderCenterProps) {
  return <span className={style['table-header-center']}>{label}</span>;
}

export default HeaderCenter;
