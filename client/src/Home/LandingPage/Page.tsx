import React from 'react'

const LandingPage = () => {
  const code  = new URLSearchParams(window.location.search).get('code');

  return (
    <div className='w-[70vw] bg-gray-300 overflow-hidden'>{code}</div>
  )
}

export default LandingPage