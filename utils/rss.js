import fs from 'fs';
import { Feed } from 'feed';

export function generateRssFeed(items) {
  const baseUrl = 'https://indi-es.com/';

  const author = {
    name: 'INDI·ES',
    email: 'hola@indi-es.com',
    link: 'https://twitter.com/indi__es',
  };

  // Construct a new Feed object
  const feed = new Feed({
    title: 'Newsletter',
    description:
      'Bienvenidos al Newsletter de INDI.ES donde compartimos lo mejor de la semana de la industria de desarrollo de juegos en Español.',
    id: baseUrl,
    link: baseUrl,
    language: 'es-mx',
    feedLinks: {
      rss2: `${baseUrl}/rss.xml`,
    },
    author,
  });

  // Add each article to the feed

  items.forEach((post) => {
    const {
      content,
      fileName,
      meta: { date, description, title },
    } = post;

    const url = `${baseUrl}/${fileName}`;

    feed.addItem({
      title,
      id: url,
      link: url,
      description,
      content,
      author: [author],
      date: new Date(date),
    });
  });

  // Write the RSS output to a public file, making it

  // accessible at ashleemboyer.com/rss.xml

  fs.writeFileSync('public/rss.xml', feed.rss2());
}
