import React from 'react'
import "./topbar.css"
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';



const Topbar = () => {
  return (
    <div className='topbar-container'>
        <div className="topbarleft">
            <span className='logo'>DeeSocial</span>
        </div>
        <div className="topbarCenter">
            <div className="search">
                <SearchIcon className='searchIcon'/>
                <input className='searchBarInput' type="text" placeholder='Search for freind, post or video' />
            </div>
        </div>
        <div className="topbarRight">
            <div className="topbarLinks">
                <span className='topbarLink'>HomePage</span>
                <span className='topbarLink'>TimeLine</span>
            </div>
            <div className="topBarIcons">
                <div className="TopbarItemIcons">
                    <PersonIcon className='personIcon'/>
                    <span className="topbarIconBdge">1</span>
                </div>
                <div className="TopbarItemIcons">
                    <ChatIcon/>
                    <span className="topbarIconBdge">2</span>
                </div>
                <div className="TopbarItemIcons">
                    <NotificationsIcon/>
                    <span className="topbarIconBdge">1</span>
                </div>
            </div>
            <img className='topbarImg' src="./assets/person/person2.jpg" alt="" />
        </div>
    </div>
  )
}

export default Topbar