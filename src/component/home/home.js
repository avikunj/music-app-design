import React from 'react'
import Header from './header'
import './home.scss'
import Music from '../../img/musicgirl.png'
import Freq from '../../img/freq.jpg'
import Time from './time'
const Home = () => {
  return (
    <div className='MusicHomePage'>
      <Header/>
      <div className='musiclogo'>
        <img src={Music} height={250 }className="logo"/>
        <h1>Never Let You Down</h1>
        <h5>Barns Courtney</h5>
      </div>
    <Time/>
    </div>
  )
}

export default Home