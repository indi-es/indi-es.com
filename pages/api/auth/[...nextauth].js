/* eslint filenames/match-regex: 0 */
import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';

const secret = process.env.NEXTAUTH_SECRET;
export const authOptions = {
  secret,
  jwt: {},
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      scope: 'user repo',
    }),
  ],
  pages: {
    signIn: '/entrar',
  },
  callbacks: {
    jwt: async ({ token, account }) => {
      if (account?.access_token) {
        return {
          ...token,
          access_token: account.access_token,
        };
      }

      return token;
    },
  },
};

export default NextAuth(authOptions);
