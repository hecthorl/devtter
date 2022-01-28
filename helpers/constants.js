export const DATE_UNITS = [
   ['year', 31557600],
   ['month', 2629800],
   ['week', 604800],
   ['day', 86400],
   ['hour', 3600],
   ['minute', 60],
   ['second', 1]
]

export const firebaseConfig = {
   apiKey: process.env.NEXT_PUBLIC_APIKEY,
   authDomain: process.env.NEXT_PUBLIC_AUTHDOMAIN,
   projectId: process.env.NEXT_PUBLIC_PROJECTID,
   storageBucket: process.env.NEXT_PUBLIC_STORAGEBUCKET,
   messagingSenderId: process.env.NEXT_PUBLIC_MESSAGINGSENDERID,
   appId: process.env.NEXT_PUBLIC_APPID
}
