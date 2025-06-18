import NextAuth from "next-auth";
import Resend from "next-auth/providers/resend";
import Google from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "./libs/mongo";

const config = {
  providers: [
    Resend({
      apiKey: process.env.RESEND_KEY,
      from: "noreply@codefast.memberadvise.com",
      name: "Email",
    }),
    Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
};

export const { handlers, signIn, signOut, auth } = NextAuth(config);

// http://localhost:3000/api/auth/callback/resend?callbackUrl=http%3A%2F%2Flocalhost%3A3000&token=2e16df1fc71aeb13d9ec32460b5addccf292f279bf749f96744322881fdbc86f&email=mailsenthilonline%40gmail.com
