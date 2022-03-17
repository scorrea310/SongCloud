import PlaySong from "../PlaySong";
import "./MySongs.css"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { loadUsersSongs } from "../../store/songs";
import { useHistory } from "react-router-dom";


const MySongs = () => {

    const dispatch = useDispatch();
    const history = useHistory()

    let songs = useSelector(state => state.songs);
    const sessionUser = useSelector(state => state.session?.user);
    const [songsLoaded, setSongsLoaded] = useState(false)

    let valueArray = Object.values(songs);



    useEffect(() => {

        dispatch(loadUsersSongs(sessionUser.id)).then(() => setSongsLoaded(true))

    }, [dispatch])



    let divClassName;
    let areThereSongs;
    if (valueArray.length === 0) {
        areThereSongs = false
        divClassName = "noSongs"
    } else {
        areThereSongs = true
        divClassName = "songItemsContainer"
    }


    if (!songsLoaded) {
        return (
            <div style={{ width: "57%", minHeight: "100vh" }}></div>
        )
    };

    return (
        <div className={divClassName}>
            {areThereSongs ? valueArray.map((song) => <PlaySong key={song.url} song={song} />) : <div className="noSongsTextContainer">
                <h2 style={{ marginTop: "100px", fontFamily: "Interstate,Lucida Grande,Arial,sans-serif" }}> No Songs to Display</h2>
                <div className="addASongButtonMySongs" onClick={() => history.push("/upload")}>Upload a Song</div>

            </div>}
        </div>
    )
}


export default MySongs;