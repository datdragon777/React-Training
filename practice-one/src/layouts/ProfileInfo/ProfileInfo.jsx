import React from 'react'
import "./ProfileInfo.css"
import { Info, Contact } from "@components"
import {infoAvatar} from "@assets/images"

const ProfileInfo = () => {
  return (
    <div className='profile-info'>
        <Info avatar={infoAvatar} name="John Deo" job="UI/UX Designer" />
        <Contact />
    </div>
  )
}

export default ProfileInfo