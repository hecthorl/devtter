import { FiSettings } from 'react-icons/fi'
import FollowersItem from './FollowersItem'
import SearchInput from './SearchInput'
import TrendsItem from './TrendsItem'

const Aside = () => {
   return (
      <aside className="aside-container">
         <div>
            <SearchInput />
            <div className="trends-container">
               <div className="trends-heading">
                  <h2>Tendencias para ti</h2>
                  <span role="button" className="trends-settings-btn">
                     <FiSettings aria-hidden />
                  </span>
               </div>
               <div className="trends-content">
                  {[...Array(4).keys()].map((u, i) => (
                     <TrendsItem key={i} />
                  ))}
                  <div className="trends-expand">Mostrar más</div>
               </div>
            </div>
            <div className="follow-container">
               <h4>A quién Seguir</h4>
               <div>
                  <FollowersItem
                     img="https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK_400x400.png"
                     content="ReactJS"
                  />
                  <FollowersItem
                     img="https://pbs.twimg.com/profile_images/1336281436685541376/fRSl8uJP_400x400.jpg"
                     content="Dan"
                  />
                  <div>Mostrar más</div>
               </div>
            </div>
            <div className="aside-separator"></div>
            <footer className="footer-text">
               <p>© 2021 Devtter, Inc.</p>
            </footer>
         </div>
      </aside>
   )
}

export default Aside
