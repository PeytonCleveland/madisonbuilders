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
    async session({ session }) {
      if (session.user) {
        const q = query(
          usersRef,
          where("email", "==", session.user.email?.toLowerCase())
        );
        const querySnapshot = await getDocs(q);
        const userData = querySnapshot.docs[0]?.data();
        session.userData = userData;
        if (!userData) {
          // Create a new user in firebase
          await addDoc(collection(db, "users"), {
            email: session.user.email,
            onboarded: false
          });
          session.userData = {
            email: session.user.email,
            onboarded: false
          };
        }
      }
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
        try {
          // validate magic DID token
          magic.token.validate(didToken);
        } catch (error) {
          console.log(error);
          console.log("did", didToken);
        }

        // fetch user metadata
        const metadata = await magic.users.getMetadataByToken(didToken);

        // return user info
        return { ...metadata };
      }
    })
  ]
});
