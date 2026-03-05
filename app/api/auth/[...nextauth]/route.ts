import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";

export const authOptions: NextAuthOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID!,
            clientSecret: process.env.GITHUB_SECRET!,
        }),

        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                const user = { id: "1", name: "John Smith", email: "john@example.com" };
                if (credentials?.username === user.name && credentials?.password === "password") {
                    return user;
                }
                return null;
            }
        }),
    ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };