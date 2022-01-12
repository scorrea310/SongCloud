import PlaySong from "../PlaySong";
import "./MySongs.css"
import {
    useSelector
} from "react-redux";

import { useState } from "react";

const MySongs = () => {



 
    const songs = useSelector(state => state.songs);




    let valueArray = Object.values(songs);

 


    let divClassName;
    let areThereSongs;
    if (valueArray.length === 0) {
        areThereSongs = false
        divClassName = "noSongs"
    } else {
        areThereSongs = true
        divClassName = "songItemsContainer"
    }



    return (
        <div className={divClassName}>
            {areThereSongs ? valueArray.map((song) => <PlaySong key={song.url} song={song} />) : <h1> No Songs to Display</h1>}
        </div>
    )
}


export default MySongs;