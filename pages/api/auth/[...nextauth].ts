import NextAuth from 'next-auth'
// import { NextApiHandler } from 'next'

import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { PrismaClient } from '@prisma/client'

import GithubProvider from 'next-auth/providers/github'

import GoogleProvider from 'next-auth/providers/google'

// import EmailProvider from 'next-auth/providers/email'

const prisma = new PrismaClient()

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // EmailProvider({
    //   server: {
    //     host: process.env.EMAIL_SERVER_HOST,
    //     port: process.env.EMAIL_SERVER_PORT,
    //     auth: {
    //       user: process.env.EMAIL_SERVER_USER,
    //       pass: process.env.EMAIL_SERVER_PASSWORD,
    //     },
    //     from: process.env.EMAIL_FROM,
    //   },
    // }),
  ],

  secret: process.env.SECRET,
})

// const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options)
// export default authHandler
