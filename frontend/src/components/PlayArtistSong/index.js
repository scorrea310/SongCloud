import "./PlayArtistSong.css"


const PlayArtistSong = ({ song }) => {

    // const [isSong, setIsSong] = useState(false)

    let songItem;

    if (song) {
        songItem = (
            <div className='SongContainer'>
                <div className='artistsTitleInPlayer'> {song.title}</div>
                <div className='songImage'>
                    <img alt="songCover" className='songImagePic' src={`${song.imageUrl}`}></img>
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


export default PlayArtistSong