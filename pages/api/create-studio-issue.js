import { getSession } from 'next-auth/react';
import { getToken } from 'next-auth/jwt';

const secret = process.env.NEXTAUTH_SECRET;

const repoOwner = 'indi-es';
const repoName = 'estudios';
const baseURL = `https://api.github.com`;
const url = `${baseURL}/repos/${repoOwner}/${repoName}/issues`;
const defaultValues = {
  country: 'México',
  tags: [],
  inactive: false,
};

export default async function createStudioIssue(req, res) {
  if (req.method !== 'POST') return res.status(405);

  const token = await getToken({ req, secret });
  const session = await getSession({ req });
  const { access_token: accessToken } = token;
  const {
    user: { name, email },
  } = session;
  const {
    body: { values },
  } = req;

  const issue = {
    title: `Nuevo estudio: ${values.name}`,
    body: `
## Gracias a: ${name}${email ? ` - ${email}` : ''}

\`\`\`json
${JSON.stringify(
  {
    ...values,
    ...defaultValues,
    last_time_active: new Date().toISOString(),
  },
  null,
  2
)}
\`\`\`
    `,
    assignee: null,
    milestone: null,
    labels: ['from-web'],
  };

  const options = {
    credentials: 'same-origin',
    method: 'POST',
    headers: {
      Accept: 'application/vnd.github.v3+json',
      Authorization: `token ${accessToken}`,
    },
    body: JSON.stringify({
      ...issue,
    }),
  };

  const data = await fetch(url, options);
  const json = await data.json();
  return res.status(data.status).json(json);
}
