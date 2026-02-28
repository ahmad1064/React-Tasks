import React from 'react'
import { FaYoutube, FaFacebook, FaLinkedin, FaRegComment } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import { TbShare3 } from "react-icons/tb";
import Button from './Button';

const Card = ({imageUrl, name, skill, likeCount, commentCount, shareCount}) => {
  return (
    <div>
      <div className='relative w-[20rem] h-[30rem] shadow-2xl rounded-2xl overflow-hidden'>
        {/* Top Part */}
        <div className='absolute w-full h-[10rem] bg-blue-400'>
          <img src={imageUrl} alt="profile" className="h-full rounded-full translate-x-[40%] translate-y-1/4 border-4 border-blue-400 p-[2px] bg-white"/>
        </div>
        {/* Bottom Part */}
        <div className='pt-[14rem] text-center'>
          <h1 className='text-2xl font-bold'>{name}</h1>
          <p>{skill}</p> 
          <div className='flex justify-center gap-[1rem] pt-[1rem]'>
            <FaLinkedin className='bg-blue-400 p-2 text-white text-4xl rounded-full'/>
            <FaYoutube className='bg-red-400 p-2 text-white text-4xl rounded-full'/>
            <FaFacebook className='bg-blue-400 p-2 text-white text-4xl rounded-full'/>
            <AiFillTikTok className='bg-black p-2 text-white text-4xl rounded-full'/>
          </div>
          <div className='flex justify-center gap-[2rem]'>
            <Button text="Subscribe"/>
            <Button text="Message"/>
          </div>
          <div className='flex items-center justify-center mt-4 gap-4'>
            <div className='flex items-center justify-center'>
              <CiHeart />
              <span>{likeCount}</span>
            </div>
            <div className='w-[1px] h-[1rem] bg-black/20'></div>
            <div className='flex items-center justify-center'>
              <FaRegComment/>
              <span>{commentCount}</span>
            </div>
            <div className='w-[1px] h-[1rem] bg-black/20'></div>
            <div className='flex items-center justify-center'>
              <TbShare3 />
              <span>{shareCount}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
