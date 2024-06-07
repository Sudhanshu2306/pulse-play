import React from 'react'

function AlbumImage({ url }) {
    // console.log(url);
  return (
    <div className="w-[80%] flex items-center justify-center relative z-[1]">
        {url ? (
        <img src={url} alt="Album art" className="w-full aspect-square rounded-[30px]" />
        ) : (
        <p>No image available</p>
        )}
        <div>
          <img src={url} alt="shadow" className=' filter blur-[8px] top-[45px] left-[20px] w-[90%] rounded-[30px] absolute z-[-1]'></img>
        </div>
    </div>
  )
}

export default AlbumImage