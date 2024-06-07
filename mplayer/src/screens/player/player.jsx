import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import apiClient from '../../../spotify';
import SongCard from '../../components/songCard/songCard';
import Queue from '../../components/queue/queue';
import AudioPLayer from '../../components/audioPlayer/audioPlayer';
import Widgets from '../../components/widgets/widgets';

export default function Player() {
  const location=useLocation();
  // console.log(location);
  const [tracks, setTracks]= useState([]);

  const [currentTrack, setCurrentTrack]=useState({});
  const [currentIndex, setCurrentIndex]=useState(0);
  useEffect(()=>{
    if(location.state){
      apiClient
      .get("playlists/" + location.state?.id + "/tracks")
      .then((res)=>{
        setTracks(res.data.items);
        setCurrentTrack(res.data.items[0].track);
      })
    }
  },[location.state])
  return (
    <div className='flex w-[calc(100%-100px)] h-[100%] bg-[#1E2A3E] rounded-3xl'>
    {/* left player body */}
      <div className='w-[68%] mr-[2%] h-[100%] '>
        <AudioPLayer
          currentTrack={currentTrack}
          total={tracks}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
        <Widgets artistID={currentTrack?.album?.artists[0]?.id} />
      </div>
    {/* right player body */}
      <div className='w-[30%] h-[100%] flex flex-col justify-between '>
        <SongCard  album={currentTrack.album} />
        <Queue tracks={tracks} setCurrentIndex={setCurrentIndex} />
      </div>
    </div>
  )
}
