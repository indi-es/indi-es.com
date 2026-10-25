/* eslint filenames/match-regex: 0 */
import NextAuth from 'next-auth';
import type { NextAuthOptions } from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';

const secret = process.env.NEXTAUTH_SECRET;
export const authOptions: NextAuthOptions = {
  secret,
  jwt: {},
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
      // TODO: `scope` is not a next-auth v4 provider option, so it is ignored;
      // it should probably be `authorization: { params: { scope } }`.
      // @ts-expect-error -- kept as-is to avoid changing the OAuth scopes
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
