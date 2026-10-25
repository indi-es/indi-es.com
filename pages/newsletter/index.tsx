import { getNewsletterPagesFormated } from 'utils/newsletter';

import NewsletterView from 'views/newsletter';
import type { NewsletterProps } from 'views/newsletter';

function Newsletter(props: NewsletterProps) {
  return <NewsletterView {...props} />;
}

export async function getStaticProps() {
  const items = await getNewsletterPagesFormated();

  return {
    props: { items },
  };
}

export default Newsletter;
