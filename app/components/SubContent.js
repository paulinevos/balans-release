import React from 'react';
import SubscribeForm from './SubscribeForm'
import SocialIcon from './SocialIcon'
import { IoLogoInstagram, IoLogoTwitter } from 'react-icons/io'
import { FaSpotify } from 'react-icons/fa'
import TourSchedule from './TourSchedule'

const tourDates = [
  {
    date: new Date('2020-03-11'),
    location: 'Bird, Rotterdam',
    link: 'https://bird.stager.nl/web/tickets/381227'
  },
  {
    date: new Date('2020-03-12'),
    location: 'Tivoli, Utrecht',
    link: 'https://tickets.tivolivredenburg.nl/webshop/webticket/bestseatselect?eventId=2614&el=true'
  },
  {
    date: new Date('2020-03-13'),
    location: 'Hall of Fame, Tilburg',
    link: 'https://www.ticketmaster.nl/event/253797'
  },
  {
    date: new Date('2020-03-21'),
    location: 'Metropool, Enschede',
    link: 'https://www.ticketmaster.nl/event/253831?CL_ORIGIN=ORIGIN2&CAMEFROM=METROPOOL&brand=nl_metropool'
  },
  {
    date: new Date('2020-03-27'),
    location: 'Simplon, Groningen',
    link: 'https://simplon.stager.nl/web/tickets/385045'
  },
  {
    date: new Date('2020-04-24'),
    location: 'Gigant, Apeldoorn',
    link: 'https://www.gigant.nl/concerten-clubnachten/yung-nnelg'
  },
  {
    date: new Date('2020-05-14'),
    location: 'Paradiso, Amsterdam',
    link: 'https://tickets.paradiso.nl/135354/20885/'
  }
]

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
      <TourSchedule dates={tourDates} />
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