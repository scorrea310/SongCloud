import ReactPlayer from 'react-player'
import "./PlaySong.css"
import EditSongFormModal from '../EditSongModal'

const PlaySong = ({ song }) => {

    /*
    1. take in a song as a prop. destructure
    2. set CSS for
    
    */

    return (
        
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
}


export default PlaySong