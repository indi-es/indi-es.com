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

  try {
    const res = await fetch(url, {
      ...options,
    });
    const json = await res.json();
    return json;
  } catch (e) {
    console.error(e);
    return e;
  }
}
