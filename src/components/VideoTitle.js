import React from 'react'
import { IoPlay } from "react-icons/io5";
import { IoMdInformationCircleOutline } from "react-icons/io";



const VideoTitle = ({Title,overview}) => {
  return (
    <div className='w-screen aspect-video px-6 md:px-24 pt-[20%] absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-2xl md:text-6xl font-bold'>{Title}</h1>
      <p className='hidden md:inline-block py-6 text-lg w-1/4'>{overview}</p>
      <div className='flex space-x-2 my-4 md:my-0'>
        <button className='bg-white text-black py-1 md:py-4 px-3 md:px-12 text-xl flex items-center rounded-sm hover:bg-opacity-80'>
            <IoPlay />
            Play
        </button>
        <button className='hidden md:inline-block bg-gray-600 text-white mx-2 px-2 my-2 text-xl flex items-center opacity-50 rounded-sm hover:bg-opacity-80'>
            <IoMdInformationCircleOutline />
            More Info
        </button>
      </div>
    </div>
  )
}

export default VideoTitle
