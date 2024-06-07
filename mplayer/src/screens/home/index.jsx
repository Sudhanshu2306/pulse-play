import React,{useState, useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { setClientToken } from '../../../spotify'
import Library from '../library/library'
import Player from '../player/player'
import Trending from '../trending/trending'
import Favourite from '../favourite/favourite'
import Feed from '../feed/feed'
import Sidebar from '../../components/sidebar/sidebar'
import Login from '../auth/login'

function Home() {
  const [token, setToken] = useState("");

  useEffect(()=>{
    const token = window.localStorage.getItem("token");
    const hash = window.location.hash;
    window.location.hash="#";
    if(!token && hash) {
      const _token = (hash.split("&")[0].split("=")[1]);
      window.localStorage.setItem("token",_token);
      setToken(_token); setClientToken(_token)
    }
    else{
      setToken(token);
      setClientToken(token);
    } 
    
  },[])
  return (!token?
    <Login/>
    :
    <Router>
      <div className='w-full h-screen box-border bg-[# #1DB954] rounded-3xl rounded-tl-none rounded-bl-none flex'>
      
      <Sidebar/>
      <Routes>
        <Route path='/' element={<Library/>} />
        <Route path='/player' element={<Player/> } />
        <Route path='/feed' element={<Feed/> } />
        <Route path='/favourite' element={<Favourite/> } />
        <Route path='/trending' element={<Trending/> } />
      </Routes>
      </div>
    </Router>
  )
}

export default Home