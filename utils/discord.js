const API_URL = process.env.DISCORD_API_URL;
const GUILD_ID = process.env.DISCORD_GUILD_ID;
const BOT_TOKEN = process.env.DISCORD_BOT_TOKEN;

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export async function fetchDiscordWidget() {
  const url = `${API_URL}/guilds/${GUILD_ID}/widget.json`;
  const res = await fetch(url);
  return res.json();
}

export async function fetchChannel(id) {
  const url = `${API_URL}/channels/${id}`;
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'User-Agent': 'DiscordBot ($url, $versionNumber)',
      Authorization: `Bot ${BOT_TOKEN}`,
    },
  };
  const res = await fetch(url, options);
  const data = await res.json();
  return data;
}

export async function fetchDiscordEvents() {
  const url = `${API_URL}/guilds/${GUILD_ID}/scheduled-events?with_user_count=true`;
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'User-Agent': 'DiscordBot ($url, $versionNumber)',
      Authorization: `Bot ${BOT_TOKEN}`,
    },
  };

  const res = await fetch(url, options);
  const data = await res.json();

  switch (res.status) {
    case 200:
      return data;
    case 429:
      console.info(
        `Waiting for ${data.retry_after}s to make another discord request`
      );
      await sleep(data.retry_after + 1);
      return fetchDiscordEvents();
    default:
      console.error(
        `Request failed with stauts code ${res.status}: ${res.statusText}`
      );
      return [];
  }
}

export async function fetchDiscordEventsWithChannelName() {
  const data = await fetchDiscordEvents();

  const events = await Promise.all(
    data.map(async (event) => {
      const { channel_id: channelId } = event;
      const channel = await fetchChannel(channelId);
      return { ...event, channel };
    })
  );

  return events;
}
