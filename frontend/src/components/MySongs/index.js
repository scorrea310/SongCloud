import PlaySong from "../PlaySong";
import "./MySongs.css"
import {
    useSelector
} from "react-redux";
const MySongs = () => {

    /*
    
    -loop through songs in redux store and make a song component for each song.
    
    */

    const songs = useSelector(state => state.songs);

    console.log(songs);


    let valueArray = Object.values(songs);

    console.log("=========", valueArray);

    let areThereSongs;

    if (valueArray.length === 0) {
        areThereSongs = false
    } else {
        areThereSongs = true
    }


    return (<div className="songItemsContainer">
        {areThereSongs ? valueArray.map((song) => <PlaySong key={song.url} song={song} />) : <h1> No Songs to Display</h1>}
    </div>)
}


export default MySongs;