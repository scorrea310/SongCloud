import { useState } from "react";
import "./Home.css"
import PlayArtistSong from "../PlayArtistSong";
import ArtistSongs from "../ArtistSongs";
import { useEffect } from "react";

const Home = () => {

    const [allSongs, setAllSongs] = useState(false)
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {

        (async () => {
            const res = await fetch("/api/songs")
            const allSongs = await res.json()
            setAllSongs(allSongs)
            setIsLoaded(true)

        })()


    }, [])


    if (!isLoaded) return null;


    return (
        <div className="allSongsMainContentBackground">
            <div className="artistsContainer">
                {allSongs !== false ? console.log(allSongs) : "not loaded"}
            </div>

        </div>

    )
}


export default Home;