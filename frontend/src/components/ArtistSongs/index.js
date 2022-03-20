import "./ArtistSongs.css"
import Carousel from 'react-elastic-carousel'
import SongCoverPlayPause from "../SongCoverPlayPause"

const ArtistSongs = ({ artist }) => {


    console.log(artist)
    return (
        <div className="artistSongsComponentContainer">
            <div className="artist-Name-Artist-Songs-Component">{artist.artistName}</div>
            <Carousel pagination={false} itemsToShow={3}>
                {artist.songs.map((song) => {
                    return <SongCoverPlayPause songTitlePresent={true} song={song} />
                })}
            </Carousel>
        </div>
    )
}

export default ArtistSongs;