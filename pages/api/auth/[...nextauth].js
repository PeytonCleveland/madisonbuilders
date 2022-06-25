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
  providers: [
    CredentialsProvider({
      name: "Magic Link",
      credentials: {
        didToken: { label: "DID Token", type: "text" }
      },
      async authorize({ didToken }, req) {
        magic.token.validate(didToken);

        // fetch user metadata
        const metadata = await magic.users.getMetadataByToken(didToken);

        // return user info
        return { ...metadata };
      }
    })
  ]
});
