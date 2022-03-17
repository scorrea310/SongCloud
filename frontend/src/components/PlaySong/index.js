import "./PlaySong.css"
import EditSongFormModal from '../EditSongModal'
import { useEffect, useState } from "react"
import SongCoverPlayPause from "../SongCoverPlayPause"

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
                    {/* <img alt="song cover" className='songImagePic' src={`${song.imageUrl}`}></img> */}
                    <SongCoverPlayPause song={song} />
                </div>

                {/* <div className='audioContainer'>
                    <audio src={`${song.url}`} preload="auto" controls className='audioElement'></audio>
                </div> */}
            </div>
        )
    } else {
        songItem = null
    }


    return (songItem)
}


export default PlaySong