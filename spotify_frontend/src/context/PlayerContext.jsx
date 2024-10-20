import { createContext, useEffect, useState } from "react";
import { useRef } from "react";
import { songsData } from "../assets/frontend-assets/assets";
export const PlayerContext=createContext();

const PlayerContextProvider =(props)=>{

       const autioRef =useRef();
      const seekBg=useRef();
      const seekBar=useRef();

      const [track,setTrack]=useState(songsData[0]);
      const [playerStatus, setPlayerStatus]=useState(false);
      const [time,setTime]=useState({
        currentTime:{
            second:0,
            minute:0
        },totalTime:{
            second:0,
            minute:0
        }
      })

const playWithId=async(id)=>{
    await setTrack(songsData[id]);
    await autioRef.current.play();
    setPlayerStatus(true);
}

const seekSong =async(e)=>{
    console.log(e);
   autioRef.current.currentTime=((e.nativeEvent.offsetX / seekBg.current.offsetWidth)*autioRef.current.duration)

}

const play=()=>{
    autioRef.current.play();
    setPlayerStatus(true);
}
const pause=()=>{
    autioRef.current.pause();
    setPlayerStatus(false);
}

const previous =async()=>{
    if(track.id>0){
        await setTrack(songsData[track.id-1]);
        await autioRef.current.play();
        setPlayerStatus(true);
    }
}

const next =async()=>{
    if(track.id < songsData.length-1){
        await setTrack(songsData[track.id+1]);
        await autioRef.current.play();
        setPlayerStatus(true);
    }
}

useEffect(()=>{
    setTimeout(()=>{
       autioRef.current.ontimeupdate=()=>{

       seekBar.current.style.width = (Math.floor(autioRef.current.currentTime/autioRef.current.duration*100))+"%";

        setTime({
            currentTime:{
                second:Math.floor(autioRef.current.currentTime % 60),
                minute:Math.floor(autioRef.current.currentTime / 60)
            },totalTime:{
                second:Math.floor(autioRef.current.duration % 60),
                minute:Math.floor(autioRef.current.duration / 60)
            }
        })
       }
    },1000);
},[autioRef])


    const contextValue={
        autioRef,
        seekBar,
        seekBg,
        track,setTrack,
        playerStatus,setPlayerStatus,
        time,setTime,
        play,pause,
        playWithId,previous,next,
        seekSong
    }

    return(
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    )

}

export default PlayerContextProvider;
