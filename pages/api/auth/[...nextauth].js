import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import fdbCli from 'helpers/faunadb'
import { query } from 'faunadb'
import userSchema from 'helpers/userSchema'

const { Get, Index, Match, Create, Collection } = query

const getUser = async email => {
   return await fdbCli
      .query(Get(Match(Index('users_by_email'), email)))
      .catch(() => {})
}

export default NextAuth({
   // Configure one or more authentication providers
   providers: [
      GithubProvider({
         clientId: process.env.GITHUB_ID,
         clientSecret: process.env.GITHUB_SECRET
      })
   ],
   secret: process.env.NEXTAUTH_SECRET,
   pages: {
      signIn: '/signin',
      signOut: '/'
   },
   callbacks: {
      signIn: async ({ user, account, profile }) => {
         const isUser = await getUser(user.email)

         if (isUser) return true
         const userRefColl = Collection('Users')

         await fdbCli
            .query(
               Create(userRefColl, {
                  data: userSchema(profile)
               })
            )
            .catch(console.log)

         return true
      },
      session: async ({ session }) => {
         const { expires, user } = session
         const currentUser = await getUser(user.email)
         return {
            expires,
            user: {
               ...user,
               uuid: currentUser.data.uuid,
               username: currentUser.data.preferences.username
            }
         }
      }
   }
})
