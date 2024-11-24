import React from 'react'
import UseAuth from '../Auth/authCode';
const LandingPage = () => {
  const code  = new URLSearchParams(window.location.search).get('code');
  const access_token = UseAuth(code)
  return (
    <div className='w-[70vw] bg-gray-300 overflow-hidden'>{code}</div>
  )
}

export default LandingPage