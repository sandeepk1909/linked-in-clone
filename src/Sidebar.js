import React from 'react'
import "./Sidebar.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import photo from './assets/images/caribbean.jpg'
function Sidebar() {
  const recentItem = (topic) => (
     <div className='sidebar__recentItem'>
      <span className='sidebar__hash'>#</span>
      <p>{topic}</p>
     </div>
  );

  return (
    <div className='sidebar'>
<div className='sidebar__top'>
  <img src={photo}alt=''/> 
  <AccountCircleIcon  className='sidebar__avatar'/>
  <h2>Karumanchi Sandeep</h2>
  <h4>sandeepkarumanchi5@gmail.com</h4>
</div>  
  <div className='sidebar__stats'>
    <div className='sidebar__stat'>
      <p>who viewed you</p>
      <p className='sidebar__statNumber'>2755</p>

    </div>
    <div className='sidebar__stat'>
      <p>views on post</p>
      <p className='sidebar__statNumber'>3542</p>
    </div>
  </div>
<div className='sidebar__bottom'>
  <p>Recent</p>
  {recentItem("react.js")}
  {recentItem("programming")}
  {recentItem("softwareengineering")}
  {recentItem("design")}
  {recentItem("developer")}
    

</div>
  </div>
  );
}

export default Sidebar
