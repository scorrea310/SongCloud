import "./SongCoverPlayPause.css"
import { FaPlay } from "react-icons/fa"
import { FaPause } from "react-icons/fa"
import { useState, useRef, useEffect } from "react"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { pauseSong } from "../../store/currentSong"
import { playSong } from "../../store/currentSong"





const SongCoverPlayPause = ({ song, songTitlePresent }) => {

    const dispatch = useDispatch();
    const [isHovered, setIsHovered] = useState(true)

    let currentSongToPlay = useSelector(state => state.currentSong);


    let isPlaying;
    if (currentSongToPlay.isPlayingSong) {
        isPlaying = true
    } else {
        isPlaying = false
    }

    let songToPlay = {
        songId: song.songId ? song.songId : song.id,
        currentSong: song.url,
        songImage: song.imageUrl,
        isPlayingSong: false,
        artistName: song.artistName ? song.artistName : song.User?.username,
        songName: song.title
    }

    console.log(song, "111111111")

    return (
        <div className="songPlayPauseCoverAndTitleParentContainer">
            <div
                onMouseEnter={() => setIsHovered(true)}
                // onMouseLeave={() => setIsHovered(false)}
                style={{
                    width: "200px", height: "200px",
                    backgroundImage: `url(${song.imageUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "50% 50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                {
                    (() => {
                        if (isHovered) {
                            if (isPlaying && (song.songId === currentSongToPlay.songId || song.id === currentSongToPlay.songId)) {
                                return <button className="isPlaying" onClick={() => dispatch(pauseSong())}> <FaPause /> </button>
                            } else {
                                return <button className="isPaused" onClick={() => dispatch(playSong(songToPlay))}> <FaPlay /> </button>
                            }
                        }
                    })()
                }
            </div>
            {songTitlePresent && <>
                <div className="songtitleSongCoverPlayPause">{song.title}</div>
                <div className="songArtistSongCoverPlayPause">{song.artistName}</div>
            </>}
        </div>
    )
}

export default SongCoverPlayPause;