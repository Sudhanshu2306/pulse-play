import React from 'react'

function AlbumInfo({ album }) {
    const artists = [];
    album?.artists?.forEach((element) => {
      // console.log(element.name);
      artists.push(element.name);
    });
  
    return (
      <div className="mt-[20px] w-[80%] ">
        <div className="w-[100%] overflow-hidden text-xl font-bold text-[#c3d0e3] ">
            <div className="marquee" >
                <p>{album?.name + " - " + artists?.join(", ")}</p>
            </div>

            <style jsx>{`
                .marquee {
                    white-space: nowrap;
                    display: inline-block;
                    animation: marquee 12s linear infinite;
                    padding-left: 100%;
                }
                @keyframes marquee {
                    0% {
                    transform: translateX(0);
                    }
                    100% {
                    transform: translateX(-100%);
                    }
                }
            `}</style>
        </div>
        <div className="text-sm font-medium text-blue-gray-500 overflow-hidden truncate">
          <p>{`${album?.name} is an ${album?.album_type} by ${artists?.join(
            ", "
          )} with ${album?.total_tracks} track(s)`}</p>
        </div>
        <div className="text-xs font-normal text-[#9aa9c2] mt-[10px] ">
          <p>Release Date: {album?.release_date}</p>
        </div>
      </div>
    );
  }
export default AlbumInfo