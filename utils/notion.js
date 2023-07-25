import { Client } from '@notionhq/client';

export const notion = new Client({
  auth: process.env.NOTION_SECRET,
});

export function getBlockText(block) {
  const { type } = block;
  if (type === 'unsupported') return null;

  const { text } = block[type];

  return text[0]?.plain_text;
}

export function getPageURL(team, id) {
  return `https://www.notion.so/indies/${id.replace(/[_-]/g, '')}`;
}

export function richTextToMarkdown(richText) {
  return richText.reduce((acc, curr) => {
    const { plain_text: text, annotations } = curr;
    const { bold, code, italic, strikethrough } = annotations;

    let parsed = text;

    if (italic) {
      parsed = `_${parsed}_`;
    }
    if (bold) {
      parsed = `**${parsed}**`;
    }
    if (code) {
      parsed = `\`${parsed}\``;
    }
    if (strikethrough) {
      parsed = `~~${parsed}~~`;
    }

    return `${acc}${parsed}`;
  }, '');
}

export function richTextBlockToMarkdown(prop) {
  const { type } = prop;
  if (type !== 'rich_text') {
    console.error(
      new Error(
        `Triying to convert non rich text db property to markdown: ${type}`
      )
    );
    return null;
  }

  return richTextToMarkdown(prop.rich_text);
}

export function parseEvents(events) {
  return events.map((event) => {
    const { properties } = event;
    const {
      Date: dateProp,
      Title: titleProp,
      Description: descriptionProp,
      Guest: guestProp,
      GuestURL: guestURLProp,
      GuestImage: guestImageProp,
      Channel: channelProp,
      Publish: publishProp,
    } = properties;
    const { date } = dateProp;

    const { start, end } = date;
    return {
      isPublished: publishProp.checkbox,
      title: titleProp.title[0].plain_text,
      description: richTextToMarkdown(descriptionProp),
      channel: richTextToMarkdown(channelProp),
      guest: {
        name: richTextToMarkdown(guestProp),
        url: guestURLProp.url,
        img: guestImageProp.url,
      },
      startDate: start,
      endDate: end,
    };
  });
}
