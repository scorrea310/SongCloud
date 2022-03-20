import { useState } from "react";
import "./Home.css"
import ArtistSongs from "../ArtistSongs";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadSongsThunk } from "../../store/allSongs";

const Home = () => {
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false)
    let allSongs = useSelector(state => state.allSongs);
    let allSongObjects = Object.values(allSongs)

    useEffect(() => {

        dispatch(loadSongsThunk()).then(() => {
            setIsLoaded(true)
        })

    }, [dispatch])

    if (!isLoaded) {
        return (
            <div style={{ width: "100vh", height: "1261px" }}></div>
        )
    }

    console.log(allSongObjects)

    return (
        <div className="allSongsMainContentBackground">
            <div className="artistsContainer">
                {allSongObjects.map((artist) => {
                    return <ArtistSongs artist={artist} key={artist.artistName} />
                })}
            </div>
        </div>
    )
}


export default Home;