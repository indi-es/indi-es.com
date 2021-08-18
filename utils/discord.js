export async function fetchDiscordWidget() {
  const url = 'https://discord.com/api/guilds/323937940462108672/widget.json';
  const res = await fetch(url);
  return res.json();
}
