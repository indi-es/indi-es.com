import { Client } from '@notionhq/client';
import type {
  PageObjectResponse,
  RichTextItemResponse,
} from '@notionhq/client/build/src/api-endpoints';

type PageProperty = PageObjectResponse['properties'][string];

export const notion = new Client({
  auth: process.env.NOTION_SECRET,
});

export function getPageURL(team: string, id: string) {
  return `https://${team}.notion.site/${id.replace(/[_-]/g, '')}`;
}

export function richTextToMarkdown(richText: RichTextItemResponse[]) {
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

export function richTextBlockToMarkdown(prop: PageProperty) {
  const { type } = prop;
  if (prop.type !== 'rich_text') {
    console.error(
      new Error(
        `Triying to convert non rich text db property to markdown: ${type}`
      )
    );
    return null;
  }

  return richTextToMarkdown(prop.rich_text);
}
