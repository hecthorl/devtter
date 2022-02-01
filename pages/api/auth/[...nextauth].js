import userSchema from 'helpers/userSchema'
import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import addUser from 'services/addUser'
import isUserInDB from 'services/isUserInDB'

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
      signIn: '/signin'
   },
   callbacks: {
      signIn: async ({ profile }) => {
         const isUser = await isUserInDB(profile.email)
         if (isUser) return true
         const newUser = userSchema(profile)
         // TODDO: Manejar Errores
         await addUser(newUser)
         return true
      },
      session: async ({ session, user, token }) => {
         return session
      }
   }
})
