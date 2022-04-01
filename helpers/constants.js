export const DATE_UNITS = [
   ['year', 31_557_600],
   ['month', 2_629_800],
   ['week', 604_800],
   ['day', 86_400],
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

// https://chakra-ui.com/docs/features/responsive-styles#customizing-breakpoints
export const breackPoints = {
   sm: '500px',
   md: '1004px',
   lg: '1094px',
   xl: '1282px',
   '2xl': '1536px'
}

export const GIF = {
   API_KEY: process.env.GIPHY_API_KEY,
   BASE_URI: 'https://api.giphy.com/v1'
}
