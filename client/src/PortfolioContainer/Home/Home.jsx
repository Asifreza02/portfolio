import React from 'react'
import Profile from './Profile'
import Footer from './Footer/Footer'

import './Home.css'

const Home = () => {
  return (
    <div className='home-container' id='Home'>
      
      <Profile />
      <Footer />
    </div>
  )
}

export default Home
