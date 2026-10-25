import type { InferGetStaticPropsType } from 'next';

import { createDiscordInvite, fetchDiscordWidget } from 'utils/discord';

import { Page } from 'components/layouts';
import DiscordWidget from 'components/discord-widget';

import style from './style.module.css';

export default function Discord({
  data,
  invite,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Page className={style.page}>
      <div className={`${style['discord-wrapper']} wrapper`}>
        {data ? <DiscordWidget {...data} invite={invite} /> : null}
      </div>
    </Page>
  );
}

export async function getStaticProps() {
  const data = await fetchDiscordWidget();
  const invite = await createDiscordInvite();

  return {
    props: { data, invite },
  };
}
