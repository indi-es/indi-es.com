import { getNewsletterPagesFormated } from 'utils/newsletter';

import NewsletterView from 'views/newsletter';

async function Newsletter() {
  const items = await getNewsletterPagesFormated();
  return <NewsletterView items={items} />;
}

Newsletter.propTypes = {};

export default Newsletter;
