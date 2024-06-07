import React from 'react'
import { loginEndpoint } from '../../../spotify'

function Login() {
  return (
    <div className='bg-black h-screen w-full flex items-center justify-center overflow-hidden flex-col'>
        <img src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png' alt='logo-spotify'
        className='w-[30%]'></img>
        <a href={loginEndpoint} className=' decoration-[none]'>
            <div className='w-[200px] py-4 px-0 bg-white text-black font-semibold mt-[20%] text-center rounded-md'>LOG IN</div>
        </a>
    </div>
  )
}

export default Login