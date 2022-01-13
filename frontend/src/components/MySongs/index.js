import PlaySong from "../PlaySong";
import "./MySongs.css"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { loadUsersSongs } from "../../store/songs";



const MySongs = () => {

    const dispatch = useDispatch();


    let songs = useSelector(state => state.songs);
    const sessionUser = useSelector(state => state.session.user);



    let valueArray = Object.values(songs);



    // useEffect(() => {

    //     let getSongs = async () => {
    //         songs = await dispatch(loadUsersSongs(sessionUser.id))
    //     }


    // }, [])



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