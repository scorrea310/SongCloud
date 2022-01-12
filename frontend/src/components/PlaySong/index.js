import "./PlaySong.css"
import EditSongFormModal from '../EditSongModal'
import { useEffect, useState } from "react"

const PlaySong = ({ song }) => {

    // const [isSong, setIsSong] = useState(false)

    let songItem;

    if (song) {
        songItem = (
            <div className='SongContainer'>
                <div id="editButtonContainer">
                    <EditSongFormModal song={song} />
                </div>
                <div className='songTitle'> {song.title}</div>
                <div className='songImage'>
                    <img className='songImagePic' src={`${song.imageUrl}`}></img>
                </div>
                <div className='audioContainer'>
                    <audio src={`${song.url}`} preload="auto" controls className='audioElement'></audio>
                </div>
            </div>
        )
    } else {
        songItem = null
    }


    return (songItem)
}


export default PlaySong