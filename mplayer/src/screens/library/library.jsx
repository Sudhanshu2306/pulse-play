import React, { useEffect, useState } from 'react'
import APIKit from "../../../spotify";
import { IconContext } from 'react-icons';
import {AiFillPlayCircle} from 'react-icons/ai'

import { useNavigate } from 'react-router-dom';

function Library() {

  const [playlists, setPlaylists] = useState(null);
  useEffect(()=>{
    APIKit.get('me/playlists').then(function(response){
      setPlaylists(response.data.items);
      // console.log(response.data.items)
  
    })
  },[]) 

  const navigate=useNavigate();
  const playPlaylist = (id)=>{
    navigate("/player",{state:{id:id}})
  }
  return (
    <div className='bg-[#1E2A3E] w-[calc(100%-100px)] h-[100%] rounded-3xl'>      
      <div className='w-[100%] h-[90%] p-[3%] flex flex-wrap overflow-y-auto justify-between '>
        {playlists?.map((playlist=>
            <div onClick={()=> playPlaylist(playlist.id)} key={playlist.id} className=' cursor-pointer relative w-[15%] h-[45%] rounded-[20px] bg-[rgb(30,42,62)] 
            border border-[rgba(54,69,98,0.35)] p-[1%] mb-[2%] 
            bg-gradient-to-r from-[rgb(42,59,88)] from-0% to-[rgb(54,69,98,0)] to-100% hover:bg-black'>
                <img className='rounded-[20px] p-1 transition-all delay-200 ease-in-out' src={playlist.images[0].url}></img>  
                <p className=' text-center text-[#C4D0E3] text-wrap font-medium'>{playlist.name}</p>
                <p className=' text-center text-white text-wrap text-sm'>{playlist.tracks.total} songs</p>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-200 hover:opacity-100">
                  <button className="play-button opacity-100">
                    <IconContext.Provider value={{size:"50px", color:"#FFA500"}}>
                        <AiFillPlayCircle/>
                    </IconContext.Provider>
                  </button>
                </div>
            </div>
          ))};
      </div>
    </div>
  );                                     
}

export default Library