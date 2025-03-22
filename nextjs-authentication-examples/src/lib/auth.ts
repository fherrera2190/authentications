import { findAllUsers } from "@/app/actions/user/findAll";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        let user = null;
        console.log(credentials);
        // logic to salt and hash password
        //const pwHash = saltAndHashPassword(credentials.password);

        // logic to verify if the user exists
        user = await findAllUsers();
        console.log(user.length);
        if (!user) {
          // No user found, so this is their first attempt to login
          // Optionally, this is also the place you could do a user registration
          throw new Error("Invalid credentials.");
        }

        // return user object with their profile data
        return {
          id: "499",
          name: "Jill Valentine",
          email: credentials.email,
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/African_Bush_Elephant.jpg/1200px-African_Bush_Elephant.jpg",
        };
      },
    }),
    Google,
    GitHub,
  ],
  callbacks: {
    // signIn(params) {
    //   console.log("Pase por aca");
    //   return true;
    // },
    // authorized(params) {
    //   console.log("jajaja", params.auth);
    //   return true;
    // },
    jwt({ token, user }) {
      if (user) {
        // User is available during sign-in
        token.id = user.id;
      }

      //console.log(">>>>>>>>>>token", token);
      return token;
    },
    session({ session, token }) {
      session.user.id = token.id;
      //console.log(">>>>>>>>>>>>>>>session", session);

      return session;
    },
  },
  pages: {
    signIn: "/auth/login",
    newUser: "/auth/register",
  },
});
