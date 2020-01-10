import React from 'react';
import SubscribeForm from './SubscribeForm'
import SocialIcon from './SocialIcon'
import { IoLogoInstagram, IoLogoTwitter } from 'react-icons/io'
import { FaSpotify } from 'react-icons/fa'

export default function SubContent() {
  return (
    <React.Fragment>
      <h2>31.01.2020</h2>
      <a 
        className='btn btn-fullWidth icon' 
        href='https://www.toneden.io/mvsei-music-group-1/post/balans'
        target='_blank'
      >
        <FaSpotify size={24} />
        <span>Pre-save on Spotify</span>
      </a>
      <SubscribeForm />
      <div className="socialIcons">
        <SocialIcon link='http://instagram.com/yungnnelg'>
          <IoLogoInstagram size={64} />
        </SocialIcon>
        <SocialIcon link='http://twitter.com/yungnnelg'>
          <IoLogoTwitter size={64} />
        </SocialIcon>
      </div>
    </React.Fragment>
  )
}