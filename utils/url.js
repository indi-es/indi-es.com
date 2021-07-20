// https://github.com/jakeburden/next-absolute-url
export function getFullUrl(req) {
  const { url } = req;
  const { host } = req.headers;
  const protocol = /^localhost(:\d+)?$/.test(host) ? 'http' : 'https';
  return `${protocol}://${host}${url}`;
}
