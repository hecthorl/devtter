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
   apiKey: 'AIzaSyBBDq8aN58spe3fEcYmngFU1m143VcE8Qs',
   authDomain: 'chat-app-hector.firebaseapp.com',
   projectId: 'chat-app-hector',
   storageBucket: 'chat-app-hector.appspot.com',
   messagingSenderId: '835835726435',
   appId: '1:835835726435:web:827febe7c8f24cd92a0656'
}

export const LIKES_STATES = {
   DEF4ULT: null,
   LIKING: 'laikeando',
   LIKED: 'liked',
   UNLIKING: 'quitando like',
   UNLIKED: 'quitar like',
   ERROR: 'Error al dar like'
}
