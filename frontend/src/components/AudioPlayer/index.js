import { BsArrowLeftShort } from "react-icons/bs"
import { BsArrowRightShort } from "react-icons/bs"
import { FaPlay } from "react-icons/fa"
import { FaPause } from "react-icons/fa"
import { useState, useRef, useEffect } from "react"
import "./AudioPlayer.css"
import { HiVolumeUp } from "react-icons/hi"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { pauseSong } from "../../store/currentSong"
import { playSong } from "../../store/currentSong"
import { useCallback } from 'react'

const AudioPlayer = () => {

    const dispatch = useDispatch();

    let currentSongToPlay = useSelector(state => state.currentSong);

    // states
    // const [isPlaying, setIsPlaying] = useState(false)
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0)
    const [volume, setVolume] = useState(1.0)
    //references 
    const audioPlayer = useRef()
    const progressBar = useRef() //reference to progress bar 
    const animationRef = useRef();
    const volumeBar = useRef()


    const calculateTime = (secs) => {
        const minutes = Math.floor(secs / 60);
        const returnedMinutes = minutes < 10 ? `${minutes}` : `${minutes}`
        const seconds = Math.floor(secs % 60);
        const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`

        return `${returnedMinutes} : ${returnedSeconds}`
    }





    const whilePlaying = useCallback(() => {
        if (currentSongToPlay.isPlayingSong === false) return

        if (currentSongToPlay.isPlayingSong === true) {
            progressBar.current.value = audioPlayer?.current?.currentTime;
            progressBar.current.style.setProperty("--seek-before-width", `${progressBar.current.value / duration * 100}%`)
            setCurrentTime(progressBar.current.value)
            animationRef.current = requestAnimationFrame(whilePlaying)
        }
    }, [currentSongToPlay.isPlayingSong, duration])



    const togglePausePlay = () => {
        const prevValue = currentSongToPlay.isPlayingSong

        if (prevValue) {
            dispatch(pauseSong())
        } else if (!prevValue) {
            dispatch(playSong(currentSongToPlay))
        }
    }

    useEffect(() => {

        if (currentSongToPlay.isPlayingSong === null || currentSongToPlay.isPlayingSong === false) {
            audioPlayer.current.pause()
            cancelAnimationFrame(animationRef.current)
        } else {
            audioPlayer.current.play()
            animationRef.current = requestAnimationFrame(whilePlaying)
        }

    }, [currentSongToPlay.isPlayingSong, whilePlaying])



    const changeRange = () => {
        audioPlayer.current.currentTime = progressBar.current.value;
        changePlayerCurrentTime();
    }

    const changePlayerCurrentTime = () => {
        progressBar.current.style.setProperty("--seek-before-width", `${progressBar.current.value / duration * 100}%`);
        setCurrentTime(progressBar.current.value)
    }

    const backThirty = () => {
        progressBar.current.value = Number(progressBar.current.value) - 30
        changeRange()
    }

    const forwardThirty = () => {
        progressBar.current.value = Number(progressBar.current.value) + 30
        changeRange()
    }

    const changeVolume = () => {
        audioPlayer.current.volume = volumeBar.current.value / 100
    }

    // console.log(currentSongToPlay)

    return (
        <div className="audioPlayer">
            <div className="centerAudioControls">
                <audio
                    ref={audioPlayer}
                    src={currentSongToPlay.currentSong}

                    onLoadedMetadata={() => {
                        const seconds = Math.floor(audioPlayer.current.duration)
                        setDuration(seconds)

                        progressBar.current.max = seconds;
                    }}></audio>

                <button className="forwardBackward" onClick={backThirty}> <BsArrowLeftShort /> 30</button>
                <button className="playPause" onClick={togglePausePlay}> {currentSongToPlay.isPlayingSong ? <FaPause /> : <FaPlay className="playButton" />}</button>
                <button className="forwardBackward" onClick={forwardThirty} > 30 <BsArrowRightShort /> </button>

                <div className="currentTime">{calculateTime(currentTime)}</div>

                <div className="progressBarContainer">
                    <input type="range" className="progressBar" defaultValue="0" ref={progressBar} onChange={changeRange} ></input>
                </div>

                <div className="duration">{(duration && isNaN(duration) === false) && calculateTime(duration)}</div>
                <HiVolumeUp className="volumeIcon" />
                <div className="volumeContainer">
                    <input type="range" defaultValue="100" className="volumeInput" ref={volumeBar} onChange={changeVolume}></input>
                </div>
                <div className="audioPlayerSongImageContainer">
                    <div
                        style={{
                            width: "30px", height: "30px",
                            backgroundImage: `url(${currentSongToPlay.songImage})`,
                            backgroundSize: "cover",
                            backgroundPosition: "50% 50%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            marginLeft: "30px"
                        }}
                    >

                    </div>
                </div>
                <div className="audioPlayerSongArtistAndName">
                    <div className="artistNameTextAudioPlayer">{currentSongToPlay.artistName}</div>
                    <div className="songNameTextAudioPlayer"> {currentSongToPlay.songName}</div>
                </div>
            </div>
        </div >
    )
}

export default AudioPlayer 