import { useState } from "react";
import "./Home.css"

const Home = () => {

    const [selectedArtist, setSelectedArtist] = useState("Kid Cudi")

    /*
    started useState of selectedArtist as "KidCudi"

    onClick of each div, change selectedArtist to that
    artists name.

    In SongsContainer render only songs for SelectedArtist

    if
    */

    const kidCudiClassName = selectedArtist === "Kid Cudi" ? 'artist kidCudi selected' : 'artist kidCud';
    const travisScottClassName = selectedArtist === "Travis Scott" ? 'artist selected' : 'artist'
    const kanyeWestClassName = selectedArtist === "Kanye West" ? 'artist selected' : 'artist'





    return (
        <div className="artistsContainer">
            <div className="selectArtistContainer">
                <div className="chooseArtistContainer">
                    <div className="selectArtistText"> Select an Artist</div>
                    <div className="artistContainer">
                        <div className={kidCudiClassName} > Kid Cudi</div>
                        <div className={travisScottClassName}>Travis Scott</div>
                        <div className={kanyeWestClassName}>Kanye West</div>
                    </div>
                </div>
            </div>
            <div className="songsContainer"></div>

        </div>
    )
}


export default Home;