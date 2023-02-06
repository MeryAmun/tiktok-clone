import React, { useState } from 'react';
import './sidebar.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MessageIcon from '@mui/icons-material/Message';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

const Sidebar = ({messages, likes, shares}) => {
  const [liked, setLiked] = useState(false);


  return (
    <div className='sidebar'>
     <div className="sidebar__icon">
  {
    liked ? (
      <FavoriteIcon fontSize='large' onClick={() => setLiked(false)}/>
    ) : (  <FavoriteBorderIcon fontSize='large' onClick={() => setLiked(true)}/>)
  }
  <p>{ liked ? likes + 1 : likes }</p>
     </div>
     <div className="sidebar__icon">
  <MessageIcon fontSize='large'/>
<p>{messages}</p>
     </div>
     <div className="sidebar__icon">
  <ShareIcon fontSize='large'/>
  <p>{shares}</p>
     </div>
    </div>
  )
}

export default Sidebar