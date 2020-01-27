import React from 'react'
import PropTypes from 'prop-types'

function pad(n){return n<10 ? '0'+n : n}

function displayDate(date) {
  return pad(date.getDate()) + '.' + pad((date.getMonth() + 1)) + '.' + date.getFullYear()+ ': '
}

export default function TourSchedule({dates})
{
  return(
    <div id="tourSchedule">
      {dates.map((event) => 
        <span className='event' key={event.date.toDateString()}>
          <span className='date'>
            {displayDate(event.date)}
          </span>
          <span className='location'>
            <a href={event.link} target='_blank'>
              {event.location}
            </a>
          </span>
        </span>
      )}
    </div>
  )
}

TourSchedule.propTypes = {
  dates: PropTypes.arrayOf(
      PropTypes.shape({
        date: PropTypes.instanceOf(Date).isRequired,
        location: PropTypes.string.isRequired,
        link: PropTypes.string
      })
    ).isRequired
}