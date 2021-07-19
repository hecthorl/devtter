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
