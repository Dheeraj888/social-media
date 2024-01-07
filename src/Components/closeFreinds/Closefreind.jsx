import React from 'react'
import "./closefreind.css"

const Closefreind = ({user}) => {
  return (
    <div>
         <li className="sidebarfreind">
            <img className='sidebarfreinfImg' src={user.profilePicture} alt="" />
            <span className="sidebarfreindText">{user.username}</span>
          </li>
    </div>
  )
}

export default Closefreind