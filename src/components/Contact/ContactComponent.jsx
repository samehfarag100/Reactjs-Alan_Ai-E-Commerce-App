import React from 'react'
import './Contact.scss'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';
import GoogleIcon from '@mui/icons-material/Google';
const ContactComponent = () => {
  return (
    <div className='contact'>
        <div className='contact_title'>
                <h3>Be In Touch With US :</h3>
        </div>
        <div className='contact_inputField'> 
            <input type='text' placeholder='Enter Your Email' />
            <button>Join Us</button>
        </div>
        <div className='contact_Links'>
            <a href='#' ><FacebookOutlinedIcon/></a>
            <a href='#'><TwitterIcon/></a>
            <a href='#'><InstagramIcon/></a>
            <a href='#'><PinterestIcon/></a>
            <a href='#'><GoogleIcon/></a>
            <a href='#'><YouTubeIcon/></a>
        </div>
    </div>
  )
}

export default ContactComponent 