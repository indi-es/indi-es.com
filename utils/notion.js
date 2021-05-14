export function getBlockText(block) {
  const { type } = block;
  if (type === 'unsupported') return null;

  const { text } = block[type];

  return text[0]?.plain_text;
}

export function getPageURL(team, id) {
  return `https://www.notion.so/indies/${id.replace(/[_-]/g, '')}`;
}
