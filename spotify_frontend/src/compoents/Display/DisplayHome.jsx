import React from 'react'
import Navbar from '../Sidebar/Navbar'
import { albumsData } from '../../assets/frontend-assets/assets';
import AlbumItem from '../AlbumItem/AlbumItem';
import { songsData } from '../../assets/frontend-assets/assets';
import SongItems from '../Player/SongItems';
const DisplayHome = () => {
  return (
    <>
    <Navbar/>
   <div className='mb-4 '>
    <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
    <div className='flex overflow-x-auto'>
    {albumsData.map((item,index)=>(<AlbumItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>))}
    </div>
    </div>
    <div className='mb-4 '>
    <h1 className='my-5 font-bold text-2xl'>Today&apos;s biggest hits</h1>
    <div className='flex overflow-x-auto'>
    {songsData.map((item,index)=>(<SongItems key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>))}
    </div>
   </div>

  
    </>
  )
}

export default DisplayHome;