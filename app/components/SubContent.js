import React from 'react';
import SubscribeForm from './SubscribeForm'
import SocialIcon from './SocialIcon'
import { IoLogoInstagram, IoLogoTwitter } from 'react-icons/io'

export default function SubContent() {
  return (
    <React.Fragment>
      <h2>31.01.2020</h2>
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