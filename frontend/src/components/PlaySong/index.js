import ReactPlayer from 'react-player'
import "./PlaySong.css"

const PlaySong = () => {

    /*
    1. take in a song as a prop. destructure
    2. set CSS for
    
    */

    return (
        <div className='SongContainer'>
            <div id="editButtonContainer">
                <button className='editSongButton'>edit</button>
            </div>
            <div className='songImage'>image</div>
            <div className='audioContainer'>
                <audio src="https://songcloud-song-images.s3.us-west-1.amazonaws.com/1641842329307.mp3" preload="auto" controls className='audioElement'></audio>
            </div>
        </div>
    )
}


export default PlaySong