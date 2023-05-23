import React from 'react'
import spacex from './../../Assets/SpaceX-Logo.svg';

function Header() {
  return (
    <div className='p-6 bg-zinc-800'>
        <img src={spacex} alt="spacex logo" />
    </div>
  )
}

export default Header