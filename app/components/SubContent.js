import React from 'react';
import SubscribeForm from './SubscribeForm'
import SocialIcon from './SocialIcon'
import TourSchedule from './TourSchedule'
import { FaSpotify, FaApple, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

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
      <h2 className='centered'>31.01.2020</h2>
      <a 
        className='btn btn-fullWidth' 
        href='https://www.toneden.io/mvsei-music-group-1/post/balans'
        target='_blank'
      >
        <span>Pre-save on <FaSpotify size={24} /> +<FaApple size={26} /></span>
      </a>
      <TourSchedule dates={tourDates} />
      <SubscribeForm />
      <div className="socialIcons">
        <SocialIcon link='http://instagram.com/yungnnelg'>
          <FaInstagram size={64} />
        </SocialIcon>
        <SocialIcon link='http://twitter.com/yungnnelg'>
          <FaTwitter size={64} />
        </SocialIcon>
        <SocialIcon link='https://www.youtube.com/channel/UC1k93RerAmGS5Cxbn2q05EQ'>
          <FaYoutube size={64} />
        </SocialIcon>
      </div>
    </React.Fragment>
  )
}