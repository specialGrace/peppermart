import React,{useState} from 'react'
import HeaderMenu from './HeaderMenu'
import HeaderTop from './HeaderTop'
import TopSearchBar from './TopSearchBar'

import styles from './Header.module.css'

const Header = ({drawerToggleClickHandler,SideDrawerOpen}) => {
  const [switchTopBar, setSwitchTopBar] = useState(false);

  return (
    <div className= {styles.container}>
       {/* header top */}
      {switchTopBar ? <TopSearchBar setSwitchTopBar={setSwitchTopBar}/> : <HeaderTop setSwitchTopBar={setSwitchTopBar}/> }
      {/* header menu */}
      <HeaderMenu drawerToggleClickHandler={drawerToggleClickHandler}  SideDrawerOpen={SideDrawerOpen}/>
    </div>
  )
}

export default Header