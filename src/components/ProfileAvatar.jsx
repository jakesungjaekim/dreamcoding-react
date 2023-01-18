import React from 'react'
import './ProfileAvatar.css'

const ProfileAvatar = ({image, isNew}) => {
  return (
    <div className='avatar'>
     {
       isNew
       &&
       <span className='new'>New</span>
      }
        <img 
        className='photo'
        src={image}
        alt="avatar"
        />
    </div>
  )
}

export default ProfileAvatar