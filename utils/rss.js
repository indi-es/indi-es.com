import fs from 'fs';
import { Feed } from 'feed';

export function generateRssFeed({ items, name, title, description }) {
  const baseUrl = 'https://indi-es.com/';

  const author = {
    name: 'INDI·ES',
    email: 'hola@indi-es.com',
    link: 'https://indi-es.com/',
  };

  // Construct a new Feed object
  const feed = new Feed({
    title,
    description,
    id: name,
    link: baseUrl,
    language: 'es-mx',
    author,
    feedLinks: {
      rss2: `${baseUrl}/${name}.xml`,
      json: `${baseUrl}/${name}.json`,
      atom: `${baseUrl}/${name}.atom`,
    },
  });

  items.forEach((post) => {
    feed.addItem({
      title: post.title,
      id: post.url,
      link: post.url,
      description: post.description,
      content: post.content,
      author: [author],
      date: new Date(post.date),
      image: post.image,
    });
  });

  fs.writeFileSync(`public/${name}.xml`, feed.rss2());
  fs.writeFileSync(`public/${name}.json`, feed.json1());
  fs.writeFileSync(`public/${name}.atom`, feed.atom1());
}
