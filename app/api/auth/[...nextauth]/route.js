// File: app/api/auth/[...nextauth]/route.js
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import axios from 'axios';

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      authorize: async (credentials) => {
        try {
          console.log("Credentials:", credentials); // Log kredensial yang digunakan

          const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
            email: credentials.email,
            password: credentials.password
          });

          // console.log("API Response:", response.data); // Log respons dari API

          if (response.data && response.data.token) {
            // console.log("Authorization successful:", response.data.user);
            return { id: response.data.user.id, name: response.data.user.name, email: response.data.user.email };
          }

          console.log("Authorization failed:", response.data); // Log ketika otorisasi gagal
          return null;
        } catch (error) {
          console.error("Error during login:", error);
          return null;
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      return session;
    }
  },
  pages: {
    signIn: '/login',
    error: '/auth/signin',
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
