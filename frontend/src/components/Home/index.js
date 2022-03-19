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

    useEffect(() => {

        dispatch(loadSongsThunk()).then(() => {
            setIsLoaded(true)
        })

    }, [dispatch])

    if (!isLoaded) {
        return (
            <div style={{ width: "57%", minHeight: "100vh" }}></div>
        )
    }

    return (
        <div className="allSongsMainContentBackground">
            <div className="artistsContainer">
                <ArtistSongs />
                {console.log(allSongs)}
            </div>
        </div>
    )
}


export default Home;