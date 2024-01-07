import "./profile.css"
import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import Topbar from '../../topbar/Topbar';
import Sidebar from '../../sidebar/Sidebar';
import Rightbar from '../../rightbar/Rightbar';
import Feed from '../../feed/Feed';

const Profile = () => {
  return (
    <div>
        <Topbar/>
        <div className="profile">
        <Sidebar/>
        <div className="profileRight">
            <div className="profileRightTop">
                <div className="profileCover">
                <img className="profileCoverImg" src="./assets/post/norway.jpg" alt="" />
                <img className="profileuseImg" src="./assets/person/person2.jpg" alt="" />
                </div>
                <div className="profileInfo">
                    <h4 className="profileInfoName">Dheeraj Kumar</h4>
                    <span className="profileInfoDesc"> Hello My Freinds</span>
                </div>
                
            </div>
            <div className="profileRightBottom">
        <Feed/>
        <Rightbar Profile/>
        </div>
        </div>

        </div>

    </div>
  )
}

export default Profile