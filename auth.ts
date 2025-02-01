import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { client } from "./sanity/lib/client";
import { QUERY_AUTHOR_BY_GITHUB_ID } from "./sanity/lib/queries";
import { writeClient } from "./sanity/lib/write-client";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [GitHub],

  callbacks: {
    async signIn({
      user: { name, image, email },
      profile: { id, login, bio },
    }) {
      const existingUser = await client
        .withConfig({ useCdn: false })
        .fetch(QUERY_AUTHOR_BY_GITHUB_ID, {
          id,
        });

      if (!existingUser) {
        await writeClient.create({
          _type: "author",
          id,
          name,
          username: login,
          avatarURL: image,
          email,
          bio: bio || "",
        });
      }

      return true;
    },

    async jwt({ token, account, profile }) {
      if (account && profile) {
        const user = await client
          .withConfig({ useCdn: false })
          .fetch(QUERY_AUTHOR_BY_GITHUB_ID, {
            id: profile?.id,
          });

        token.id = user?._id;
      }

      return token;
    },

    async session({ token, session }) {
      Object.assign(session, { id: token.id });

      return session;
    },
  },
});
