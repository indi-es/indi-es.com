export type GHIssue = {
  html_url?: string;
};

export async function createGHIssue({
  values,
}: {
  values: Record<string, unknown>;
}): Promise<GHIssue> {
  const url = `/api/create-studio-issue`;
  const options: RequestInit = {
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

export async function getGithubFile<T>(url: string): Promise<T> {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}
