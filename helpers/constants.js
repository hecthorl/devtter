export const COMPOSE_STATES = {
   USER_NOT_KNOW: 0,
   LOADING: 1,
   SUCCESS: -1,
   ERROR: 2
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

export const USER_STATE = {
   NOT_LOGGED: null,
   NOT_KNOW: undefined
}

export const DATE_UNITS = [
   ['year', 31557600],
   ['month', 2629800],
   ['week', 604800],
   ['day', 86400],
   ['hour', 3600],
   ['minute', 60],
   ['second', 1]
]

export const configFirebase = {
   apiKey: 'AIzaSyDlecImONDPjwgU2sr_QI_GBYg7_ZBnRoc',
   authDomain: 'devtter-app.firebaseapp.com',
   projectId: 'devtter-app',
   storageBucket: 'devtter-app.appspot.com',
   messagingSenderId: '1036537531069',
   appId: '1:1036537531069:web:a836b456faed0b134045d4'
}

export const LIKES_STATES = {
   DEF4ULT: null,
   LIKING: 'laikeando',
   LIKED: 'liked',
   UNLIKING: 'quitando like',
   UNLIKED: 'quitar like',
   ERROR: 'Error al dar like'
}

// prettier-ignore
export const WORDS_ARR = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
