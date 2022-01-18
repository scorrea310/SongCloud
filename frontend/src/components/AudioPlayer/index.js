import { BsArrowLeftShort } from "react-icons/bs"
import { BsArrowRightShort } from "react-icons/bs"
import { FaPlay } from "react-icons/fa"
import { FaPause } from "react-icons/fa"
import { useState, useRef, useEffect } from "react"
import "./AudioPlayer.css"

const AudioPlayer = () => {

    const [isPlaying, setIsPlaying] = useState(false)
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0)
    //references 
    const audioPlayer = useRef()
    const progressBar = useRef() //reference to progress bar 
    const animationRef = useRef();

    // useEffect(() => {
    //     const seconds = Math.floor(audioPlayer.current.duration)
    //     setDuration(seconds)

    //     progressBar.current.max = seconds;

    // }, [audioPlayer?.current?.loadedmetaData, audioPlayer?.current?.readyState])


    const calculateTime = (secs) => {
        const minutes = Math.floor(secs / 60);
        const returnedMinutes = minutes < 10 ? `${minutes}` : `${minutes}`
        const seconds = Math.floor(secs % 60);
        const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`

        return `${returnedMinutes} : ${returnedSeconds}`
    }


    const togglePausePlay = () => {
        const prevValue = isPlaying

        setIsPlaying(!prevValue)

        if (!prevValue) {
            audioPlayer.current.play()
            animationRef.current = requestAnimationFrame(whilePlaying)
        } else {
            audioPlayer.current.pause()
            cancelAnimationFrame(animationRef.current)
        }
    }

    const whilePlaying = () => {
        progressBar.current.value = audioPlayer.current.currentTime;
        progressBar.current.style.setProperty("--seek-before-width", `${progressBar.current.value / duration * 100}%`)
        setCurrentTime(progressBar.current.value)
        animationRef.current = requestAnimationFrame(whilePlaying)
    }

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

    return (
        <div className="audioPlayer">
            <div className="centerAudioControls">
                <audio
                    ref={audioPlayer}
                    src="https://songcloud-song-images.s3.us-west-1.amazonaws.com/Cudi+Zone.mp3"

                    onLoadedMetadata={() => {
                        const seconds = Math.floor(audioPlayer.current.duration)
                        setDuration(seconds)

                        progressBar.current.max = seconds;
                    }}></audio>
                <button className="forwardBackward" onClick={backThirty}> <BsArrowLeftShort /> 30</button>
                <button className="playPause" onClick={togglePausePlay}> {isPlaying ? <FaPause /> : <FaPlay className="playButton" />}</button>
                <button className="forwardBackward" onClick={forwardThirty} > 30 <BsArrowRightShort /> </button>

                <div className="currentTime">{calculateTime(currentTime)}</div>

                <div className="progressBarContainer">
                    <input type="range" className="progressBar" defaultValue="0" ref={progressBar} onChange={changeRange} ></input>
                </div>

                <div className="duration">{(duration && isNaN(duration) === false) && calculateTime(duration)}</div>
            </div>
        </div >
    )
}

export default AudioPlayer 