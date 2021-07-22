export async function createGHIssue({ values }) {
  const url = `/api/create-studio-issue`;
  const options = {
    credentials: 'same-origin',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ values }),
  };

  const data = await fetch(url, {
    ...options,
  });
  const json = await data.json();
  if (data.status >= 200 && data.status <= 299) {
    return json;
  }
  throw Error(`[${data.status}] ${data.statusText} ${JSON.stringify(json)}`);
}
