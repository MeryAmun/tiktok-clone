import React from 'react';
import './footer.css'
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import Ticker from 'react-ticker';

const Footer = ({ channel, description, song}) => {
  return (
    <div className='footer'>
      <div className="videoFooter__text">
    <h3>@{channel}</h3>
    <p>{description}</p>
    <div className="footer__ticker">
    <MusicNoteIcon className='footer__icon'/>
    <Ticker mode='smooth'>
      {({index}) => (
         <>
         <p>{song} #{index}</p>
         </>
      )}
    </Ticker>
    </div>
      </div>
      <img src="https://static.thenounproject.com/png/934821-200.png" alt="logo"  className='footer__record'/>
    </div>
  )
}

export default Footer