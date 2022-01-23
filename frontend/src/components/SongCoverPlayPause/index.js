import "./SongCoverPlayPause.css"
import { FaPlay } from "react-icons/fa"
import { FaPause } from "react-icons/fa"
import { useState, useRef, useEffect } from "react"

const SongCoverPlayPause = ({ song }) => {
    const [isPlaying, setIsPlaying] = useState(false)
    const [isHovered, setIsHovered] = useState(false)

    /*
    this component takes in a song and allows the user to hover over album/song
    cover and play/pause a song using the SongCloud Audio player.

    1. displays song cover as background of div.
    2. on hover, displays play/pause button.
    3. On click of play button, this component fires action creator
        which updates isPlaying key in store to true.
            - my new audio player compoment is subscribed to that key,
            and updates when it changes value.
    4. set up currentSong in store to hold aws link to the current song when the
       play button is clicked on song cover.
    */



    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                width: "200px", height: "200px",
                backgroundImage: `url(${song.imageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "50% 50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
            {
                (() => {
                    if (isHovered) {
                        if (isPlaying) {
                            return <button className="isPlaying" onClick={() => setIsPlaying(false)}> <FaPause /> </button>
                        } else {
                            return <button className="isPaused" onClick={() => setIsPlaying(true)}> <FaPlay /> </button>
                        }
                    }
                })()
            }
        </div>
    )
}

export default SongCoverPlayPause;