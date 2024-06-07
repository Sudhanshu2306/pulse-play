import React from 'react'

function Queue({tracks, setCurrentIndex}) {
  return (
    <div className=" w-[100%] h-[35%] rounded-[30px] rounded-tr-none rounded-br-none bg-[#3e61d2] 
    flex-col justify-center items-center flex">
      <div className="h-[85%] flex-col w-[80%] justify-center flex">
        <p className=" text-xl font-bold text-[#fff] text-left my-[10px] mx-[0px] ">Up Next</p>
        <div className="h-[80%] w-[100%] overflow-y-auto overflow-x-hidden " style={{ scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "none" }}>
          {tracks?.map((track, index) => (
            <div
              key={index + "key"}
              className="justify-between w-full py-1 px-0 text-sm font-medium text-[#fff] cursor-pointer flex"
              onClick={() => setCurrentIndex(index)}
            >
              <p className="w-[75%] text-ellipsis m-[0px] hover:text-[15px]">{track?.track?.name}</p>
              <p className='m-[0px]' >0:30</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Queue