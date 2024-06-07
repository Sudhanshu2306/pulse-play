import React, { useState, useEffect } from 'react';
import SideBarButton from './sideBarbutton';
import { MdFavorite, MdSpaceDashboard } from 'react-icons/md';
import { FaGripfire, FaPlay } from 'react-icons/fa';
import { FaSignOutAlt } from 'react-icons/fa';
import { IoLibrary } from 'react-icons/io5';
import apiClient from '../../../spotify';

function Sidebar() {
  const [image, setImage] = useState("https://www.teltarif.de/img/arch/2022/kw47/whatsapp-avatar-update-beta-android-anleitung-1f.jpg");

  useEffect(()=>{
    apiClient.get("me").then((response)=>{
      setImage(response.data.images[0].url);
    });
  },[]);
  return (
    <div className='w-[100px] h-[100%] border-black flex flex-col items-center justify-between my-1 mx-auto'>
      <img
        src={image}
        className='w-[50px] h-[50px] rounded-full mt-4'
        alt='profile'
      />
      <div>
        <SideBarButton title='Feed' to='/feed' icon={MdSpaceDashboard} />
        <SideBarButton title='Trending' to='/trending' icon={FaGripfire} />
        <SideBarButton title='Player' to='/player' icon={FaPlay} />
        <SideBarButton title='Favourite' to='/favourite' icon={MdFavorite} />
        <SideBarButton title='Library' to='/' icon={IoLibrary} />
      </div>
      <SideBarButton title='Sign Out' icon={FaSignOutAlt} />
    </div>
  );
}

export default Sidebar;
