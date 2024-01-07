import React from 'react'
import RssFeedIcon from '@mui/icons-material/RssFeed';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ChatIcon from '@mui/icons-material/Chat';
import EventIcon from '@mui/icons-material/Event';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import SchoolIcon from '@mui/icons-material/School';
import GroupIcon from '@mui/icons-material/Group';
import { Users } from '../../DummyData'


import "./sidebar.css"
import Closefreind from '../closeFreinds/Closefreind';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItems">
<RssFeedIcon className='sidebarIcon'/>
<span className="sidebarListItem">Feed</span>
          </li>
          <li className="sidebarListItems">
<ChatIcon className='sidebarIcon'/>
<span className="sidebarListItem">Chat</span>
          </li>
          <li className="sidebarListItems">
<PlayCircleIcon className='sidebarIcon'/>
<span className="sidebarListItem">Videos</span>
          </li>
          <li className="sidebarListItems">
<GroupIcon className='sidebarIcon'/>
<span className="sidebarListItem">Groups</span>
          </li>
          <li className="sidebarListItems">
<BookmarkIcon className='sidebarIcon'/>
<span className="sidebarListItem">Bookmark</span>
          </li>
          <li className="sidebarListItems">
<HelpOutlineIcon className='sidebarIcon'/>
<span className="sidebarListItem">Questions</span>
          </li>
          <li className="sidebarListItems">
<WorkOutlineIcon className='sidebarIcon'/>
<span className="sidebarListItem">Jobs</span>
          </li>
          <li className="sidebarListItems">
<EventIcon className='sidebarIcon'/>
<span className="sidebarListItem">Events</span>
          </li>
          <li className="sidebarListItems">
<SchoolIcon className='sidebarIcon'/>
<span className="sidebarListItem">Courses</span>
          </li>
        </ul>
        <button className='sidebarButton'>Show More</button>
        <hr className='sidebarhr' />
        <ul className="sidebarFreindList">
          {
Users.map((u)=>(
  <Closefreind key={u.id} user={u}/>

))
          }
          
        </ul>
      </div>
    </div>
  )
}

export default Sidebar