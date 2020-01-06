import React from 'react'

export default function SocialIcon({link, children}) {
  return(
    <a href={link} target='_blank'>
      {children}
    </a>
  )
}