import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Logo from './assets/images/logo.png';
import './Header.css'
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


function header() {
  return (
    <div className='header'>

        <div className='header__left'>
          <img src={Logo} alt=''/>
          

        </div>

        
        <div className='header__search'>
          <SearchIcon />
         <input type="text" placeholder='search'/>
      

        </div>
        <div className='header__right'>
          <HeaderOption Icon={HomeIcon} title='Home'/>
          <HeaderOption Icon={SupervisorAccountIcon} title='My Network'/>
          <HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
          <HeaderOption Icon={MessageIcon} title='Messaging'/>
          <HeaderOption Icon={NotificationsIcon} title='Notifications'/>
          <HeaderOption Icon={AccountCircleIcon} titile='Me'/>

        </div>

    </div>
  )
}

export default header
