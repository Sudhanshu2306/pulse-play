import React from 'react';
import { IconContext } from 'react-icons';
import { Link, useLocation } from 'react-router-dom';


export default function SideBarButton(props) {
    const location = useLocation();

    const isActive = location.pathname === props.to

    const btnClass = isActive ? " bg-white text-black transform-[scale(1.2)] h-[80px] w-[80px] rounded-[20px] text-black flex flex-col justify-center items-center my-[5px] mx-auto transition-[all 0.2 ease-in-out"
    :"h-[80px] w-[80px] rounded-[20px] text-[#F8D9C0] flex flex-col justify-center items-center my-[5px] mx-auto hover:text-white transition-[all 0.2 ease-in-out]"
  return (
    <Link to={props.to}>
      <div className={btnClass}>
        <IconContext.Provider value={{ size: "24px", className: "btn-icon" }}>
            {React.createElement(props.icon)}
          <p className='my-1 text-base justify-center'>{props.title}</p>
        </IconContext.Provider>
      </div>
    </Link>
  )
}


