import React from 'react'
import Cover from '../../images/bb.png'
import Profile from '../../images/trail.png'
import './ProfileCard.css'
const ProfileCard = () => {
  const ProfilePage=true;
  return (
    <div className='ProfileCard'>
        <div className='ProfileImages'>
            <img src={Cover} alt=""/>
            <img src={Profile} alt=""/>
        </div>
        <div className='ProfileName'>
            <span>Kartheek</span>
            <span>Student</span>
        </div>
        <div className='followStatus'>
          <hr/>
          <div>
          <div className='follow'>
            <span>600</span>
            <span>Following</span>
          </div>
          <div className='vl' style={{height: '100%',
    width: 1,
    backgroundColor: '#909090'}}></div>
          <div className='follow'>
            <span>1</span>
            <span>Followers</span>
          </div>
          {ProfilePage&&(
            <>
            <div className="vl" style={{height: '100%',
    width: 1,
    backgroundColor: '#909090'}}>
              
            </div>
            <div className='follow'>
              <span>3</span>
              <span>Posts</span>
            </div>
            </>
          )}
          </div>

          <hr/>
        </div>
        {ProfilePage?"":<span>
          My Profile
        </span>}
        
    </div>
  )
}

export default ProfileCard