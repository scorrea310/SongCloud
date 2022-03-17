import { useState } from "react";
import "./Home.css"
import PlayArtistSong from "../PlayArtistSong";
const Home = () => {

    const [selectedArtist, setSelectedArtist] = useState("Kid Cudi")


    const kidCudiClassName = selectedArtist === "Kid Cudi" ? 'artist kidCudi selected' : 'artist kidCud';
    const travisScottClassName = selectedArtist === "Travis Scott" ? 'artist selected' : 'artist'
    const kanyeWestClassName = selectedArtist === "Kanye West" ? 'artist selected' : 'artist'

    const cudiSongs = [{
        userId: 4,
        albumId: null,
        url: "https://songcloud-song-images.s3.us-west-1.amazonaws.com/Cudi+Zone.mp3",
        title: "Cudi Zone",
        imageUrl: "https://songcloud-song-images.s3.us-west-1.amazonaws.com/kid-cudi-man-on-the-moon-album-cover-art-2.jpeg"
    },
    {
        userId: 4,
        albumId: null,
        url: "https://songcloud-song-images.s3.us-west-1.amazonaws.com/Kid+Cudi+-+Just+What+I+Am+feat+King+Chip+(indicud).mp3",
        title: "Just What I am ",
        imageUrl: "https://songcloud-song-images.s3.us-west-1.amazonaws.com/e6cf8fb555c7d3a3add9bbbabb654891.1000x1000x1.jpg"
    },
    {
        userId: 4,
        albumId: null,
        url: "https://songcloud-song-images.s3.us-west-1.amazonaws.com/Reborn.mp3",
        title: "Reborn",
        imageUrl: "https://songcloud-song-images.s3.us-west-1.amazonaws.com/Kanye-West-And-Kid-Cudi-Kids-See-Ghosts-album-cover-820-1000x600.jpeg"
    }]

    const kanyeSongs = [{
        userId: 5,
        albumId: null,
        url: "https://songcloud-song-images.s3.us-west-1.amazonaws.com/Kanye+West+-+Moon+(Audio).mp3",
        title: "Moon",
        imageUrl: "https://songcloud-song-images.s3.us-west-1.amazonaws.com/Donda-Album-Cover-960x500.jpeg"
    },
    {
        userId: 5,
        albumId: null,
        url: "https://songcloud-song-images.s3.us-west-1.amazonaws.com/Runaway.mp3",
        title: "Runaway",
        imageUrl: "https://songcloud-song-images.s3.us-west-1.amazonaws.com/27045_4_classic-album-kanye-west-my-beautiful-dark-twisted-fantasy_ban.jpeg"
    },
    {
        userId: 5,
        albumId: null,
        url: "https://songcloud-song-images.s3.us-west-1.amazonaws.com/Violent+Crimes.mp3",
        title: "Violent Crimes",
        imageUrl: "https://songcloud-song-images.s3.us-west-1.amazonaws.com/Kanye-West-Ye.png"
    }]

    const travisSongs = [{
        userId: 6,
        albumId: null,
        url: "https://songcloud-song-images.s3.us-west-1.amazonaws.com/Travis+Scott+-+90210+ft.+Kacy+Hill+(Audio).mp3",
        title: "90210",
        imageUrl: "https://songcloud-song-images.s3.us-west-1.amazonaws.com/travis-scott.jpeg"
    },
    {
        userId: 6,
        albumId: null,
        url: "https://songcloud-song-images.s3.us-west-1.amazonaws.com/sdp+interlude.mp3",
        title: "sdp interlude",
        imageUrl: "https://songcloud-song-images.s3.us-west-1.amazonaws.com/birdsinthetrap.jpg"
    },
    {
        userId: 6,
        albumId: null,
        url: "https://songcloud-song-images.s3.us-west-1.amazonaws.com/Travis+Scott+-+MAFIA+(Official+Audio).mp3",
        title: "MAFIA",
        imageUrl: "https://songcloud-song-images.s3.us-west-1.amazonaws.com/Travis-Scott-Escape-Plan-1636116865.jpeg"
    }]



    return (
        <div className="artistsContainer">
            {/* <div className="selectArtistContainer">
                <div className="chooseArtistContainer">
                    <div className="selectArtistText"> Select an Artist</div>
                    <div className="artistContainer">
                        <div className={kidCudiClassName} onClick={() => setSelectedArtist("Kid Cudi")}> Kid Cudi</div>
                        <div className={travisScottClassName} onClick={() => setSelectedArtist("Travis Scott")}>Travis Scott</div>
                        <div className={kanyeWestClassName} onClick={() => setSelectedArtist("Kanye West")}>Kanye West</div>
                    </div>
                </div>
            </div>
            <div className="songsContainer">
                {selectedArtist === "Kid Cudi" && cudiSongs.map((song) => <PlayArtistSong key={song.imageUrl} song={song} />)}
                {selectedArtist === "Travis Scott" && travisSongs.map((song) => <PlayArtistSong key={song.imageUrl} song={song} />)}
                {selectedArtist === "Kanye West" && kanyeSongs.map((song) => <PlayArtistSong key={song.imageUrl} song={song} />)}
            </div> */}

        </div>
    )
}


export default Home;