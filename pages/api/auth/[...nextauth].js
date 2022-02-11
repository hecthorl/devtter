import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import userSchema from 'helpers/userSchema'
import addUser from 'services/addUser'
import findUser from 'services/findUser'

export default NextAuth({
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
         const isUser = await findUser(profile.email)
         if (isUser) return true
         const newUser = userSchema(profile)
         // TODO: Manejar Errores
         await addUser(newUser)
         return true
      },
      session: async ({ session }) => {
         /**
          * Dudas existenciales:
          * - ¿Debería mandar todo el objeto userDb?
          * - ¿Porque cuando configuro el objeto session, no veo los cambios
          *    en el cliente de inmediato?
          */
         const userDb = await findUser(session.user.email)
         session.user.uuid = userDb.uuid
         session.user.nickname = userDb.nickname
         return session
      }
   }
})
