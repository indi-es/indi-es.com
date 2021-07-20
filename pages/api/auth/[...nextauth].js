/* eslint filenames/match-regex: 0 */
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const secret = process.env.JWT_SECRET;
const signingKey = process.env.JWT_SIGNING_KEY;
const encryptionKey = process.env.JWT_ENCRYPTION_KEY;

export default NextAuth({
  jwt: {
    encryption: true,
    secret,
    signingKey,
    encryptionKey,
  },
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      scope: 'repo',
    }),
  ],
  pages: {
    signIn: '/entrar',
  },
  callbacks: {
    jwt: async (token, user, account) => {
      if (account?.accessToken) {
        return {
          ...token,
          accessToken: account.accessToken,
        };
      }

      return token;
    },
  },
});
