import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { Magic } from "@magic-sdk/admin";
import { db } from "../../../firebase";
import { collection, query, where, getDocs, addDoc } from "firebase/firestore";

const magic = new Magic(process.env.MAGIC_SK);
const usersRef = collection(db, "users");

export default NextAuth({
  session: {
    jwt: true
  },
  pages: {
    // override signIn page so we can integrate with Magic
    signIn: "/auth/client-login"
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        // Call firebase to grab user information by their email
        const q = query(usersRef, where("email", "==", user.email));
        const querySnapshot = await getDocs(q);
        const userData = querySnapshot.docs[0]?.data();
        token.userData = userData;
        if (!userData) {
          // Create a new user in firebase
          await addDoc(collection(db, "users"), {
            email: user.email,
            onboarded: false
          });
          token.userData = {
            email: user.email,
            onboarded: false
          };
        }
      }

      return token;
    },
    async session({ session, token }) {
      session.userData = token.userData;
      return session;
    }
  },
  providers: [
    CredentialsProvider({
      name: "Magic Link",
      credentials: {
        didToken: { label: "DID Token", type: "text" }
      },
      async authorize({ didToken }, req) {
        // validate magic DID token
        magic.token.validate(didToken);

        // fetch user metadata
        const metadata = await magic.users.getMetadataByToken(didToken);

        // return user info
        return { ...metadata };
      }
    })
  ]
});
