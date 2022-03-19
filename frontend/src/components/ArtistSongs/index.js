import "./ArtistSongs.css"
import Carousel from 'react-elastic-carousel'
const ArtistSongs = ({ songs }) => {


    return (
        <div className="artistSongsComponentContainer">
            <div className="artist-Name-Artist-Songs-Component">Artist Name</div>
            <Carousel pagination={false} itemsToShow={3}>
                <div style={{ width: "200px", height: "200px", backgroundColor: "red" }}>1</div>
                <div style={{ width: "200px", height: "200px", backgroundColor: "red" }}>2</div>
                <div style={{ width: "200px", height: "200px", backgroundColor: "red" }}>3</div>
                <div style={{ width: "200px", height: "200px", backgroundColor: "red" }}>4</div>
                <div style={{ width: "200px", height: "200px", backgroundColor: "red" }}>5</div>
                <div style={{ width: "200px", height: "200px", backgroundColor: "red" }}>6</div>
            </Carousel>
        </div>
    )
}

export default ArtistSongs;