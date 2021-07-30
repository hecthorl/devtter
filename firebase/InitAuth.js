import { init } from 'next-firebase-auth'

const initAuth = () => {
   init({
      authPageURL: '/',
      appPageURL: '/home',
      loginAPIEndpoint: '/api/login', // required
      logoutAPIEndpoint: '/api/logout', // required
      // Required in most cases.
      firebaseAdminInitConfig: {
         credential: {
            projectId: process.env.PROJECT_ID,
            clientEmail: process.env.CLIENT_EMAIL,
            // The private key must not be accesssible on the client side.
            privateKey: process.env.PRIVATE_KEY?.replace(/\\n/g, '\n')
         }
         //  databaseURL: 'https://my-example-app.firebaseio.com'
      },
      firebaseClientInitConfig: {
         apiKey: 'AIzaSyBBDq8aN58spe3fEcYmngFU1m143VcE8Qs', // required
         authDomain: 'chat-app-hector.firebaseapp.com',
         //  databaseURL: 'https://my-example-app.firebaseio.com',
         projectId: 'chat-app-hector'
      },
      cookies: {
         name: 'Una-cookie-mas', // required
         // Keys are required unless you set `signed` to `false`.
         // The keys cannot be accessible on the client side.
         keys: [
            process.env.COOKIE_SECRET_CURRENT,
            process.env.COOKIE_SECRET_PREVIOUS
         ],
         httpOnly: true,
         maxAge: 12 * 60 * 60 * 24 * 1000, // twelve days
         overwrite: true,
         path: '/',
         sameSite: 'strict',
         secure: true, // set this to false in local (non-HTTPS) development
         signed: true
      }
   })
}

export default initAuth
