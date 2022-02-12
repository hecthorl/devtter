import uuid from './uuid'

const userSchema = profile => ({
   uuid: uuid(),
   nickname: '@' + profile.login,
   name: profile.name || profile.login,
   email: profile.email,
   img: profile.avatar_url,
   github_url: profile.html_url,
   created_at: new Date().getTime(),
   updated_at: '',
   following: [],
   followers: [],
   devitts: {
      own_devitts: [],
      re_devitts: [],
      devits_responses: [],
      media_content: [],
      likes: []
   },
   preferences: {
      img_banner: '',
      bio: '',
      location: '',
      website_url: '',
      birthday: ''
   },
   gallery: {
      images: [],
      videos: []
   },
   black_list: []
})

export default userSchema
