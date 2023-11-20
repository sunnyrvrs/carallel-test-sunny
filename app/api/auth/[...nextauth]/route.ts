// Importing authOptions from a local module. These options configure the behavior of NextAuth,
// which is a library for implementing authentication in Next.js applications.
import { authOptions } from "@/auth";

// NextAuth is used to add authentication support
import NextAuth from "next-auth";

// This handler will manage the authentication logic based on the provided configuration in authOptions.
const handler = NextAuth(authOptions);

// This enables the handler to respond to GET and POST requests
export { handler as GET, handler as POST }