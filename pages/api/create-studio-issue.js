import { getSession } from 'next-auth/client';
import jwt from 'next-auth/jwt';

const secret = process.env.JWT_SECRET;
const signingKey = process.env.JWT_SIGNING_KEY;
const encryptionKey = process.env.JWT_ENCRYPTION_KEY;

const repoOwner = 'indi-es';
const repoName = 'estudios';
const baseURL = `https://api.github.com`;
const url = `${baseURL}/repos/${repoOwner}/${repoName}/issues`;
const defaultValues = {
  country: 'México',
  tags: ['from-web'],
  inactive: false,
};

export default async function createStudioIssue(req, res) {
  if (req.method !== 'POST') return res.status(405);

  const token = await jwt.getToken({
    req,
    secret,
    signingKey,
    encryptionKey,
    encryption: true,
  });
  const session = await getSession({ req });
  const { accessToken } = token;
  const {
    user: { name, email },
  } = session;
  const {
    body: { values },
  } = req;

  const issue = {
    title: `Nuevo estudio: ${values.name}`,
    body: `
## Gracias a: ${name}${email ? ` - ${email}` : null}

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

  // console.log(options, url);
  // return res.status(200).json({ message: 'success' });
  const data = await fetch(url, {
    ...options,
  });
  const resCode = data.ok ? 200 : data.statusCode;
  const json = await data.json();
  return res.status(resCode).json(json);
}
