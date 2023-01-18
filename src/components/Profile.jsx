import React from 'react'
import './Profile.css'
import ProfileAvatar from './ProfileAvatar'

const Profile = ({ image , name, title, isNew, isShow}) => {
  return (
    <>
    <div className='profile'>
        {
          isShow &&
          <ProfileAvatar image={image} isNew={isNew}/>
        }
        <h1>{name}</h1>
        <p>{title}</p>
    </div>  
    </>
  )
}

export default Profile

