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

export const DRAG_IMAGE_STATES = {
   ERROR: -1,
   NONE: 0,
   DRAG_OVER: 1,
   UPLOADING: 2,
   COMPLETE: 3,
   DROPED: 4
}

export const UPLOADING_STATES = {
   NONE: 'nada',
   UPLOADING: 'subiendo',
   DONE: 'terminado'
}

// prettier-ignore
export const WORDS_ARR = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
