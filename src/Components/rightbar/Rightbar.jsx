import React from 'react'
import "./rightbar.css"
import { Users } from '../../DummyData'
import Online from '../Online'

const Rightbar = ({Profile}) => {
  const HomeRightbar=()=>{
    return(
      <>
       <div className="birthdayContainer">
          <img className='birthdayImg' src="./assets/gift.png" alt="" />
          <span className="birthdayText"><b>priyanka sharma</b> and <b>3 other friends</b> have a birthday today</span>
        </div>
        <img className='rightbarAd' src="./assets/ad.png" alt="" />
        <h4 className='rightbarTitle'>Online Freinds</h4>
        <ul className='rightbarFreindList'>
         {Users.map((d)=>(
         <Online key={d.id} user={d}/>

         ))}
        </ul></>
    )
  }
  const ProfileRightbar =()=>{
    return(
<>
<h4 className='rightbarTitles'>User Information</h4>
<div className="rightbarInfo">
  <div className="rightbarInfoItem">
    <span className="rightbarinfoKey">City:</span>
    <span className="rightbarinfoValue">Lisbon</span>
  </div>
  <div className="rightbarInfoItem">
    <span className="rightbarinfoKey">From:</span>
    <span className="rightbarinfoValue">Torres Vedras</span>
  </div>
  <div className="rightbarInfoItem">
    <span className="rightbarinfoKey">Relationship:</span>
    <span className="rightbarinfoValue">couple</span>
  </div>
</div>

<h4 className='rightbarTitles'>User Freinds</h4>
<div className="rightbarFollowings">
  <div className="rightbarFollowing">
    <img src="./assets/person/people5.jpg" className="rightbarFollowingImg"></img>
    <span className="rightbarFollowingName">John Carter</span>
  </div>
  <div className="rightbarFollowing">
    <img src="./assets/person/people3.jpg" className="rightbarFollowingImg"></img>
    <span className="rightbarFollowingName">John Carter</span>
  </div>
  <div className="rightbarFollowing">
    <img src="./assets/person/people4.jpg" className="rightbarFollowingImg"></img>
    <span className="rightbarFollowingName">John Carter</span>
  </div>
  <div className="rightbarFollowing">
    <img src="./assets/person/people6.jpg" className="rightbarFollowingImg"></img>
    <span className="rightbarFollowingName">John Carter</span>
  </div>
  <div className="rightbarFollowing">
    <img src="./assets/person/person2.jpg" className="rightbarFollowingImg"></img>
    <span className="rightbarFollowingName">John Carter</span>
  </div>
  <div className="rightbarFollowing">
    <img src="./assets/person/pic1.jpeg" className="rightbarFollowingImg"></img>
    <span className="rightbarFollowingName">John Carter</span>
  </div>
</div>


</>    )
  }
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
       {
        Profile? <ProfileRightbar/>:<HomeRightbar/>
       }
      </div>
    </div>
  )
}

export default Rightbar