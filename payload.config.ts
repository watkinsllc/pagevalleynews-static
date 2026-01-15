import path from "path";
import { buildConfig } from "payload";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";

export default buildConfig({
  secret: process.env.PAYLOAD_SECRET || "dev-secret-change-me",

  serverURL:
    process.env.NEXT_PUBLIC_SERVER_URL ||
    (process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000"),

  admin: {
    user: "users",
  },

  editor: lexicalEditor(),

  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL,
    },
  }),

  collections: [
    {
      slug: "users",
      auth: true,
      fields: [],
    },
  ],

  typescript: {
    outputFile: path.resolve("payload-types.ts"),
  },
});
