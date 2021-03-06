import "./PlaySong.css"
import EditSongFormModal from '../EditSongModal'
import { useEffect, useState, useRef } from "react"
import SongCoverPlayPause from "../SongCoverPlayPause"

const PlaySong = ({ song }) => {

    const isMounted = useRef(true)
    // const [songState, setSongState] = useState(song)

    useEffect(() => {

        if (isMounted) {
            // setSongState(song)
        }

        return (() => {
            isMounted.current = false
        })
    }, [song])

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
            </div>
        )
    } else {
        songItem = null
    }


    return (songItem)
}


export default PlaySong