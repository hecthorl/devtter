// useBool.js Types *********
export type useBool = [
   boolean,
   {
      toggle: () => void
      on: () => void
      off: () => void
   }
]

// useAuthUser.js Types *********
export type useAuthUser = {
   userData: {
      uuid: string
      nickname: string
      name: string
      email: string
      image: string
   }
   signIn: () => void
   signOut: () => void
}
