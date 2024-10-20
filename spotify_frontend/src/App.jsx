import React, { useContext } from 'react'
import Sidebar from './compoents/Sidebar/Sidebar'
import Player from './compoents/Player/Player'
import Display from './compoents/Display/Display'
import './index.css';
import { PlayerContext } from './context/PlayerContext';


const App = () => {
       
    const {autioRef ,track} = useContext(PlayerContext);

  return (
    <>
    <div className="h-screen bg-black">
        <div className='h-[90%] flex'>
           <Sidebar/>
           <Display/>
         </div>
         <Player/>
         <audio ref={autioRef} src={track.file} preload='auto'></audio>

      </div>
    </>
  )
}

export default App