import { init } from 'next-firebase-auth'

const initAuth = () => {
   init({
      authPageURL: '/',
      appPageURL: '/home',
      loginAPIEndpoint: '/api/login',
      logoutAPIEndpoint: '/api/logout',
      firebaseAdminInitConfig: {
         credential: {
            projectId: process.env.PROJECT_ID,
            clientEmail: process.env.CLIENT_EMAIL,
            privateKey: process.env.PRIVATE_KEY?.replace(/\\n/g, '\n')
         }
      },
      firebaseClientInitConfig: {
         apiKey: 'AIzaSyBBDq8aN58spe3fEcYmngFU1m143VcE8Qs',
         authDomain: 'chat-app-hector.firebaseapp.com',
         projectId: 'chat-app-hector'
      },
      cookies: {
         name: 'Una-cookie-mas',
         keys: [
            process.env.COOKIE_SECRET_CURRENT,
            process.env.COOKIE_SECRET_PREVIOUS
         ],
         httpOnly: true,
         maxAge: 12 * 60 * 60 * 24 * 1000,
         overwrite: true,
         path: '/',
         sameSite: 'strict',
         secure: true,
         signed: true
      }
   })
}

export default initAuth
