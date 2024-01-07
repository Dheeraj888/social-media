import React from 'react'
import "./home.css"
import PersonIcon from '@mui/icons-material/Person';
import Topbar from '../../topbar/Topbar';
import Sidebar from '../../sidebar/Sidebar';
import Rightbar from '../../rightbar/Rightbar';
import Feed from '../../feed/Feed';


const Home = () => {
  return (
    <div>
        <Topbar/>
        <div className="homeContainer">
        <Sidebar/>
        <Feed/>
        <Rightbar/>


        </div>
    </div>
  )
}

export default Home