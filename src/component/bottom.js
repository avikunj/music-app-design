import React from 'react'
import Music from '../img/musicgirl.png'
import './bottom.scss'
const Bottom = () => {
  return (
    <div className='bottomplay'><div className="bottom">
    <img src={Music} height="40%" width="20%" className="PlayOnMusic" />
    <div className="PlayOnMusicName">

    <h3>Never Let You Down</h3>
    <h6>Barns courtney</h6>
    </div>
  </div></div>
  )
}

export default Bottom