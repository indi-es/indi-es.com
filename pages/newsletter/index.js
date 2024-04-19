import { getNewsletterPagesFormated } from 'utils/newsletter';

import NewsletterView from 'views/newsletter';

function Newsletter(props) {
  return <NewsletterView {...props} />;
}

export async function getStaticProps() {
  const items = await getNewsletterPagesFormated();

  return {
    props: { items },
  };
}

Newsletter.propTypes = {};

export default Newsletter;
